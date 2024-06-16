import './NavBarBottom.css'

type Props = {
    page: string,
    setPage: (page: string) => void
}

export const NavBarBottom = ({ setPage, page }: Props) => {
    return(
        <nav className='navbottom-container'>
            <a
                onClick={() => setPage('Explore')}
                className='navbottom__item' href="#">

                <svg className={'navbottom__icon explore__icon ' + (page == "Explore" && "active")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={'navbottom__icon--colorstroke '} d="M5.875 12.5729C5.30847 11.2498 5 9.84107 5 8.51463C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51463C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C9.60664 17.2638 8.62102 16.5151 7.79508 15.6" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/>
                    <path className={'navbottom__icon--colorstroke '} d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" stroke="#E1E1E1" stroke-width="1.5"/>
                    <path className={'navbottom__icon--colorstroke '} d="M20.9605 15.5C21.6259 16.1025 22 16.7816 22 17.5C22 18.4251 21.3797 19.285 20.3161 20M3.03947 15.5C2.37412 16.1025 2 16.7816 2 17.5C2 19.9853 6.47715 22 12 22C13.6529 22 15.2122 21.8195 16.5858 21.5" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                
                <p className={'navbottom__title explore__title ' + (page == "Explore" && "active")}>Explore</p>
            </a>
            <a 
                onClick={() => setPage('ListEvents')}
                className='navbottom__item' href="#">
                
                <svg className={'navbottom__icon listevents__icon ' + (page == "ListEvents" && "active")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={'navbottom__icon--colorstroke '} d="M4 17H11" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/>
                    <path className={'navbottom__icon--colorstroke '} d="M4 12L11 12" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/>
                    <path className={'navbottom__icon--colorstroke '} d="M4 7L11 7" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/>
                    <path className={'navbottom__icon--colorstroke '} d="M17 4L17 20M17 4L14 8M17 4L20 8M17 20L20 16M17 20L14 16" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p className={'navbottom__title listevents__title ' + (page == "ListEvents" && "active")}>List Of Events</p>
            </a>
            <a 
                onClick={() => setPage('SavedEvents')}
                className='navbottom__item' href="#">

                <svg className={'navbottom__icon savedevents__icon ' + (page == "SavedEvents" && "active")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={'navbottom__icon--colorfill '} fill-rule="evenodd" clip-rule="evenodd" d="M12.4037 20.8018C14.0282 19.9702 20 16.5681 20 11.5C20 7 16.2667 4 12 4C7.87627 4 4 7 4 11.5C4 16.5681 9.97178 19.9702 11.5963 20.8018C11.8532 20.9334 12.1468 20.9334 12.4037 20.8018ZM11.7687 14.7565L8.97014 11.8107C8.3998 11.2103 8.31058 10.2991 8.75365 9.5995C9.49154 8.43441 11.2101 8.4922 11.868 9.70422L11.9376 9.83247C11.9645 9.88195 12.0355 9.88195 12.0624 9.83247L12.132 9.70422C12.7899 8.4922 14.5085 8.43441 15.2463 9.5995C15.6894 10.2991 15.6002 11.2103 15.0299 11.8107L12.2313 14.7565C12.1386 14.8541 12.0922 14.9029 12.0359 14.9142C12.0122 14.919 11.9878 14.919 11.9641 14.9142C11.9078 14.9029 11.8614 14.8541 11.7687 14.7565Z" fill="#E1E1E1"/>
                </svg>

                <p className={'navbottom__title savedevents__title ' + (page == "SavedEvents" && "active")}>Saved Events</p>
            </a>

            <a 
                onClick={() => setPage('CreateEvent')}
                className='navbottom__item' href="#">

                <svg className={'navbottom__icon createvent__icon ' + (page == "CreateEvent" && "active")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={'navbottom__icon--colorfill '} fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#E1E1E1"/>
                </svg>

                <p className={'navbottom__title createevent__title ' + (page == "CreateEvent" && "active")}>Create Event</p>
            </a>
        </nav>
    )
}