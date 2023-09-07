import 'bootstrap/dist/css/bootstrap.css';
import styles from "./topBar.module.css"
import profileSample from "../assets/profileSample.png";
import { getView } from '../utils/ApiUtil';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function TopNav() {

    return (
        <nav className={`navbar navbar-expand-lg ${styles.customNavBar}`}>
           <Link className={styles.home} to="/dashboard">
                    <Home />
            </Link>
          <a className={`navbar-brand ${styles.centerItems}`} href="#">{getView().students ? 'Student': 'Academic'}</a>
          <img className={styles.profileImage} src={profileSample}></img>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </input>
            </form>
          </div> */}
      </nav>
    )
  }