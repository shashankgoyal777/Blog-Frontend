import React, { useState } from "react";

function AddBlogs() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [image, setImage] = useState();

  

const formData=new FormData()

formData.append("name",name)
formData.append("title",title)
formData.append("blogContent",blogContent)
formData.append("image",image)



  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://blog-backend-klhp.onrender.com/sendBlog", {
        method:'POST',
           body: formData,
    }).then((response)=>response.json())
    .then((result)=>{
        console.log(result)
    })
  }



  return (
    <div className="container border-2 border-black w-[50%] m-auto ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 flex justify-center items-center gap-2 " method="POST"
        enctype="multipart/form-data"
      >
        <label htmlFor="">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border-2 border-black w-[20%]"
        />

        <label htmlFor="">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title"
          className="border-2 border-black w-[20%]"
        />

        <label htmlFor="">Blog-Content: </label>
        <textarea
          type="text"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Blog Content..."
          className="border-2 border-black w-[40%] h-[200px]"
        />
        <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])} />
        <input
          type="submit"
          className="border-2 border-black pl-3 pr-3 p-1 rounded-lg"
        />
      </form>
    </div>
  );
}

export default AddBlogs;
