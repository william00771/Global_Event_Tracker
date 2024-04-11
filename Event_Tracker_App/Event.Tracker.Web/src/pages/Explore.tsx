import './Explore.css'
import { BoundingBox, EventModel } from "../types/types";
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { renderToString } from 'react-dom/server';
import { Point, divIcon } from 'leaflet';
import { useEffect, useState } from 'react';
import { MOCKDATA } from '@/Data/MockData';
import { formatDateAndDurationToHours, formatDateToStartDateEndDate } from '@/util/dateTools';
import { EventDetails } from './EventDetails';
import { calculateLongitudeLatitudeBoundingBox, isCoordinateWithinBoundingBox } from '@/util/mapcalculation';
import placeholder from '../resources/Placeholders/event.jpg'
import { svgIconBasedOnKeyword } from '@/util/svgIconBasedOnKeyword';




type Props = {
  className: string,
  data: Array<EventModel>,
  setPage: (page: string) => void,
  page: string,
  filter: string
}

function Explore({className, data, setPage, page, filter }: Props) {
    const [showMarkerDetails, setShowMarkerDetails] = useState<string>('');
    const [showEventDetails, setShowEventDetails] = useState<string>('');
    const [currentEventInfo, setCurrentEventInfo] = useState<EventModel>();
    const [mapCenter, setMapCenter] = useState({
      lat: 59.3369170,
      long: 18.0119609
    });
    const [boundingbox, setBoundingBox] = useState<BoundingBox>(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 9));
    const [zoomLevel, setZoomLevel] = useState<number>(13);
    const [maxAllowedMarkerRenders, setMaxAllowedMarkerRenders] = useState<number>(300);

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
          setMapCenter({lat: newCenter.lat, long: newCenter.lng});

          zoomLevel == 7 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 150));
          zoomLevel == 8 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 150));
          zoomLevel == 9 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 150));
          zoomLevel == 10 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 75));
          zoomLevel == 11 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 50));
          zoomLevel == 12 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 15));
          zoomLevel == 13 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 9));
          zoomLevel == 14 && setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.long, 3.5));
          
        });
        return null;
      };

      const UpdateMarkerRenders = () => {
        const map = useMapEvent('zoom', () => {
          setZoomLevel(getCurrentZoomLevel(map));

          zoomLevel == 7 && setMaxAllowedMarkerRenders(10)
          zoomLevel == 8 && setMaxAllowedMarkerRenders(20)
          zoomLevel == 9 && setMaxAllowedMarkerRenders(30)
          zoomLevel == 10 && setMaxAllowedMarkerRenders(100)
          zoomLevel == 11 && setMaxAllowedMarkerRenders(200)
          zoomLevel == 13 && setMaxAllowedMarkerRenders(500)
        });
        return null;
      };

    const getCurrentZoomLevel = (map: any) => {
        if (map) {
            const zoomLevel = map.getZoom();
            return zoomLevel;
        }
    };

    type Props = {
      id: number
      showMarkerDetails: string,
      eventData: EventModel,
      svgIcon: string,
      width: number
    }

    const ExampleIcon = ({id, showMarkerDetails, eventData, svgIcon, width} : Props) => {
      return (
        <>
          <header style={{width: `${width}px`, height: `${width}px`}} className='marker-container'>
              <div className="marker-container__icon" style={{backgroundImage: `linear-gradient(#eb01a525, #d1363136), url(${svgIcon})`}}></div>
          </header>
          <section className={"marker-container__section " + (showMarkerDetails === id.toString() ? "active" : "inactive")}>
              <header className='marker__header'>
                  <section className='marker__header-top'>
                      <a className='marker__header-item' href="#">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                              <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ffffff"/> </g>
                          </svg>
                      </a>
                  </section>
                  <section className='marker__header-bottom'>
                      <h1 className='marker__header-title'>{eventData.name}</h1>
                      <div className='marker__header-item'>
                          <svg width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                              <g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> </g>
                          </svg>
                          <p className='marker__header-paragraph'>{formatDateToStartDateEndDate(eventData.date, eventData.dateTo)}</p>
                      </div> 
                      <div className='marker__header-item'>
                          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                              <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 6V12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.24 16.24L12 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                          </svg>
                          <p className='marker__header-paragraph'>{formatDateAndDurationToHours(eventData.time, eventData.duration)}</p>
                      </div>
                  </section>
                  <img className='marker__header-bgimage' src={ eventData.image || placeholder } alt="" />
              </header>
              <article className='marker__main'>
                  <p className='marker__main-paragraph'>{eventData.description.split(" ").slice(0, 18).join(" ")}..
                  </p>
                  <button className='moreinfobtn btn-primary--gradient marker__main-btn' value={id}>More Info</button>
              </article>
          </section>
          </>
      );
    }

    const customIcon = ({width, id, showMarkerDetails, eventData, svgIcon} : Props) => {
      return divIcon({
        html: renderToString(
          <ExampleIcon 
            width={width}
            id={id} 
            showMarkerDetails={showMarkerDetails} 
            eventData={eventData} 
            svgIcon={svgIcon}
          />
        ),
        className: "",
        iconSize: new Point(4, 4),
      });
    }

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
                    //url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://api.mapbox.com/styles/v1/william00771/cltvk24s1017c01pkhsjd4774/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2lsbGlhbTAwNzcxIiwiYSI6ImNsdHZqeWd2cTFsYzIycW9iNGlhdHFodHAifQ.eX-yYLKA0P4QCL58IgovpA"
                />
                {boundingbox && data.slice(0, maxAllowedMarkerRenders).map((event) => {
                        if(
                          isCoordinateWithinBoundingBox({latitude: event.location.lat, longitude: event.location.lng}, boundingbox) 
                          && zoomLevel >= 7
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
                            position={[event.location.lat, event.location.lng]} 
                            icon={
                              customIcon(
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
