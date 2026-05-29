"use client";

import { useEffect, useState } from "react";

export default function Home() {

  // INPUT STATES

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");



  // TODO ARRAY

  const [todos, setTodos] = useState<any[]>([]);



  // LOAD DATA FROM LOCAL STORAGE

  useEffect(() => {

    const savedTodos = localStorage.getItem("mytodos");

    if (savedTodos) {

      setTodos(JSON.parse(savedTodos));
    }

  }, []);




  // ADD TODO

  const addTodo = () => {

    const newTodo = {

      title,

      description,
    };



    const updatedTodos = [...todos, newTodo];



    setTodos(updatedTodos);



    localStorage.setItem(
      "mytodos",
      JSON.stringify(updatedTodos)
    );



    setTitle("");

    setDescription("");
  };




  return (
    <div style={{ padding: "20px" }}>

      <h1>Todo App</h1>



      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />



      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />



      <button onClick={addTodo}>
        Add Todo
      </button>



      <hr />



      {
        todos.map((item, index) => (

          <div key={index}>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <hr />

          </div>
        ))
      }

    </div>
  );
}