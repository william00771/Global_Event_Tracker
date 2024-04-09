import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './TimePicker.css'
import dayjs from 'dayjs'
import { ThemeProvider, createTheme } from '@mui/material'

type Props = {
    className: string
    setPage: (page: string) => void
}
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }
});

export const TimePicker = ({ className, setPage }: Props) => {
    return(
        <section className={className}>
            <form className='form_container'>
                <ThemeProvider theme={darkTheme}>   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                                name='date'
                                label="From"
                                defaultValue={dayjs()}
                            />
                        <DatePicker 
                                name='date'
                                label="To"
                                defaultValue={dayjs()}
                            />
                    </LocalizationProvider>
                </ThemeProvider>
                <button onClick={() => setPage('Explore')} type='submit' className='btn-primary--gradient-outlinethin btn'>Confirm</button>
            </form>
        </section>
    )
}