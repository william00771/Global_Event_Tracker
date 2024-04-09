import { MouseEventHandler } from 'react'
import './NavbarTop.css'

type Props = {
    setPage: (page: string) => void
}

export const NavbarTop = ({ setPage }: Props) => {
    return(
        <>
            <nav className='navbar-top'>
                <a onClick={() => setPage('TimePicker')} href="#">TimePicker</a>
                <a onClick={() => setPage('Account')} href="#">Account</a>
            </nav>
        </>
    )
}