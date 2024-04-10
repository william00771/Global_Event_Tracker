import './Explore.css'
import { useQuery } from "react-query"
import { fetchEvents } from "../util/http"
import { EventModel } from "../types/types";

type Props = {
  className: string
}

function Explore({ className }: Props) {

    


    return(
      <section className={className}>
        
      </section>
    )
}

export default Explore
