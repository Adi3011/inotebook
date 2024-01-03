import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(NoteContext);
    // eslint-disable-next-line
    const { addNote } = context;
    const [note, setNote] = useState({title: "",description:"",tag:""})

    //handleClick will add the note with the updated states of the element of the note
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title: "",description:"",tag:""});
    };

    //here onChange will set those elements of note that are changed and will update state of those elements of the note
    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value});
    };

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="titleHelp" onChange={onChange} minLength={3} required
            />
            <div id="titleHelp" className="form-text">
              Title should contain minimum of 3 characters
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="descriptionHelp"
              name="description"
              value={note.description}
              onChange={onChange} minLength={8} required
            />
            <div id="descriptionHelp" className="form-text">
              Description should contain minimum of 8 characters
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              aria-describedby="tagHelp" onChange={onChange}
            />
          </div>
          <button disabled ={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
