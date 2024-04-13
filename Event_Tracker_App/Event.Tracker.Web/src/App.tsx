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
import { fetchEvents, fetchEventsFromCoordinates, postEvent } from './util/http';
import { BoundingBox, Coordinates, EventModel, EventModelRequestDto } from './types/types';
import { CircularProgress } from '@mui/material';
import { calculateLongitudeLatitudeBoundingBox } from './util/mapcalculation';



function App() {
  const [page, setPage] = useState('Explore');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [filter, setFilter] = useState(" ");
  const [mapCenter, setMapCenter] = useState<Coordinates>({
    lat: 59.3369170,
    lng: 18.0119609
  });

  const [boundingbox, setBoundingBox] = useState<BoundingBox>(calculateLongitudeLatitudeBoundingBox(59.3369170, 18.0119609, 75));


  const getFilteredEventsHandler = (startDate?: Date, endDate?: Date) => {
    if(startDate != null){
      setStartDate(startDate);
    }
    if(endDate != null){
      setEndDate(endDate);
    }
  }

  useEffect(() => {
    
  }, [])

  const { data, isLoading, isError, refetch } = useQuery<Array<EventModel>>({
      queryKey: ['fetchevents', startDate, endDate],
      queryFn: () => fetchEventsFromCoordinates(boundingbox, startDate, endDate)
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
              getFilteredEvents={(startDate?: Date, endDate?: Date) => getFilteredEventsHandler(startDate, endDate)}
            />
            <Account 
              className={"account-container " + (page == "Account" && "active")}
              setPage={(page) => setPage(page)}
            />
            { page != 'CreateEvent' && 
              <Explore 
                className={"explore-container " }
                data={data}
                setPage={(page) => setPage(page)}
                page={page}
                filter={filter}
                setMapCenter={(mapCenter: Coordinates) => setMapCenter(mapCenter)}
                mapCenter={mapCenter}
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
