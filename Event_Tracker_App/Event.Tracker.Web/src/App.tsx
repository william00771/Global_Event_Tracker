import './App.css'
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "react-query";
import Explore from "./pages/Explore"
import { useEffect, useState } from "react";
import { NavbarTop } from "./nav/NavbarTop";
import { NavBarBottom } from "./nav/NavBarBottom";
import { TimePicker } from "./pages/TimePicker";
import { Account } from "./pages/Account";
import { ListEvents } from "./pages/ListEvents";
import { SavedEvents } from "./pages/SavedEvents";
import { CreateEvent } from "./pages/CreateEvent";
import { fetchEventsFromCoordinates, postEvent } from './util/http';
import { BoundingBox, Coordinates, EventModel } from './types/types';
import { CircularProgress } from '@mui/material';
import { calculateLongitudeLatitudeBoundingBox } from './util/mapcalculation';



function App() {
  const [page, setPage] = useState('Explore');
  const [startDate, setStartDate] = useState<Date>(new Date(2024, 3, 1));
  const [endDate, setEndDate] = useState<Date>(new Date(2024, 4, 31)); 
  const [filter, setFilter] = useState(" ");

  const [mapCenter, setMapCenter] = useState<Coordinates>({
    lat: 59.3369170,
    lng: 18.0119609
  });
  const [maxAllowedMarkerRenders, setMaxAllowedMarkerRenders] = useState<number>(100);
  const [boundingbox, setBoundingBox] = useState<BoundingBox>(calculateLongitudeLatitudeBoundingBox(59.3369170, 18.0119609, 75));
  const [latFirstDecimal, setLatFirstDecimal] = useState<number>(Math.floor(mapCenter.lat * 10) % 10);
  const [lngFirstDecimal, setLngFirstDecimal] = useState<number>(Math.floor(mapCenter.lng * 10) % 10);

  useEffect(() => {
    const currentLatSecondDecimal = Math.floor(mapCenter.lat * 100) % 10;
    const currentLngSecondDecimal = Math.floor(mapCenter.lng * 100) % 10;

    if (latFirstDecimal !== currentLatSecondDecimal || lngFirstDecimal !== currentLngSecondDecimal) {
        setLatFirstDecimal(currentLatSecondDecimal);
        setLngFirstDecimal(currentLngSecondDecimal);
        setBoundingBox(calculateLongitudeLatitudeBoundingBox(mapCenter.lat, mapCenter.lng, 56))
        refetch();
    }
    
  }, [mapCenter])

  const { data, isLoading, isError, refetch } = useQuery<Array<EventModel>>({
      queryKey: ['fetchevents'],
      queryFn: () => fetchEventsFromCoordinates(boundingbox, maxAllowedMarkerRenders)
    });

  const postMutation = useMutation(
      (eventRequestFormData: FormData) => postEvent(eventRequestFormData), {
      onSuccess: () => {
          refetch();
      }
  });

  return(
      <>
        {isLoading && <div className='loading-container'><CircularProgress color="secondary" /></div>}
        {isError && <div className='error-container'><h1>Error fetching data...</h1></div> }
        
        <NavbarTop 
          setPage={(page) => setPage(page)}
          page={page}
          className={"navtop-container " + (page == "EventDetails" && "inactive")}
          setFilter={(filter: string) => setFilter(filter)}
        />
          {data &&
            <main className="page-container">     
              <TimePicker 
                className={"timepicker-container " + (page == "TimePicker" && "active")}
                setPage={(page) => setPage(page)}
                getFilteredEvents={(startDate?: Date, endDate?: Date) => {
                  startDate != null && setStartDate(startDate);
                  endDate != null && setEndDate(endDate);
                }}
              />
              <Account 
                className={"account-container " + (page == "Account" && "active")}
                setPage={(page) => setPage(page)}
              />
              { page != 'CreateEvent' && 
                <Explore 
                  className={"explore__container " }
                  data={data}
                  setPage={(page) => setPage(page)}
                  page={page}
                  filter={filter}
                  startDate={startDate}
                  endDate={endDate}
                  setMapCenter={(mapCenter: Coordinates) => setMapCenter(mapCenter)}
                  mapCenter={mapCenter}
                  setMaxAllowedMarkerRenders={(maxMarkers: number) => setMaxAllowedMarkerRenders(maxMarkers)}
                  maxAllowedMarkerRenders={maxAllowedMarkerRenders}
                />
              }
              <ListEvents 
                className={"listevents-container " + (page == "ListEvents" && "active")}
                data={data}
              />
              <SavedEvents 
                className={"savedevents-container " + (page == "SavedEvents" && "active")}
                data={data}
              />
              <CreateEvent 
                className={"createevent-container " + (page == "CreateEvent" && "active")}
                setPage={(page) => setPage(page)}
                postEvent={(eventRequestFormData: FormData) => postMutation.mutate(eventRequestFormData)}
              />
            </main>
          }
        <NavBarBottom 
          setPage={(page) => setPage(page)}
          page={page}
        />
      </>
  )

}

export default App