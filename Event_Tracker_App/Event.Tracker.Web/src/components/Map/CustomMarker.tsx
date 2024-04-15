import { EventModel } from "@/types/types";
import { formatDateAndDurationToHours, formatDateToStartDateEndDate } from "@/util/dateTools";
import { Point, divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import placeholder from '../../resources/Placeholders/event.jpg'

type Props = {
    id: number
    showMarkerDetails: string,
    eventData: EventModel,
    svgIcon: string,
    width: number
  }

const ExampleIcon = ({id, showMarkerDetails, eventData, svgIcon, width} : Props) => {
    return (
      <>
        <header style={{width: `${width}px`, height: `${width}px`}} className='marker-container'>
            <div className="marker-container__icon" style={{backgroundImage: `linear-gradient(#eb01a525, #d1363136), url(${svgIcon})`}}></div>
        </header>
        <section className={"marker-container__section " + (showMarkerDetails === id.toString() ? "active" : "inactive")}>
            <header className='marker__header'>
                <section className='marker__header-top'>
                    <a className='marker__header-item' href="#">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ffffff"/> </g>
                        </svg>
                    </a>
                </section>
                <section className='marker__header-bottom'>
                    <h1 className='marker__header-title'>{eventData.name}</h1>
                    <div className='marker__header-item'>
                        <svg width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> </g>
                        </svg>
                        <p className='marker__header-paragraph'>{formatDateToStartDateEndDate(eventData.date.toString(), eventData.dateTo.toString())}</p>
                    </div> 
                    <div className='marker__header-item'>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 6V12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.24 16.24L12 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>
                        <p className='marker__header-paragraph'>{formatDateAndDurationToHours(eventData.time, eventData.duration)}</p>
                    </div>
                </section>
                <img className='marker__header-bgimage' src={ eventData.image || placeholder } alt="" />
            </header>
            <article className='marker__main'>
                <p className='marker__main-paragraph'>{eventData.description.split(" ").slice(0, 18).join(" ")}..</p>
                <button className='moreinfobtn btn-primary--gradient marker__main-btn' value={id}>More Info</button>
            </article>
        </section>
        </>
    );
  }

  export const CustomMarker = ({width, id, showMarkerDetails, eventData, svgIcon} : Props) => {
    return divIcon({
      html: renderToString(
        <ExampleIcon 
          width={width}
          id={id} 
          showMarkerDetails={showMarkerDetails} 
          eventData={eventData} 
          svgIcon={svgIcon}
        />
      ),
      className: "",
      iconSize: new Point(4, 4),
    });
  }