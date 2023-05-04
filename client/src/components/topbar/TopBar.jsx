import {Link} from 'react-router-dom';
import "./topbar.css"
import { useContext } from 'react';
import { Context } from '../../context/Context';

const TopBar = () => {
  const {user,dispatch}=useContext(Context);

  const PF="https://blogsitebackend3.onrender.com/images/";


  const handleLogout=async()=>{
     dispatch({type:"LOGOUT"});
  }

  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <Link to="https://www.linkedin.com/in/srijan-saurabh-jha-73b056216/" target='_blank'>
      <i className="topIcon fa-brands fa-linkedin"></i>
      </Link>
      <Link to="https://www.instagram.com/srijan_saurabh/" target="_blank">
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className='link' to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className='link' to="/">ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className='link' to="/">CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className='link' to="/write">WRITE</Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user&&"LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user?(
            <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="#"/>
            </Link>
          ):(
            <ul className='topList'>
              <li className='topListItem'>
                 <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className='topListItem'>
                  <Link className='link' to="/register">REGISTER</Link>
              </li>
            </ul>
          ) 
        }
       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar
