import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './CreateEvent.css'
import dayjs from 'dayjs'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import placeholder from '../resources/Placeholders/event.jpg'
import { FormEvent, useRef, useState } from 'react'
import { EventModel, EventModelRequestDto } from '@/types/types'

type Props = {
    className: string
    setPage: (page: string) => void
    postEvent: (eventRequestDto: EventModelRequestDto) => void
}

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }
});

export const CreateEvent = ({ className, setPage }: Props) => {

    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const target = document.getElementById('myForm') as HTMLFormElement;
        const fd = new FormData(target);
        const data = Object.fromEntries(fd.entries());

        console.log(data.name);
    };


    return(
        <section className={className}>
            <header className='createevent-container__header'>
                <section className='createevent-container__header-top'>
                    <a onClick={() => setPage('Explore')} className='createevent-container__header-item' href="#">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <path fill="#ffffff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
                            <path fill="#ffffff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
                            </g>
                        </svg>
                    </a>
                </section>
                <section className='createevent-container__header-bottom'>
                <h1 className='createevent-container__header-title'>Create Event</h1>
                <div className='createevent-container__header-item'>
                    <svg width="40px" height="40px" viewBox="0 3 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
                        <path stroke="#ffffff" fill="rgba(140,188,214,0)" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"/>
                        <circle fill="#ededed" cx="35" cy="16" r="3"/>
                        <polygon fill="#e3e3e3" points="20,16 9,32 31,32"/>
                        <polygon fill="#ffffff" points="31,22 23,32 39,32"/>
                        <circle fill="rgba(67,160,72,0)" cx="38" cy="38" r="10"/>
                        <g fill="#ffffff">
                            <rect x="36" y="32" width="4" height="12"/>
                            <rect x="32" y="36" width="12" height="4"/>
                        </g>
                    </svg>
                    <p className='createevent-container__header-paragraph'>Add Cover</p>
                </div> 
                </section>
                <img className='createevent-container__header-bgimage' src={placeholder} alt="" />
            </header>
            <section className='createevent-container__main'>
                <form id="myForm" onSubmit={e => { e.preventDefault(); }} className='createevent-container__form'>
                    <input className='createevent-container__form-fileinput' type="file" accept=".jpg, .jpeg, .eps, .png, .webp, .tiff" placeholder='Image' name='image'/>
                    <input className='input-primary--outline-gradient1 form-input' type="text" name='name' placeholder='Event Name' />
                    <input className='input-primary--outline-gradient1 form-input' type="text" name='location' placeholder='Location' />
                    <ThemeProvider theme={darkTheme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        
                            <TimePicker
                                name='time'
                                label="Time"
                                defaultValue={dayjs()}
                            />
                            <DatePicker 
                                name='datefrom'
                                label="Date From"
                                defaultValue={dayjs()}
                            />
                            <DatePicker 
                                name='dateto'
                                label="Date To"
                                defaultValue={dayjs()}
                            />
                        </LocalizationProvider>
                    </ThemeProvider>
                    <select className='select-primary--outline-gradient1' name="durationtype" placeholder='Duration' > 
                        <option value="Hours">Hours duration</option>
                    </select>
                    <input className='input-primary--outline-gradient1 form-input' type='number' name='duration' placeholder='Duration' />
                    <input className='input-primary--outline-gradient1 form-input' type="text" name='url' placeholder='Website url' />
                    <input className='input-primary--outline-gradient1 form-input' type='number' name='people' placeholder='Number of people'/>
                    <input className='input-primary--outline-gradient1 form-input' type="text" name='type' placeholder='Type of Event' />
                    <button onClick={submitHandler} type='button' className='btn-primary--gradient-outline form-input__buttonlogin'>Add Event</button>
                </form>
            </section>
        </section>
    )
}