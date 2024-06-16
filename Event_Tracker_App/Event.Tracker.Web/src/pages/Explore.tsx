import './Explore.css'
import { BoundingBox, Coordinates, EventModel } from "../types/types";
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { EventDetails } from './EventDetails';
import { calculateLongitudeLatitudeBoundingBox, isCoordinateWithinBoundingBox } from '@/util/mapcalculation';
import { svgIconBasedOnKeyword } from '@/util/svgIconBasedOnKeyword';
import { CustomIcon } from '@/components/Leaflet/CustomIcon';
import { useEffect, useState } from 'react';

type Props = {
  className: string,
  initialCoordinates: Coordinates,
  data: Array<EventModel>,
  setPage: (page: string) => void,
  page: string,
  filter: string,
  setMapCenter: (mapCenter: Coordinates) => void
  mapCenter: Coordinates,
  setBoundingBox: (boundingbox: BoundingBox) => void,
  boundingbox: BoundingBox,
  setMaxAllowedMarkerRenders: (quantity: number) => void,
  maxAllowedMarkerRenders: number
}

export const Explore = ({className, initialCoordinates, data, setPage, page, filter, mapCenter, setMapCenter, setMaxAllowedMarkerRenders, maxAllowedMarkerRenders, setBoundingBox, boundingbox}: Props) => {
    const [showMarkerDetails, setShowMarkerDetails] = useState<string>('');
    const [showEventDetails, setShowEventDetails] = useState<string>('');
    const [currentEventInfo, setCurrentEventInfo] = useState<EventModel>();
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
          updateRendersAndBoundingBox();
        });
        return null;
      };

      const UpdateMarkerRenders = () => {
        const map = useMapEvent('zoom', () => {
          setZoomLevel(getCurrentZoomLevel(map));
          updateRendersAndBoundingBox();
        });
        return null;
      };

      const updateRendersAndBoundingBox = () => {
        // Allowed Marker Renders
        zoomLevel == 10 && setMaxAllowedMarkerRenders(20) // ~ 30km
        zoomLevel == 11 && setMaxAllowedMarkerRenders(30) // ~ 12km
        zoomLevel == 12 && setMaxAllowedMarkerRenders(40) // ~ 6km
        zoomLevel == 13 && setMaxAllowedMarkerRenders(250) // ~ 4km
        zoomLevel == 14 && setMaxAllowedMarkerRenders(250) // ~ 2km
        zoomLevel == 15 && setMaxAllowedMarkerRenders(250) // ~ 1km
        zoomLevel == 16 && setMaxAllowedMarkerRenders(250) // ~ 200 meters
        zoomLevel == 17 && setMaxAllowedMarkerRenders(250) // ~ 100 meters

        // Fetch Radius
        zoomLevel == 10 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 30));  // ~ 30km
        zoomLevel == 11 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 20));  // ~ 12km
        zoomLevel == 12 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 10));  // ~ 6km
        zoomLevel == 13 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 3.5)); // ~ 4km
        zoomLevel == 14 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 2.5)); // ~ 2km 
        zoomLevel == 15 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 1.5)); // ~ 1km
        zoomLevel == 16 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, .5));  // ~ 200 meters
        zoomLevel == 17 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, .2));  // ~ 100 meters
      }


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
                center={[initialCoordinates.lat, initialCoordinates.lng]} 
                zoom={14}
                scrollWheelZoom={true}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://api.mapbox.com/styles/v1/william00771/cltvk24s1017c01pkhsjd4774/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2lsbGlhbTAwNzcxIiwiYSI6ImNsdHZqeWd2cTFsYzIycW9iNGlhdHFodHAifQ.eX-yYLKA0P4QCL58IgovpA"
                />
                {boundingbox && data.slice(0, maxAllowedMarkerRenders).map((event) => {
                        if(
                          isCoordinateWithinBoundingBox({latitude: event.location.lat, longitude: event.location.lng}, boundingbox) 
                          && zoomLevel >= 10
                          && (event.name.toLowerCase().includes(filter) 
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
                            zIndexOffset={showMarkerDetails === event.location.lat.toString() ? 500 : 1}
                            position={[event.location.lat, event.location.lng]} 
                            icon={
                              CustomIcon(
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