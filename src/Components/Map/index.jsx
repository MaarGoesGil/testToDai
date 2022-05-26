import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCoordinates } from "../../store/actions";
import "./Map.css";

export default function Map() {
  const dispatch = useDispatch();
  const { latitud, longitud } = useSelector((state) => state);
  const [segundos, setSegundos] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    dispatch(showCoordinates());
  }, []); //componentdiMount

  useEffect(() => {
    console.log("Se seteo la variable segundos");
  }, [segundos]);

  useEffect(() => {
    console.log("Se seteo el timer");
    setearTimer();
  }, [timer]);

  function setearTimer() {
    setTimer(timer + 10);
  }

  return (
    <div>
      <h1>Coordenadas</h1>
      <p>{"Latitud: " + latitud + " " + "Longitud: " + longitud}</p>
      <button
        onClick={() => {
          setSegundos(segundos + 1);
        }}
      >
        Sumar segundos
      </button>
    </div>
  );
}
