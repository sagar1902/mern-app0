import { useEffect, useState } from "react";
import { BASE_URL } from "../../helper";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();

  //[] empty array indicates fire the useEffect just at the begining
  useEffect(()=>{
       const fetchPosts=async ()=>{
          const res=await axios.get(`${BASE_URL}/posts${search}`);
          setPosts(res.data);
       }
       fetchPosts();
  },[search]);
  return (
    <>
     <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home
