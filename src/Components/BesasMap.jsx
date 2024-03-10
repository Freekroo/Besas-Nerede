import "./BesasMapDesign.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import besasPoint from "./besas-points.json";
import "leaflet/dist/leaflet.css";



function BesasMap() {
  return (
    <MapContainer
      center={[40.19314004794457, 29.0770136]}  //  Projeyi ilk gönderdiğimde de harita bu koordinatlara 13 zoomla yakındı.
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Burada besas-points.json dosyasındaki coordinatları harita üzerinde gösterebilmek için json dosyasındaki id ve coordinatları burada çağırdım. Ancak dosyadaki koordinatların x ve y düzlemi ters yazıldığı için Suudi Arabistan ' da boş bir bölgede Markerlar çıkıyordu. Projeyi ilk gönderdiğimde de bu verileri çekemediğimi ve projenin yarım olduğunu söylemiştim. Sanırım haritada yakın bölgeyi gösterdiği için ben fark etmedim. Bütün koordinatları tek tek ters çevirdim ve sonrasında doğru coordinatlara ulaştım.*/}
      {besasPoint.map((bsas) => (
        <Marker key={bsas.id} position={bsas.geojson.coordinates}>

          <Popup  position={bsas.geojson.coordinates}>
            <div>
              <p className="font-size1">{bsas.ad}</p>
              <p className="font-size2">{bsas.alt_katego}</p>
            </div>
          </Popup>

        </Marker>
      ))}
    </MapContainer>
  );
}

export default BesasMap;
