import React, { useEffect } from "react";
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

/* class Map extends React.Component {

   componentDidMount() {
    const mbAttr = `${process.env.REACT_APP_NAME} v-${process.env.REACT_APP_VERSION}`,
       mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
       const grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', attribution: mbAttr}),
           darkscale   = L.tileLayer(mbUrl, {id: 'mapbox/dark-v9', attribution: mbAttr}),
           streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',   attribution: mbAttr});

       this.map = L.map('map', {
           center: [-27.389623, -55.920693],
           zoom: 14,
           layers: [darkscale] } );

       var baseLayers = {
           "Grayscale": grayscale,
           "Darkscale": darkscale,
           "Streets": streets};

       L.control.layers(baseLayers).addTo(this.map);
       BrandControl({position: 'bottomright'}).addTo(this.map);
       SpinnerControl({position: 'topleft'}).addTo(this.map);
       this.map.on('zoomstart movestart', () => {
           this.showLoadingSpinner();});
       this.map.on('zoomend moveend', () => {
           this.hideLoadingSpinner();});
       // Show Map
       this.props.onSetMapVisible(true);
   //muesta marcadoress

       var greenIcon = L.icon({
           iconUrl: 'https://cdn-icons.flaticon.com/png/512/3277/premium/3277175.png?token=exp=1653055096~hmac=3e87a6859424b1995d04f555eea11113',
           iconSize:[18, 18]})

       L.marker([-27.382803, -55.904042],{icon: greenIcon}).bindPopup("<p>Popup</p>").addTo(this.map)


   }

   showLoadingSpinner = () => {
       document.getElementById("SpinnerControl").style.visibility = 'visible';}
   hideLoadingSpinner = () => {
       document.getElementById("SpinnerControl").style.visibility = 'hidden';}
   render() {
       return (
           <div id="map" className="map" style={{visibility: this.props.isMapVisible ? 'visible' : 'hidden' }}>

           </div> ) }
}

const mapStateToProps = state => {
   return { isMapVisible: state.MapReducer.isMapVisible,};};

const mapDispatchToProps = dispatch => {
   return {onSetMapVisible: (isMapVisible) => dispatch(actions.setMapVisible(isMapVisible)),}};

export default connect(mapStateToProps,mapDispatchToProps)(Map);

//hacer pruebas de markers
//prueba de container y redux de marker a ver si funciona
// */
