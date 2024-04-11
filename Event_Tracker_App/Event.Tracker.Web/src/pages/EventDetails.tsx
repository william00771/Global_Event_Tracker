import { EventModel } from '@/types/types'
import './EventDetails.css'
import { formatDateAndDurationToHours, formatDateToStartDateEndDate } from '@/util/dateTools'

type Props = {
    className: string
    visible: boolean,
    setShowEventDetails: (visible: string) => void,
    eventData?: EventModel
}

export const EventDetails = ({ className, visible, setShowEventDetails, eventData}: Props) => {
    return(
        <>
            {eventData &&
                <section className={className + (visible ? ' active ' : ' inactive ')}>
                    <header className='event-container__header'>
                        <section className='event-container__header-top'>
                            <a className='event-container__header-item' href="#" onClick={() => setShowEventDetails('')}>
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier">
                                    <path fill="#ffffff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
                                    <path fill="#ffffff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
                                    </g>
                                </svg>
                            </a>
                            <a className='event-container__header-item' href="#">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ffffff"/> </g>
                                </svg>
                            </a>
                        </section>
                        <section className='event-container__header-bottom'>
                            <h1 className='event-container__header-title'>{eventData?.name}</h1>
                            <div className='event-container__header-item'>
                                <svg width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> </g>
                                </svg>
                                <p className='event-container__header-paragraph'>{formatDateToStartDateEndDate(eventData.date, eventData.dateTo)}</p>
                            </div> 
                            <div className='event-container__header-item'>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 6V12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.24 16.24L12 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                </svg>
                                <p className='event-container__header-paragraph'>{formatDateAndDurationToHours(eventData.time, eventData.duration)}</p>
                            </div>
                            <div className='event-container__header-item'>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 1C6.99007 1 3 4.90629 3 9.5C3 12.3551 4.68771 15.2094 6.46065 17.4889C7.99487 19.4615 9.7194 21.1574 10.7973 22.2173C10.9831 22.4001 11.1498 22.564 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8502 22.564 13.0169 22.4001 13.2027 22.2174L13.2028 22.2173C14.2806 21.1573 16.0051 19.4615 17.5394 17.4889C19.3123 15.2094 21 12.3551 21 9.5C21 4.90629 17.0099 1 12 1ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="#ffffff"/> </g>
                                </svg>
                                <p className='event-container__header-paragraph'>{eventData?.location.formattedAddress}</p>
                            </div>
                        </section>
                        <img className='event-container__header-bgimage' src={eventData.image} alt="" />
                    </header>
                    <article className='event-container__main'>
                        <h3 className='event-container__main-title'>{eventData?.keywords}</h3>
                        <p className='event-container__main-secondarytitle'>{eventData?.numberOfPeople} people</p>
                        <p className='event-container__main-paragraph'>{eventData?.description}</p>
                        <a href={eventData?.websiteUrl} className='event-container__main-link'> <svg width='30px' height="30px" viewBox="0 2 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path><path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line><line x1="32" y1="6.99" x2="32" y2="56.7"></line><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path></g></svg>Website</a>
                    </article>
                </section>
            }
        </>
    )
}