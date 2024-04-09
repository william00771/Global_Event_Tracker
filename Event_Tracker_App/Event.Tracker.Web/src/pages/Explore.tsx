import { useQuery } from "react-query"
import { fetchEvents } from "../util/http"
import { EventModel } from "../types/types";

function Explore() {

    const { data, isLoading, isError } = useQuery<EventModel>({
      queryKey: ['fetchevents'],
      queryFn: () => fetchEvents()
    });

    if(isLoading) return <h1>Loading...</h1>;

    if(isError) return <h1>Error</h1>;

    if(data){
      return(
        <h1>{data.name}</h1>
      )
    }

}

export default Explore
