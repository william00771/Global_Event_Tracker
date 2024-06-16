import './App.css'
import { useMutation, useQuery } from "react-query";
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
import { Explore } from './pages/Explore';

const initialCoordinates: Coordinates = {
  lat: 59.324894,
  lng: 18.0656708
}

function App() {
  const [page, setPage] = useState('Explore');
  
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [filter, setFilter] = useState(" ");

  const [mapCenter, setMapCenter] = useState<Coordinates>(initialCoordinates);
  
  const [latUpdateCycle, setLatUpdateCycle] = useState<number>(Math.floor(mapCenter.lat * 10) % 10);
  const [lngUpdateCycle, setLngUpdateCycle] = useState<number>(Math.floor(mapCenter.lng * 10) % 10);

  const [maxAllowedMarkerRenders, setMaxAllowedMarkerRenders] = useState<number>(50);
  const [boundingbox, setBoundingBox] = useState<BoundingBox>(calculateLongitudeLatitudeBoundingBox(initialCoordinates.lat, initialCoordinates.lng, 3.5));

  useEffect(() => {
    const currentLatSecondDecimal = Math.floor(mapCenter.lat * 100) % 10;
    const currentLngSecondDecimal = Math.floor(mapCenter.lng * 100) % 10;

    if (latUpdateCycle !== currentLatSecondDecimal || lngUpdateCycle !== currentLngSecondDecimal) {
        setLatUpdateCycle(currentLatSecondDecimal);
        setLngUpdateCycle(currentLngSecondDecimal);
        refetch();
    }
    
  }, [mapCenter])

  const getFilteredEventsHandler = (startDate?: Date, endDate?: Date) => {
    if(startDate != null){
      setStartDate(startDate);
    }
    if(endDate != null){
      setEndDate(endDate);
    }
  }

  const { data, isLoading, isError, refetch } = useQuery<Array<EventModel>>({
      queryKey: ['fetchevents', startDate, endDate],
      queryFn: () => fetchEventsFromCoordinates(boundingbox, maxAllowedMarkerRenders, startDate, endDate)
      
    });

  const postMutation = useMutation(
      (eventRequestFormData: FormData) => postEvent(eventRequestFormData), {
      onSuccess: () => {
          refetch();
      },
      onError: (error: any) => {
        alert('Failed to add new event: ' + error.message);
      },
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
              getFilteredEvents={(startDate?: Date, endDate?: Date) => getFilteredEventsHandler(startDate, endDate)}
            />
            <Account 
              className={"account-container " + (page == "Account" && "active")}
              setPage={(page) => setPage(page)}
            />
            { page != 'CreateEvent' && 
              <Explore 
                className={"explore__container"}
                initialCoordinates={initialCoordinates}
                data={data}
                setPage={(page: string) => setPage(page)}
                page={page}
                filter={filter}
                setMapCenter={(mapCenter: Coordinates) => setMapCenter(mapCenter)}
                mapCenter={mapCenter}
                setMaxAllowedMarkerRenders={(maxMarkers: number) => setMaxAllowedMarkerRenders(maxMarkers)}
                maxAllowedMarkerRenders={maxAllowedMarkerRenders}
                setBoundingBox={setBoundingBox}
                boundingbox={boundingbox}
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
