import { motion } from "framer-motion";

const Tile = ({ letters, savedLetters, row, currentRow, tileNum, won }) => {
  return (
    <motion.div
      animate={
        currentRow - 1 === row ? (won ? { y: [0, -20, 0] } : null) : null
      }
      transition={{ duration: 0.3, delay: tileNum / 10 }}
      className={`tile ${
        savedLetters[row] ? savedLetters[row][tileNum].status : ""
      }`}
    >
      {currentRow === row ? (
        <h3>{letters[tileNum] ? letters[tileNum] : ""}</h3>
      ) : null}
      {currentRow === row ? null : (
        <h3>
          {savedLetters[row] && savedLetters[row][tileNum]
            ? savedLetters[row][tileNum].letter
            : ""}
        </h3>
      )}
    </motion.div>
  );
};

export default Tile;
