import './ListEvents.css'

type Props = {
    className: string
}

export const ListEvents = ({ className }: Props) => {
    return(
        <section className={className}>
            <header className='listevents-container__header'>
                <h1 className='listevents-container__header-title'>List Of Events</h1>
            </header>
            <article>
                <h2 className='event-container__title'>Tomorrowland</h2>
                <div className='event-container__article-item'>
                    <svg width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"/> </g>
                    </svg>
                    <p className='event-container__article-paragraph'>25th - 26th july, 2221</p>
                </div> 
                <div className='event-container__article-item'>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 6V12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.24 16.24L12 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>
                    <p className='event-container__article-paragraph'>4pm - 12pm</p>
                </div>
                <img className='listevents-container__article-bgimage' src="https://i.pinimg.com/564x/91/ef/f3/91eff36aa5b830a0e83cce8535133f43.jpg" alt="" />
            </article>
        </section>
    )
}