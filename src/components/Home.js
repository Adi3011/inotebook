import React from "react";
import Notes from "./Notes";

const Home = () => {
  
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
            />
            <div id="titleHelp" className="form-text">
              Title should contain minimum of 3 characters
            </div>
          </div>
          <div className="mb-3">
            <label for="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="descriptionHelp"
            />
            <div id="descriptionHelp" className="form-text">
              Description should contain minimum of 8 characters
            </div>
          </div>
          <div className="mb-3">
            <label for="tag" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              aria-describedby="tagHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Notes />
    </div>
  );
};

export default Home;
