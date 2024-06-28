import React from "react";

function Header() {
  return (
    <div className="items-center flex justify-between p-10 w-[100%] h-[100px] border-b-2 shadow-lg ">

<a href="/">
      <h1 className="  w-[400px]  font-medium text-[35px]">Header</h1>
</a>

      <ul className=" w-[500px] flex gap-10 text-black font-bold text-[20px]">
        <a href="/">
          <li className="border-white border-2 rounded-md px-2 hover:border-[#2b2b64]">Home</li>
        </a>
        <a href="/addBlog">

          <li className="border-white border-2 rounded-md px-2 hover:border-[#2b2b64]">Add Blog</li>
        </a>
        <a href="/contact">
          <li className="border-white border-2 rounded-md px-2 hover:border-[#2b2b64]">Contact</li>
        </a>
        <li className="border-white border-2 rounded-md px-2 hover:border-[#2b2b64]">About</li>
      </ul>
    </div>
  );
}

export default Header;
