import './ListEvents.css'
import placeholder from '../resources/Placeholders/event.jpg'

type Props = {
    className: string
}

export const ListEvents = ({ className }: Props) => {
    return(
        <section className={className}>
            <header className='listevents-container__header'>
                <h1 className='listevents-container__header-title'>List Of Events</h1>
            </header>
            <article className='listevent-item'>
                <h2 className='listevent-item__title'>Tomorrowland</h2>
                <div className='listevent-item__info-container'>
                    <div className='listevent-item__article-item'>
                        <svg width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> </g>
                        </svg>
                        <p className='listevent-item__article-paragraph'>25th - 26th july, 2221</p>
                    </div> 
                    <div className='listevent-item__article-item'>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 6V12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.24 16.24L12 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>
                        <p className='listevent-item__article-paragraph'>4pm - 12pm</p>
                    </div>
                </div>
                <img className='listevents-item__bgimage' src={placeholder} alt="" />
                <svg className='listevent-item__favicon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                    <path className='listevent-item__favicon--colorstroke' fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                </svg>
            </article>
        </section>
    )
}