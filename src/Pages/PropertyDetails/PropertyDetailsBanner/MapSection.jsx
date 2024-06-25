import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapSection = () => {
  return (
    <div className="relative h-[400px] w-full">
      <MapContainer
        center={[23.8223, 90.3654]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[23.8223, 90.3654]}>
          <Popup>Mirpur</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
