import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Keyboard = ({
  gameEnd,
  currentTile,
  setCurrentTile,
  letters,
  setLetters,
  checkWord,
  enterDisabled,
  setEnterDisabled,
  keyboardDisabled,
  setGameRestart,
  tried,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(false);

  // useEffect
  useEffect(() => {
    if (currentTile === 5) {
      setDisabled(true);
      setEnterDisabled(false);
    } else {
      setDisabled(false);
      setEnterDisabled(true);
    }
    if (currentTile === 0) {
      setBackDisabled(true);
    } else {
      setBackDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTile]);

  // KEYPRESS

  const handleKeyInput = (e) => {
    const { key, keyCode } = e;
    if (isLetter(key)) {
      keyTileCH(key);
    }
    if (keyCode === 8) {
      deleteChar();
    }
    if (keyCode === 13) {
      if (gameEnd) {
        setGameRestart(true);
        return;
      }
      checkWord();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyInput);
    return () => {
      window.removeEventListener("keydown", handleKeyInput);
    };
  }, [handleKeyInput]);

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  const keyTileCH = (key) => {
    if (currentTile < 5 && !tried.includes(key)) {
      setCurrentTile(currentTile + 1);
      setLetters([...letters, key]);
    }
  };

  const tileCH = (e) => {
    if (currentTile < 5) {
      setCurrentTile(currentTile + 1);
      setLetters([...letters, e.target.getAttribute("keyid")]);
    }
  };

  const deleteChar = () => {
    if (currentTile > 0) {
      setCurrentTile(currentTile - 1);
      const newLetters = letters.slice(0, -1);
      setLetters(newLetters);
    }
  };
  const enterCH = () => {
    checkWord();
  };

  return (
    <div className="Keyboard">
      <div className="keyboard-row">
        <button
          onClick={(e) => tileCH(e)}
          keyid="q"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("q")}
        >
          q
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="w"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("w")}
        >
          w
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="e"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("e")}
        >
          e
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="r"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("r")}
        >
          r
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="t"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("t")}
        >
          t
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="y"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("y")}
        >
          y
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="u"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("u")}
        >
          u
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="i"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("i")}
        >
          i
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="o"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("o")}
        >
          o
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="p"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("p")}
        >
          p
        </button>
      </div>
      <div className="keyboard-row">
        <button
          onClick={(e) => tileCH(e)}
          keyid="a"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("a")}
        >
          a
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="s"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("s")}
        >
          s
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="d"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("d")}
        >
          d
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="f"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("f")}
        >
          f
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="g"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("g")}
        >
          g
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="h"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("h")}
        >
          h
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="j"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("j")}
        >
          j
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="k"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("k")}
        >
          k
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="l"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("l")}
        >
          l
        </button>
      </div>
      <div className="keyboard-row">
        <button
          onClick={enterCH}
          keyid="enter"
          className="key"
          disabled={keyboardDisabled || enterDisabled}
        >
          enter
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="z"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("z")}
        >
          z
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="x"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("x")}
        >
          x
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="c"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("c")}
        >
          c
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="v"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("v")}
        >
          v
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="b"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("b")}
        >
          b
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="n"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("n")}
        >
          n
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="m"
          className="key"
          disabled={keyboardDisabled || disabled || tried.includes("m")}
        >
          m
        </button>
        <button
          onClick={deleteChar}
          keyid="back"
          className="key"
          disabled={keyboardDisabled || backDisabled}
        >
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
