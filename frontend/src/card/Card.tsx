import { motion } from "framer-motion";
import React from "react";
import style from "./Card.module.css";

interface IProps {
  section: string;
}

const Card: React.FC<IProps> = ({ section }) => {
  return (
    <motion.div
      className={style.container}
      whileHover={{ y:-10, transition: { yoyo: Infinity } }}
    >
      {section}
    </motion.div>
  );
};

export default Card;
