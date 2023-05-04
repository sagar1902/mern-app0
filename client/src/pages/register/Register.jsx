import { Link } from "react-router-dom";
import "./register.css";
import { BASE_URL } from "../../helper";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [error,setError]=useState(false);

  const handleSubmit=async (e)=>{
     e.preventDefault();
     if(username===""||email===""||password===""||file==="")return;
     setError(false);

     const newUser={
      username,email,password
     };

     if(file){
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newUser.profilePic=filename;
      try{
        await axios.post(`${BASE_URL}/upload`,data);
      }catch(err){

      }
     }



     try{
       const res=await axios.post(`${BASE_URL}/auth/register`,newUser);
       res.data&&window.location.replace("/login");
     }catch(err){ 
       setError(true);
     }
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter username..." onChange={(e)=>{setUsername(e.target.value)}}/>
        <label>Email</label>
        <input type="email" placeholder="Enter email..." onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
        <label>Password</label>
        <input type="password" placeholder="Enter password..." onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <label>Profile Picture</label>
        <input type="file" onChange={(e)=>{
          setFile(e.target.files[0]);
        }}/>
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error&&<span style={{color:"tomato",marginTop:"10px",fontWeight:"600"}}>Something went wrong !</span>}
    </div>
  );
};

export default Register;
