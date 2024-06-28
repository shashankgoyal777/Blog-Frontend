import React, { useState, useEffect } from "react";
import "./style.css";
function Show() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isUpdate, setIsUpdate] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/getData")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        setData(result);
      });
  }, []);
  // printLatestData();

//   console.log(data);

  function printLatestData() {
    fetch("http://localhost:4000/getData")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        setData(result);
      });
  }

  function handleDelete(idToDelete) {
    console.log(idToDelete);
    fetch("http://localhost:4000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idToDelete,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.Deleted === "Data Deleted") printLatestData();
        //   window.location.href = "http://localhost:5173/showData";
        //   setData(result);
      });
  }

  function handleUpdate(idToUpdate) {
    console.log(idToUpdate);
    setIsUpdate(idToUpdate);
    let obj = data.find((obj) => {
      return obj._id === idToUpdate;
    });
    setName(obj.name);
    setMessage(obj.message);
  }


  function handleUpdateSubmit(e) {
    e.preventDefault();
    // console.log(name,message);
    fetch("http://localhost:4000/updateData", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isUpdate,
        name,
        message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        printLatestData();
      });
      setIsUpdate("")
  }
  return (
    <>
      {isUpdate ? (
        <div className="updation-form">
          <form action="" onSubmit={handleUpdateSubmit}>
            <lable>Name</lable>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <lable>Message</lable>
            <textarea
              name="message"
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <input type="submit"></input>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        {data.map((x) => {
          return (
            <>
              <div className="card">
                <p>{x.name}</p>
                <p>{x.message}</p>
                <button onClick={() => handleDelete(x._id)}>Delete</button>
                &nbsp; &nbsp;
                <button onClick={() => handleUpdate(x._id)}>Update</button>
              </div>
            </>
          );
        })}
      </div>
      <br></br>
      <button onClick={() => (window.location.href = "/")}>Add Message</button>
    </>
  );
}

export default Show;
