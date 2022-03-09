// favicon <a href='https://dryicons.com/free-icons/birds'> Icon by Dryicons </a>
import "./style/App.scss";
// tweet
import tweetWav from "./bird-noise.wav";
import { useState, useEffect } from "react";
// Data
import birdNames from "./bird_names.json";
import flwords from "./flwords.json";
// Components
import Alert from "./components/Alert";
import Game from "./components/Game";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import InfoModal from "./components/InfoModal";
// firebase
import { ref, onValue, set } from "firebase/database";
import { db } from "./firebase";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [word, setWord] = useState(null);
  const [wordSplit, setWordSplit] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [letters, setLetters] = useState([]);
  const [savedLetters, setSavedLetters] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [alerting, setAlerting] = useState(false);
  const [enterDisabled, setEnterDisabled] = useState(true);
  const [keyboardDisabled, setKeyboardDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [triedLetters, setTriedLetters] = useState([]);
  const [playCount, setPlayCount] = useState(0);
  const [infoToggle, setInfoToggle] = useState(false);

  const tweet = new Audio(tweetWav);

  //   Load a new word on startup
  const getCurrentWord = () => {
    if (word === null || gameRestart) {
      const newWord = birdNames[Math.floor(Math.random() * 72)].toLowerCase();
      setWord(newWord);
      setWordSplit(newWord.split(""));
    }
  };
  // get a word on loadup
  useEffect(() => {
    getCurrentWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get play count from firebase
  useEffect(() => {
    const playCountRef = ref(db, "playcount");
    onValue(playCountRef, (snapshot) => {
      const data = snapshot.val();
      setPlayCount(data);
    });
  }, []);

  // RESTART GAME
  useEffect(() => {
    if (gameRestart) {
      console.log("Restarting game");
      setWon(false);
      setGameEnd(false);
      setCurrentRow(0);
      setCurrentTile(0);
      setLetters([]);
      setSavedLetters([]);
      setEnterDisabled(true);
      setKeyboardDisabled(false);
      getCurrentWord();
      setTriedLetters([]);
      setGameRestart(false);

      console.log("Game restarted");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameRestart]);

  const checkWord = () => {
    // Check if word is in dictionary
    if (letters.length < 5) {
      return;
    }
    if (gameEnd) {
      return;
    }
    if (alerting === false) {
      // if valid word
      if (
        flwords.includes(letters.join("")) ||
        birdNames.includes(letters.join(""))
      ) {
        // Save letters
        wordSaveHandle();
        // Clear letter array
        setLetters([]);
        // Set row to next
        setCurrentRow(currentRow + 1);
        // Reset tiles
        setCurrentTile(0);
        // if invalid word
      } else {
        console.log("Invalid word");
        alertHandle("Invalid word");
      }
    }
    // if word is correct
    if (letters.join("") === word) {
      setKeyboardDisabled(true);
      setWon(true);
      set(ref(db, "playcount"), playCount + 1);
      tweet.play();
      setGameEnd(true);
      return;
    }
    if (currentRow === 5) {
      setGameEnd(true);
    }
  };

  const alertHandle = (msg) => {
    setAlerting(true);
    setKeyboardDisabled(true);
    setAlertMessage(msg);
    setAlertEnabled(true);
    setTimeout(() => {
      setAlertEnabled(false);
      setAlerting(false);
      setKeyboardDisabled(false);
    }, 1200);
  };

  const wordSaveHandle = () => {
    const arr = [];
    const tempLetters = [...wordSplit];
    const tried = [];
    const goodLetters = [];
    letters.forEach((savedLetter, i) => {
      if (tempLetters[i] === savedLetter) {
        arr.push({ letter: savedLetter, status: "correct-place" });
        tempLetters[i] = null;
        // Add letter to "good letters" to avoid disabling
        goodLetters.push(savedLetter);
      } else if (tempLetters.includes(savedLetter)) {
        arr.push({ letter: savedLetter, status: "correct-letter" });
        // Remove letter from check array
        let tempI = tempLetters.indexOf(savedLetter);
        tempLetters[tempI] = null;
        // Add letter to "good letters" to avoid disabling
        goodLetters.push(savedLetter);
      } else {
        arr.push({ letter: savedLetter, status: "not-found" });
        if (!goodLetters.includes(savedLetter)) {
          tried.push(savedLetter);
        }
      }
    });
    const newSaved = [...savedLetters, arr];
    setSavedLetters(newSaved);
    setTriedLetters([...triedLetters, ...tried]);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="main-header">
          <div className="info">
            <div className="info-button">
              <FontAwesomeIcon
                onClick={() => setInfoToggle(!infoToggle)}
                icon={faCircleQuestion}
                size="3x"
              />
            </div>
          </div>
          <h1>birdle</h1>
          <h2 id="win-count">
            Birdle has been won{" "}
            <span className="playcount-box">{playCount}</span> times
          </h2>
        </div>
        <div className="alert-box">
          <div className="mobile-play-count">
            <h3 id="win-count">
              Birdle has been won{" "}
              <span className="playcount-box">{playCount}</span> times
            </h3>
          </div>
          {alertEnabled && <Alert alertMessage={alertMessage} />}
        </div>
      </div>
      <div className="spacer"></div>
      <Game
        word={word}
        currentRow={currentRow}
        wordSplit={wordSplit}
        letters={letters}
        savedLetters={savedLetters}
        won={won}
      />
      <Keyboard
        currentTile={currentTile}
        setCurrentTile={setCurrentTile}
        letters={letters}
        setLetters={setLetters}
        checkWord={checkWord}
        enterDisabled={enterDisabled}
        setEnterDisabled={setEnterDisabled}
        keyboardDisabled={keyboardDisabled}
        gameEnd={gameEnd}
        setGameRestart={setGameRestart}
        tried={triedLetters}
      />
      <Modal
        gameEnd={gameEnd}
        won={won}
        word={word}
        row={currentRow}
        setGameRestart={setGameRestart}
      />
      <InfoModal infoToggle={infoToggle} setInfoToggle={setInfoToggle} />
    </div>
  );
}

export default App;
