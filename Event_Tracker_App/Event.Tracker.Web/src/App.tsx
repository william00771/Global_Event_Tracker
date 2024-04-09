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
        <TimePicker className=""/>
        <Account className=""/>
        <Explore className=""/>
        <ListEvents className=""/>
        <SavedEvents className=""/>
        <CreateEvent className=""/>
      </main>
      <NavBarBottom />
    </QueryClientProvider>
  )

}

export default App
