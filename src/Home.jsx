import { Result } from "postcss";
import React, { useEffect, useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://blog-backend-klhp.onrender.com/getBlogs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setBlogs(result);
      });
    }, []);
    
    console.log(blogs);
  function handleSearch(e) {
    e.preventDefault();
    fetch("https://blog-backend-klhp.onrender.com/search?q=" + search, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBlogs(result);
      });
  }

  return (
    <>
      <div className="container w-[100%]  p-1 m-1 relative">
        
        <form
          action=""
          onSubmit={handleSearch}
          className="flex justify-end mt-1"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="border-2 border-black "
          />
          <input
            type="submit"
            onClick={handleSearch}
            className="border-2 border-black ml-1 mr-2 pr-2 pl-2 rounded-md h-9"
          ></input>
        </form>
        <div className="flex flex-wrap justify-center border-2 mx-auto w-[98vw]">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <div className=" flex flex-col  items-center border-2 border-black m-2 p-2 w-72 h-[auto] ">

                  <img src={`https://blog-backend-klhp.onrender.com/${blog.image}`} className="h-56"></img>

                  <h3 className="text-[22px] font-semibold font-serif">{blog.name}</h3>
                  <p className="text-[#6f6e6e]">{blog.title}</p>

                  <p>{blog.blogContent}</p>
                </div>
              );
            })
          ) : (
            <>
              <p>No Blogs Found... :( </p>
            </>
          )}
        </div>
      </div>

      <a href="addBlog">
        <button className="hover:border-[red]:px-4 border-2 border-black rounded-sm text-[blue] font-bold px-2 border-[#5656d1]">
          Add New Blog
        </button>
      </a>
    </>
  );
}

export default Home;
