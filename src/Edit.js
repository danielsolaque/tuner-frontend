import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneTuner, updateTuner } from "./fetch";

import "./NewForm.css";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tunerToEdit, setTunerToEdit] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    getOneTuner(id).then((thisOnetuner) => {
      const [tuner] = thisOnetuner;
      setTunerToEdit(tuner);
    });
  }, [id]);

  function handleTextChange(event) {
    setTunerToEdit({
      ...tunerToEdit,
      [event.target.id]: event.target.value, //quiere decir que si activamos la funcion handle text change (se activa cuando se clickea el check box) esta cambiara al valor contrario del actual
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateTuner(id, tunerToEdit).then((tunerUpdated) => {
      navigate(`/tuners`);
    });
  }
  return (
    <div>
      <header className="upsert-form-header">
        <h1>Edit tuner</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={tunerToEdit.name}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={tunerToEdit.artist}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            value={tunerToEdit.album}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            value={tunerToEdit.time}
            onChange={handleTextChange}
          />
        </div>

        {/* <div className="form-field">
          <label htmlFor="is_favorite">Is it favorite?</label>
          <select
            id="is_favorite"
            value={newTuner.is_favorite}
            onChange={handleTextChange}
          >
            <option value="False">Nope</option>
            <option value="True">Yes</option>
          </select>
        </div> */}

        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
