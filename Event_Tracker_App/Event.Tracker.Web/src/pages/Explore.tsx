import './Explore.css'
import { BoundingBox, Coordinates, EventModel } from "../types/types";
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { renderToString } from 'react-dom/server';
import { Point, divIcon } from 'leaflet';
import {useEffect, useState } from 'react';
import { MOCKDATA } from '@/Data/MockData';
import { formatDateAndDurationToHours, formatDateToStartDateEndDate } from '@/util/dateTools';
import { EventDetails } from './EventDetails';
import { calculateLongitudeLatitudeBoundingBox, isCoordinateWithinBoundingBox } from '@/util/mapcalculation';
import placeholder from '../resources/Placeholders/event.jpg'
import { svgIconBasedOnKeyword } from '@/util/svgIconBasedOnKeyword';
import { CustomMarker } from '../components/Map/CustomMarker';

type Props = {
  className: string,
  data: Array<EventModel>,
  setPage: (page: string) => void,
  page: string,
  filter: string,
  setMapCenter: (mapCenter: Coordinates) => void
  mapCenter: Coordinates,
  setMaxAllowedMarkerRenders: (quantity: number) => void,
  maxAllowedMarkerRenders: number,
  startDate: Date,
  endDate: Date
}

function Explore({className, data, setPage, page, filter, startDate, endDate, mapCenter, setMapCenter, maxAllowedMarkerRenders, setMaxAllowedMarkerRenders}: Props) {
    const [showMarkerDetails, setShowMarkerDetails] = useState<string>('');
    const [showEventDetails, setShowEventDetails] = useState<string>('');
    const [currentEventInfo, setCurrentEventInfo] = useState<EventModel>();
    
    const [boundingbox, setBoundingBox] = useState<BoundingBox>(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 9));
    const [zoomLevel, setZoomLevel] = useState<number>(13);

    useEffect(() => {
      const handleMoreInfoClick = (event: any) => {
          event.preventDefault()
          if (event.target.classList.contains('moreinfobtn')) {
              setPage('EventDetails');
              setShowEventDetails(event.target.value);
          }
      };

      document.addEventListener('click', handleMoreInfoClick);

      return () => {
          document.removeEventListener('click', handleMoreInfoClick);
      };
    }, []);

    useEffect(() => {
        page == 'ListEvents' && setShowEventDetails('');
        page == 'SavedEvents' && setShowEventDetails('');
        page == 'CreateEvent' && setShowEventDetails('');
    }, [page])

    const UpdateMapCenter = () => {
        const map = useMapEvent('move', () => {
          const newCenter = map.getCenter();
          setMapCenter({lat: newCenter.lat, lng: newCenter.lng});

          zoomLevel == 7 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 8 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 9 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 10 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 11 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 12 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 13 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 5));
          zoomLevel == 14 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 3.5));
        });
        return null;
      };

      const UpdateMarkerRenders = () => {
        const map = useMapEvent('zoom', () => {
          setZoomLevel(getCurrentZoomLevel(map));

          zoomLevel == 8 && setMaxAllowedMarkerRenders(0)
          zoomLevel == 9 && setMaxAllowedMarkerRenders(0)
          zoomLevel == 10 && setMaxAllowedMarkerRenders(15)
          zoomLevel == 11 && setMaxAllowedMarkerRenders(15)
          zoomLevel == 12 && setMaxAllowedMarkerRenders(100)
          zoomLevel == 13 && setMaxAllowedMarkerRenders(100)
          console.log(startDate);
          console.log(endDate);
        });
        return null;
      };

    const getCurrentZoomLevel = (map: any) => {
        if (map) {
            const zoomLevel = map.getZoom();
            return zoomLevel;
        }
    };

    return(
      <>
        <section className={className}>
            <MapContainer 
            className='leaflet_map' 
            center={[59.3369170, 18.0119609]} 
            zoom={13}
            scrollWheelZoom={true}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    //url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://api.mapbox.com/styles/v1/william00771/cltvk24s1017c01pkhsjd4774/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2lsbGlhbTAwNzcxIiwiYSI6ImNsdHZqeWd2cTFsYzIycW9iNGlhdHFodHAifQ.eX-yYLKA0P4QCL58IgovpA"
                />
                {boundingbox && data.slice(0, maxAllowedMarkerRenders).map((event) => {
                        if(
                          isCoordinateWithinBoundingBox({latitude: event.location.lat, longitude: event.location.lng}, boundingbox) 
                          && zoomLevel >= 7
                          && (event.name.toLowerCase().includes(filter) 
                          || event.date > startDate
                          || event.date < endDate
                          || event.description.toLowerCase().includes(filter.toLowerCase()))
                          || event.keywords && event.keywords.some(keyword => keyword.toLowerCase() === filter)
                          || filter == ""
                        ){
                          const eventIcon = svgIconBasedOnKeyword(event)
                            return <Marker 
                            eventHandlers={{
                                  click: () => {
                                      if(showMarkerDetails === event.location.lat.toString())
                                      {
                                          setShowMarkerDetails('');
                                      }
                                      else{
                                        setShowMarkerDetails(event.location.lat.toString());
                                        setCurrentEventInfo(event);
                                      }
                                      
                                  },
                              }} 
                            position={[event.location.lat, event.location.lng]} 
                            icon={
                              CustomMarker(
                                {
                                  width: 40,
                                  id: event.location.lat, 
                                  eventData: event, 
                                  showMarkerDetails: showMarkerDetails,
                                  svgIcon: eventIcon
                                }
                              )
                            }
                          />
                        }
                        else{
                            return '';
                        }
                    })}
              <UpdateMapCenter />
              <UpdateMarkerRenders />
            </MapContainer>
        </section>
        <EventDetails 
          className={'event-container'} 
          visible={showEventDetails ? true : false} 
          setShowEventDetails={(value: string) => {setShowEventDetails(value); setPage('Explore');}}
          eventData={currentEventInfo}
        />

    </>
    )
}

export default Explore
