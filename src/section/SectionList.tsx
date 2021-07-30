import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import style from "./SectionList.module.css";

const SectionList: React.FC = () => {
  return (
    <div className={style.container}>
      <Link to="/form" style={{ textDecoration: "none" }}>
        <Card section="Form" />
      </Link>
      <Link to="/httpRequest" style={{ textDecoration: "none" }}>
        <Card section="HTTP Request" />
      </Link>
      <Card section="Database" />
      <Card section="Redux" />
    </div>
  );
};

export default SectionList;
