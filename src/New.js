import React from "react";
import { createNewTuner } from "./fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewForm.css";

export default function New() {
  const navigate = useNavigate();
  const [newTuner, setNewTuner] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  console.log(newTuner)

  function handleInputChange(event) {
    setNewTuner({
      ...newTuner,
      [event.target.id]: event.target.value,
    });
  }

  function handleCheckboxChange(event) {
    setNewTuner({
      ...newTuner,
      [event.target.id]: event.target.checked
    })
  }

  function handleSubmit(event) {
    event.preventDefault();


    createNewTuner(newTuner).then((newTunerEnd) => {
      navigate("/tuners"); 
    });
  }

  return (
    <div>
      <header className="upsert-form-header">
        <h1>Register a new song here:</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={newTuner.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={newTuner.artist}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            value={newTuner.album}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            value={newTuner.time}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="is_favorite">Is it favorite?</label>
          <input id="is_favorite" type="checkbox" checked={newTuner.is_favorite} onChange={handleCheckboxChange} />
          {/* <select
            id="is_favorite"
            value={newTuner.is_favorite}
            onChange={handleInputChange}
          >
            <option value={false}>Nope</option>
            <option value={true}>Yes</option>
          </select> */}
        </div>

        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}

