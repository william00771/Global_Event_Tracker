import './App.css'
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "react-query";
import Explore from "./pages/Explore"
import { useState } from "react";
import { NavbarTop } from "./nav/NavbarTop";
import { NavBarBottom } from "./nav/NavBarBottom";
import { TimePicker } from "./pages/TimePicker";
import { Account } from "./pages/Account";
import { ListEvents } from "./pages/ListEvents";
import { SavedEvents } from "./pages/SavedEvents";
import { CreateEvent } from "./pages/CreateEvent";
import { fetchEvents, postEvent } from './util/http';
import { EventModel, EventModelRequestDto } from './types/types';



function App() {
  const [page, setPage] = useState('Explore');


  const { data, isLoading, isError, refetch } = useQuery<Array<EventModel>>({
      queryKey: ['fetchevents'],
      queryFn: () => fetchEvents()
    });

  const postMutation = useMutation((eventRequestDto: EventModelRequestDto) => postEvent(eventRequestDto), {
      onSuccess: () => {
          refetch();
          setPage('Explore');
      }
  });

  return(
      <>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Error</h1>}
        <NavbarTop 
          setPage={(page) => setPage(page)}
          page={page}
          className={"navtop-container " + (page == "EventDetails" && "inactive")}
        />
        {data &&
          <main className="page-container">
            
            <TimePicker 
              className={"timepicker-container " + (page == "TimePicker" && "active")}
              setPage={(page) => setPage(page)}
            />
            <Account 
              className={"account-container " + (page == "Account" && "active")}
              setPage={(page) => setPage(page)}
            />
            <Explore 
              className={"explore-container " }
              // + (page == "Explore" && " active ") + (page == "TimePicker"  && " active ")
              data={data}
              setPage={(page) => setPage(page)}
            />
            <ListEvents 
              className={"listevents-container " + (page == "ListEvents" && "active")}
              data={data}
            />
            {/* <SavedEvents 
              className={"savedevents-container " + (page == "SavedEvents" && "active")}
              data={data}
            /> */}
            {/* <CreateEvent 
              className={"createevent-container " + (page == "CreateEvent" && "active")}
              setPage={(page) => setPage(page)}
              postEvent={(eventRequestDto: EventModelRequestDto) => postMutation.mutate(eventRequestDto)}
            /> */}
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
