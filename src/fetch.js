const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getAllTuners() {
  const request = fetch(`${BASE_URL}/`)
    .then((response) => response.json())
    .then((AllTuners) => AllTuners);
  return request;
}

export function getOneTuner(id) {
  const request = fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((oneTuner) => oneTuner)
    .catch((err) => console.log("Error getting one tuner"));
  return request;
}

export function createNewTuner(tuner) {
  const request = fetch(`${BASE_URL}/`, {
    method: "POST",
    body: JSON.stringify(tuner),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((newTunerEnd) => newTunerEnd)
    .catch((err) => console.log("Error getting New tuner"));
  return request;
}

export function updateTuner(id, tuner) {
  const request = fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(tuner),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((tunerUpdated) => tunerUpdated)
    .catch((err) => console.log("Error updating"));

  return request;
}

export function deleteTuner(id) {
  const request = fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((tunerDeleted) => tunerDeleted)
    .catch((error) => console.log("Error deleting"));
  return request;
}
