import './Explore.css'
import { useQuery } from "react-query"
import { fetchEvents } from "../util/http"
import { EventModel } from "../types/types";
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

type Props = {
  className: string,
  data: Array<EventModel>
}

function Explore({ className, data }: Props) {

    return(
      <>
        <section className='explore__container'>
            <MapContainer 
            className='leaflet_map' 
            center={[59.3369170, 18.0119609]} 
            zoom={13}
            scrollWheelZoom={true}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    //url="https://api.mapbox.com/styles/v1/william00771/cltvk24s1017c01pkhsjd4774/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2lsbGlhbTAwNzcxIiwiYSI6ImNsdHZqeWd2cTFsYzIycW9iNGlhdHFodHAifQ.eX-yYLKA0P4QCL58IgovpA"
                />

            </MapContainer>
        </section>
    </>
    )
}

export default Explore
