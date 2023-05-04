import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import { BASE_URL } from "../../helper";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [cats,setCats]=useState([]);
  const PF="https://blogsitebackend3.onrender.com/images/";

  const {user}=useContext(Context);

  useEffect(()=>{
     const getCats=async()=>{
        const res=await axios.get(`${BASE_URL}/categories`);
        setCats(res.data);
     }
     getCats();
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={user?PF + user.profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiGrMsbylT2QUbIwHvKJPvR-gaN4IQM6hLA&usqp=CAU"} alt="#"/>
        <p>Let's share with the community. Everyone needs some time alone to reflect on feelings. Being able to express how you feel might help you make better decisions about what is right for you now. Express yourself freely :)</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>(
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItems">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <Link to="https://www.linkedin.com/in/srijan-saurabh-jha-73b056216/" target="_blank">
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </Link>
            <Link to="https://www.instagram.com/srijan_saurabh/" target="_blank">
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default Sidebar
