import { DatePicker, LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './TimePicker.css'
import dayjs from 'dayjs'
import { ThemeProvider, createTheme } from '@mui/material'
import { FormEvent, useState } from 'react'

type Props = {
    className: string
    setPage: (page: string) => void
    getFilteredEvents: (startDate?: Date, endDate?: Date) => void
}

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }
});

export const TimePicker = ({ className, setPage, getFilteredEvents }: Props) => {
    const [dateStartValue, setDateStartValue] = useState(dayjs());
    const [dateEndValue, setdateEndValue] = useState(dayjs());

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        getFilteredEvents(new Date(dateStartValue.toString()), new Date(dateEndValue.toString()));
        setPage('Explore')
    }

    return(
        <section className={className}>
            <form className='form_container'>
                <ThemeProvider theme={darkTheme}>   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                                name='date'
                                label="From"
                                defaultValue={dayjs()}
                                onChange={(newValue: any) => setDateStartValue(newValue)}
                            />
                        <DatePicker 
                                name='date'
                                label="To"
                                defaultValue={dayjs()}
                                onChange={(date: any) => setdateEndValue(date)}
                            />
                    </LocalizationProvider>
                </ThemeProvider>
                <button onClick={(e) => submitHandler(e)} type='submit' className='btn-primary--gradient-outlinethin btn'>Confirm</button>
            </form>
        </section>
    )
}