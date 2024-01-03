import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const [notes, setNotes] = useState([]);

   // Get all note
   const getAllNotes = async() => {
    //Api call to add note
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZmM1NTA4MDk2Y2I4ZTExNGU5YjU0In0sImlhdCI6MTcwMzkyMjQ0Mn0.vEXxV6eGNVc2Ei9f8DZWky4ND0ABkqpf_xySyVlGfy4"
      },
    });
    const json = await response.json();
    setNotes(json);
  };


  // Add a note
  const addNote = async(title, description, tag) => {
    //Api call to add note
    let response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZmM1NTA4MDk2Y2I4ZTExNGU5YjU0In0sImlhdCI6MTcwMzkyMjQ0Mn0.vEXxV6eGNVc2Ei9f8DZWky4ND0ABkqpf_xySyVlGfy4"
      },
      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    
    response = await response.json();
    setNotes(notes.concat(response));
  };


  // Delete a note
  const deleteNote = async (id) => {
    let response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZmM1NTA4MDk2Y2I4ZTExNGU5YjU0In0sImlhdCI6MTcwMzkyMjQ0Mn0.vEXxV6eGNVc2Ei9f8DZWky4ND0ABkqpf_xySyVlGfy4"
      },
    });
    response = response.json();
    console.log(response);
    const newNotes = notes.filter((note) =>{ return note._id!==id});
    setNotes(newNotes);

  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //Api Calls first to fetch notes
  
    let response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZmM1NTA4MDk2Y2I4ZTExNGU5YjU0In0sImlhdCI6MTcwMzkyMjQ0Mn0.vEXxV6eGNVc2Ei9f8DZWky4ND0ABkqpf_xySyVlGfy4"
      },
      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    response = response.json();
    console.log(response);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for(let index =0; index < newNotes.length; index++){
      let element = newNotes[index];
      if(element._id === id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      }
      break;
    }
    setNotes(newNotes);
  };




  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
