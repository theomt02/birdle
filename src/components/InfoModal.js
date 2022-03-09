import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const InfoModal = ({ infoToggle, setInfoToggle }) => {
  const containerVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <>
      <AnimatePresence>
        {infoToggle ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-container"
          >
            <div className="info-modal">
              <h2>How to play</h2>
              <FontAwesomeIcon
                id="info-modal-close"
                icon={faSquareXmark}
                size="2x"
                onClick={() => setInfoToggle(!infoToggle)}
              />
              <div className="info-modal-inside">
                <br />
                <p>
                  Guess the <b>bird</b> in six tries.
                </p>
                <p>
                  Each guess must be a valid five-letter word. Hit the enter
                  button to submit.{" "}
                </p>
                <p>
                  After each guess, the color of the tiles will change to show
                  how close your guess was to the word.
                </p>
                <p>
                  <b>Examples</b>
                </p>
                <div className="info-examples">
                  <div className="row-container">
                    <div className="info-row">
                      <div className="info-tile">e</div>
                      <div className="info-tile">a</div>
                      <div className="info-tile correct-place">g</div>
                      <div className="info-tile">l</div>
                      <div className="info-tile">e</div>
                      <p>
                        The letter G is in the word and in the correct spot.
                      </p>
                    </div>
                  </div>
                  <div className="row-container">
                    <div className="info-row">
                      <div className="info-tile">r</div>
                      <div className="info-tile correct-letter">o</div>
                      <div className="info-tile">b</div>
                      <div className="info-tile">i</div>
                      <div className="info-tile">n</div>
                      <p>The letter O is in the word but in the wrong spot.</p>
                    </div>
                  </div>
                  <div className="row-container">
                    <div className="info-row">
                      <div className="info-tile not-found">c</div>
                      <div className="info-tile">r</div>
                      <div className="info-tile">a</div>
                      <div className="info-tile">n</div>
                      <div className="info-tile">e</div>
                      <p>The letter C is not in the word at all.</p>
                    </div>
                  </div>
                </div>
                <div className="info-modal-foot">
                  <div className="foot-box">
                    <p>
                      This game is a{" "}
                      <a href="https://www.nytimes.com/games/wordle/index.html">
                        Wordle
                      </a>{" "}
                      rip-off.
                    </p>
                    <p>
                      Made with <a href="https://reactjs.org/">React</a>{" "}
                    </p>
                    <p>
                      Favicon by{" "}
                      <a href="https://dryicons.com/free-icons/birds">
                        Dryicons
                      </a>
                      , Icons by{" "}
                      <a href="https://fontawesome.com/">Fontawesome</a>
                    </p>
                  </div>
                  <div className="socials">
                    <a href="https://www.instagram.com/theo.c.mt/">
                      <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default InfoModal;
