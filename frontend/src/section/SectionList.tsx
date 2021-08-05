import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import style from "./SectionList.module.css";
import { motion } from "framer-motion";

const SectionList: React.FC = () => {
  return (
    <motion.div
      className={style.container}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/form" style={{ textDecoration: "none" }}>
        <Card section="Form" />
      </Link>
      <Link to="/httpRequest" style={{ textDecoration: "none" }}>
        <Card section="HTTP Request" />
      </Link>
      <Link to="/listdb" style={{ textDecoration: "none" }}>
        <Card section="Database" />
      </Link>
      <Link to="/auth" style={{ textDecoration: "none" }}>
        <Card section="Auth" />
      </Link>
      <Link to="/redux" style={{ textDecoration: "none" }}>
        <Card section="Redux" />
      </Link>
      <Link to="/todo" style={{ textDecoration: "none" }}>
        <Card section="Todo" />
      </Link>
    </motion.div>
  );
};

export default SectionList;
