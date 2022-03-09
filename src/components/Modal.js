import "../style/Modal.scss";

import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ setGameRestart, won, gameEnd, row, word }) => {
  const gameRestartHandle = () => {
    setGameRestart(true);
  };

  return (
    <>
      {gameEnd ? (
        <AnimatePresence>
          <motion.div
            animate={{
              opacity: [0, 1],
            }}
            transition={{ delay: 1.5 }}
            className="modal-container"
          >
            <div className="modal">
              {won ? (
                row === 1 ? (
                  <h2>You got the word first try</h2>
                ) : (
                  <h2>You got the word in {row} tries</h2>
                )
              ) : (
                <h2>The correct word was {word}</h2>
              )}
              <button className="play-again" onClick={gameRestartHandle}>
                {won ? "PLAY AGAIN" : "RETRY"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default Modal;
