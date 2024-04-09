import { QueryClient, QueryClientProvider } from "react-query";
import Explore from "./pages/Explore"

const queryClient = new QueryClient();

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <Explore />
    </QueryClientProvider>
  )

}

export default App
