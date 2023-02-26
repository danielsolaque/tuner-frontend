import React from "react";
import { useEffect, useState } from "react";
import { getAllTuners } from "./fetch";
import { Link } from "react-router-dom";

import "./TunersList.css";

export default function TunersList() {
  const [filter, setFilter] = useState("");
  const [tuners, setTuners] = useState([]);
  const [filteredTuners, setFilteredTuners] = useState([]);

  useEffect(() => {
    getAllTuners().then((tunersList) => {
      setFilteredTuners(tunersList);
      setTuners(tunersList);
    });
  }, []);

  useEffect(() => {

    const newTuners = tuners.filter((tuner) =>
      tuner.name.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredTuners(newTuners);

  }, [filter, tuners]);

  const handleChangeFilterInput = (e) => setFilter(e.target.value);

  return (
    <div className="tuners-list-container">
      <header>
        <h1>Enjoy our play list of songs!</h1>
      </header>

      <div className="search-bar">
        <h2 className="search-bar-title">Search songs here:</h2>
        <input
          placeholder="Search tuner..."
          className="search-bar-input"
          onChange={handleChangeFilterInput}
        />
      </div>

      <section className="tuners-list">
        {filteredTuners.map((tuner) => (
          <div className="tuner-card" key={tuner.id}>
            <Link to={`/tuners/${tuner.id}`}>
              <span> {tuner.name} </span>
            </Link>
            <span> {tuner.artist} </span>
            <span>{tuner.album}</span>
            <span>{tuner.time}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
