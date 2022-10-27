import React from "react" ;
import PokeApi from "/workspace/react-hello/src/js/component/PokeApi.jsx"

const Home = () => {

  return (
    <div>
      <h1><PokeApi/></h1>
    </div>

  );
}


export default Home;









/* 

import React, {useState} from "react";

const Home = () => {

  const [blogs, setBlogs]= useState([
    {title:"my new website", body:"lorem...", author:"mario", id:1},
    {title:"my hello", body:"lorem...", author:"luiggi", id:2},
    {title:"my developer", body:"lorem...", author:"yoshu", id:3}
  ]);

  return (
    <div>
      {blogs.map((blog)=> (
        <div className="blog" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>

        </div>
        
      ))}  
    </div>

  );
}


export default Home; */


/* const Home = () => {

  const [name, setName]= useState("mario");

  const [age, setAge] = useState(23)

  const handleClick = () => {
    setName("luiggi");
    setAge(30)
  }


  return (
    <div>
      <h2>Mario Bross</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>click me</button>
    </div>

  );
} */


















/* 
import React, { useEffect, useState } from "react";

const ControlledInputForm = (props) => {

  const [currentValue, setValue] = useState("");
  return (
    <div>
      <h2>Your name is: {currentValue ? currentValue : "Not defined"}
</h2>

  
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={currentValue}
        placeholder="Please type your name"
      />
    
</div>
  );
};
ControlledInputForm.propTypes = {};
export default ControlledInputForm; */