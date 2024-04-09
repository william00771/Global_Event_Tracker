import './Explore.css'
import { useQuery } from "react-query"
import { fetchEvents } from "../util/http"
import { EventModel } from "../types/types";

type Props = {
  className: string
}

function Explore({ className }: Props) {

    // const { data, isLoading, isError } = useQuery<EventModel>({
    //   queryKey: ['fetchevents'],
    //   queryFn: () => fetchEvents()
    // });


    return(
      <section className={className}>
        {/* {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Error</h1>}
        {data && <h1>{data.name}</h1>} */}
        <h1>Explore</h1>
      </section>
    )
}

export default Explore
