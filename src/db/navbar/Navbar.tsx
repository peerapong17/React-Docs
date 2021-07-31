import { ReactNode } from "react";
import style from "./Navbar.module.css";

const Navbar: React.FC<ReactNode> = ({ children }) => {
  return <div className={style.navbar}>{children}</div>;
};

export default Navbar;
