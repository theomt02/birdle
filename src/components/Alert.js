import "../style/Alert.scss";
import { motion } from "framer-motion";

const Alert = ({ alertMessage }) => {
  return (
    <motion.div
      animate={{ x: [0, -19, 18, -5, 0] }}
      transition={{ ease: [0.36, 0.07, 0.19, 0.97] }}
      className="Alert"
    >
      <h2>{alertMessage}</h2>
    </motion.div>
  );
};

export default Alert;
