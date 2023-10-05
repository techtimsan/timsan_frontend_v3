import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const ChapterMap = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  }

  const center = {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
  }
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers or other components here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default ChapterMap
