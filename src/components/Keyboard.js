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

  const handleKeyInput = useCallback((e) => {
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
  });

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
    if (currentTile < 5) {
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
          disabled={keyboardDisabled || disabled}
        >
          q
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="w"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          w
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="e"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          e
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="r"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          r
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="t"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          t
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="y"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          y
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="u"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          u
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="i"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          i
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="o"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          o
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="p"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          p
        </button>
      </div>
      <div className="keyboard-row">
        <button
          onClick={(e) => tileCH(e)}
          keyid="a"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          a
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="s"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          s
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="d"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          d
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="f"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          f
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="g"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          g
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="h"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          h
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="j"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          j
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="k"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          k
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="l"
          className="key"
          disabled={keyboardDisabled || disabled}
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
          disabled={keyboardDisabled || disabled}
        >
          z
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="x"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          x
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="c"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          c
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="v"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          v
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="b"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          b
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="n"
          className="key"
          disabled={keyboardDisabled || disabled}
        >
          n
        </button>
        <button
          onClick={(e) => tileCH(e)}
          keyid="m"
          className="key"
          disabled={keyboardDisabled || disabled}
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
