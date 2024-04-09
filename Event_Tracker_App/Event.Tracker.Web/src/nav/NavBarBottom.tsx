import { MouseEventHandler } from 'react'
import './NavBarBottom.css'

type Props = {
    page: string,
    setPage: (page: string) => void
}

export const NavBarBottom = ({ setPage, page }: Props) => {
    return(
        <>
            <nav className='navbar-bottom'>
                <a onClick={() => setPage('Explore')} href="#">Explore</a>
                <a onClick={() => setPage('ListEvents')} href="#">List Events</a>
                <a onClick={() => setPage('SavedEvents')} href="#">Saved Events</a>
                <a onClick={() => setPage('CreateEvent')} href="#">Create Event</a>
            </nav>
        </>
    )
}