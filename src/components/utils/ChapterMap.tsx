"use client"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"
import { CircularProgress } from "@nextui-org/progress"

const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

const ChapterMap = () => {
  const libraries = useMemo(() => ["places"], [])

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  }

  const mapCenter = useMemo(
    () => ({
      lat: 37.7749, // Replace with your desired latitude
      lng: -122.4194, // Replace with your desired longitude
    }),
    []
  )

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiKey,
    libraries: libraries as any,
  })

  if (!isLoaded) {
    return (
      <div className="w-screen flex items-center justify-center h-[400px]">
        <CircularProgress label="Loading Google Map..." color="secondary" />
      </div>
    )
  }

  return (
    <GoogleMap
      options={mapOptions}
      mapContainerStyle={mapContainerStyle}
      center={mapCenter}
      zoom={14}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
    >
      {/* Add markers or other components here */}
      <Marker position={mapCenter} />
    </GoogleMap>
  )
}

export default ChapterMap
