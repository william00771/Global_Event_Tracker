import { QueryClient, QueryClientProvider } from "react-query";
import Explore from "./pages/Explore"
import { useState } from "react";
import { NavbarTop } from "./nav/NavbarTop";
import { NavBarBottom } from "./nav/NavBarBottom";
import { TimePicker } from "./pages/TimePicker";
import { Account } from "./pages/Account";
import { ListEvents } from "./pages/ListEvents";
import { SavedEvents } from "./pages/SavedEvents";
import { CreateEvent } from "./pages/CreateEvent";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('Explore');

  return(
    <QueryClientProvider client={queryClient}>
      <NavbarTop />
      <main className="page-container">
        <TimePicker className={"timepicker-container " + (page == "TimePicker" && "active")}/>
        <Account className={"account-container " + (page == "Account" && "active")}/>
        <Explore className={"explore-container " + (page == "Explore" && "active")}/>
        <ListEvents className={"listevents-container " + (page == "ListEvents" && "active")}/>
        <SavedEvents className={"savedevents-container " + (page == "SavedEvents" && "active")}/>
        <CreateEvent className={"createevent-container " + (page == "CreateEvent" && "active")}/>
      </main>
      <NavBarBottom />
    </QueryClientProvider>
  )

}

export default App
