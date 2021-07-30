import { Link } from "react-router-dom"
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link className={style.navLink} to="/listdb" style={{ textDecoration: "none" }}>List</Link>
            <Link className={style.navLink} to="/create" style={{ textDecoration: "none" }}>Create</Link>
        </div>
    )
}

export default Navbar
