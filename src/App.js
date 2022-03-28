import Search from "./components/search/Search";
import { Map } from "react-map-gl";
import "./App.css"
function App() {
  return (
    <div className="container">
      <Search></Search>
      <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{height: '100vh'}}
      mapStyle={"mapbox://styles/mapbox/streets-v9"}
      mapboxAccessToken="pk.eyJ1IjoibmF2aWRuYWJpbCIsImEiOiJjbDE2MzJnMWwwNTlnM2Jtd2Zuc2djdTcyIn0.UIYnpGMIMwPxtpllPNQgxg"
      />
    </div>
  );
}

export default App;
