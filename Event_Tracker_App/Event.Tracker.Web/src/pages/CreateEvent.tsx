import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './CreateEvent.css'
import dayjs from 'dayjs'
import { ThemeProvider } from '@emotion/react'
import { CircularProgress, createTheme } from '@mui/material'
import placeholder from '../resources/Placeholders/event.jpg'
import { FormEvent, useRef, useState } from 'react'
import { Coordinates } from '@/types/types'
import { fetchCoordinatesFromAddress } from '@/util/http'
import TagsInput from '@/components/TagsInput/TagsInput'

type Props = {
    className: string
    setPage: (page: string) => void
    postEvent: (eventRequestDto: FormData) => void,
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export const CreateEvent = ({ className, setPage, postEvent }: Props) => {
    const inputElement = useRef<HTMLInputElement>(null!);
    const [keywords, setKeywords] = useState<Array<string>>([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedImageBlob, setSelectedImageBlob] = useState<Blob | null>(null);
    const [timeValue, setTimeValue] = useState(dayjs());
    const [dateStartValue, setDateStartValue] = useState(dayjs());
    const [dateEndValue, setdateEndValue] = useState(dayjs());

    const [adress, setAdress] = useState<Coordinates>({lat: 0, lng: 0, formattedAddress: ''});
    const [invalidAdress, setInvalidAdress] = useState(false);

    const [loading, setLoading] = useState(false);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(keywords == null){
            return;
        }
        setLoading(true);

        const target = document.getElementById('myForm') as HTMLFormElement;
        const fd = new FormData(target);
        const data = Object.fromEntries(fd.entries());

        const formData = new FormData();
        formData.append('Name', data.name);
        formData.append('CoordinatesRequest.Lat', adress.lat.toString());
        formData.append('CoordinatesRequest.Lng', adress.lng.toString());
        formData.append('CoordinatesRequest.FormattedAddress', adress.formattedAddress);
        formData.append('Description', data.description);
        formData.append('Time', new Date(timeValue.toString()).toISOString());
        formData.append('Date', new Date(dateStartValue.toString()).toISOString());
        formData.append('DateTo', dateEndValue ? new Date(dateEndValue.toString()).toISOString() : '');
        formData.append('Duration', data.duration);
        formData.append('WebsiteUrl', data.url);
        formData.append('NumberOfPeople', data.people);
        keywords.forEach((keyword, index) => {
            formData.append(`Keywords[${index}]`, keyword);
        });
        formData.append('Image', selectedImageBlob || placeholder);

        postEvent(formData);
        setLoading(false);
        setPage('Explore');
    };

    const addressChangeHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const addressRequest = e.currentTarget.value;
        if(adress?.formattedAddress == addressRequest){
            return;
        }
        getCoordinates(addressRequest)
            .then(coordinatesResponse => {
                inputElement.current.value = coordinatesResponse.formattedAddress;
                setAdress(coordinatesResponse);
            })
            .catch(error => {
                setInvalidAdress(true);
                setTimeout(() => {
                    setInvalidAdress(false);
                }, 3000);
            });
    }

    const getCoordinates = async (address: string): Promise<Coordinates> => {
        const response: Coordinates = await fetchCoordinatesFromAddress(address);
        if(response != undefined){
            return response;
        }else{
            throw new Error("Unable to retrieve coordinates for the provided address.");
        }
    }

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
            setSelectedImageBlob(file);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return(
        <section className={className}>
            {loading && <div className='loading-container'><CircularProgress color="secondary" /></div>}
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
                <img className='createevent-container__header-bgimage' src={selectedImage || placeholder} alt="" />
            </header>
            <section className='createevent-container__main'>
                <form id="myForm" className='createevent-container__form'>
                    <input 
                        className='createevent-container__form-fileinput' 
                        type="file" accept=".jpg, .jpeg, .eps, .png, .webp, .tiff" 
                        placeholder='Image' name='image' 
                        onChange={handleImageChange}
                        required
                    />
                    <input 
                        className='input-primary--outline-gradient1 form-input' 
                        type="text" name='name' 
                        placeholder='Event Name' 
                        required
                    />
                    <input 
                        className={'input-primary--outline-gradient1 form-input address-input ' + (invalidAdress && 'invalid') }
                        type="text" 
                        name='location' 
                        placeholder='Location' 
                        onBlur={(e: any) => addressChangeHandler(e)}
                        ref={inputElement}
                        required
                    />
                    <ThemeProvider theme={darkTheme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                sx={{ '& input': { color: '#a9a9a9', fontSize: '.8rem', marginLeft: '2%' } }}
                                name='time'
                                label="Time"
                                defaultValue={dayjs()}
                                onChange={(newValue: any) => setTimeValue(newValue)}
                            />
                            <DatePicker 
                                sx={{ '& input': { color: '#a9a9a9', fontSize: '.8rem', marginLeft: '2%' } }}
                                name='datefrom'
                                label="Date From"
                                defaultValue={dayjs()}
                                onChange={(date: any) => {setDateStartValue(date); setdateEndValue(date)}}
                            />
                            <DatePicker 
                                sx={{ '& input': { color: '#a9a9a9', fontSize: '.8rem', marginLeft: '2%' } }}
                                name='dateto'
                                label="Date To"
                                defaultValue={dayjs()}
                                onChange={(date: any) => setdateEndValue(date)}
                            />
                        </LocalizationProvider>
                    </ThemeProvider>
                    <textarea
                        className='textbox-primary--outline-gradient1 form-input'
                        name='description'
                        placeholder='Description'
                        onInput={(e) => adjustTextareaHeight(e.target)}
                        required
                    />
                    <select 
                        className='select-primary--outline-gradient1' 
                        name="durationtype" 
                        placeholder='Duration' 
                    > 
                        <option value="Hours">Hours duration</option>
                    </select>
                    <input 
                        className='input-primary--outline-gradient1 form-input' 
                        type='number' 
                        name='duration' 
                        placeholder='Duration' 
                        required
                    />
                    <input 
                        className='input-primary--outline-gradient1 form-input' 
                        type="text" 
                        name='url' 
                        placeholder='Website url' 
                        required
                    />
                    <input 
                        className='input-primary--outline-gradient1 form-input' 
                        type='number' 
                        name='people' 
                        placeholder='Number of people'
                        required
                    />
                    <TagsInput 
                        selectedTags={(tags: any) => setKeywords(tags)}  
                        tags={[]}
                    />
                    <button 
                        className='btn-primary--gradient-outline form-input__buttonlogin'
                        type='button'
                        onClick={(e) => submitHandler(e)}
                    >
                    Add Event</button>
                </form>
            </section>
        </section>
    )
}