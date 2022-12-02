import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blog,setBlog]=useState([
    {title : "Hello World", body:"lorem ipsum.." ,author:'ravi',id: 1},
    {title : "Earth", body:"lorem ipsum." ,author:"john",id: 2},
    {title : "Moon", body:"lorem ipsum.." ,author:"anu",id: 3},
]);
const handleDelete = (id) => {
    const newBlog=blog.filter(blog=> blog.id !== id);
    setBlog(newBlog);
}
useEffect(()=>{
    console.log("Use effect running")
    console.log(blog);
},[])
    return (
        <div className="home">
            <Bloglist blog={blog} title="All blogs!" handleDelete={handleDelete}/>
            <Bloglist blog={blog.filter((blog)=>blog.author==='ravi')} title="Ravi's blogs!"/>
        </div>
      );
}
export default Home;
