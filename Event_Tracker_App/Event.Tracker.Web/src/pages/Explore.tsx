import './Explore.css'
import { useQuery } from "react-query"
import { fetchEvents } from "../util/http"
import { EventModel } from "../types/types";

type Props = {
  className: string,
  data: Array<EventModel>
}

function Explore({ className, data }: Props) {

    

    return(
      <section className={className}>
        {data.map(event => (
          <p>{event.name}</p>
        ))}
      </section>
    )
}

export default Explore
