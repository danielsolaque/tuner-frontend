import React from "react";
import { useEffect, useState } from "react";
import { getOneTuner, deleteTuner } from "./fetch";
import { useParams, Link, useNavigate } from "react-router-dom";

// import "./ShowOne.css";

export default function ShowOne() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const navigate = useNavigate()
  const [oneTunerState, setOneTunerState] = useState({});

  useEffect(() => {
    getOneTuner(id).then((thisOneTuner) => {
      // === thisOneTuner[0]
      const [tuner] = thisOneTuner;

      setOneTunerState(tuner);
    });
  }, [id]);

  function deleteNow(id) {
    deleteTuner(id).then((tunerDeleted) => {
      navigate(`/tuners`); 
    });
  }

  return (
    <div className="Tuner-detail">
      <header>
        <h2>Song details:</h2>
      </header>

      <div className="Tuner-detail-card">
        <p>
          <b>Name:</b> {oneTunerState.name}.
        </p>
        <p>
          <b>Artist:</b> {oneTunerState.artist}.
        </p>
        <p>
          <b>Album:</b> {oneTunerState.album}.
        </p>
        <p>
          <b>It is favorite?:</b> {oneTunerState.is_favorite ? "Yes" : "No"}.
        </p>
        <p>
          <b>Time:</b> {oneTunerState.time}.
        </p>
        <br />

        <div className="Tuner-detail-buttons">
          <Link
            className="Tuner-detail-button edit-bg"
            to={`/Tuners/${id}/edit`}
          >
            <button>Edit</button>
          </Link>
          <br />
          <button
            className="Tuner-detail-button delete-bg"
            onClick={() => deleteNow(id)}
          >
            Delete
          </button>

          <button
            className="Tuner-detail-button delete-bg"
            onClick={() => navigate(`/tuners`)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
