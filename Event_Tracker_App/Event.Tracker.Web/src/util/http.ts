import { GeocoderApiResponse } from "@/types/geocoder_types";
import { EventModel, EventModelRequestDto } from "../types/types";

export const fetchEvents = async (): Promise<Array<EventModel>> => {
    const response = await fetch('http://localhost:5200/api/Event');

    if(!response.ok){
        const error = new Error('Error');
        error.message = await response.json();
        throw error;
    }
    
    return await response.json()
}

export const postEvent = async (eventRequestDto : EventModelRequestDto ) => {
    const response = await fetch(`http://localhost:5200/api/Event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventRequestDto),
    });

    if (!response.ok) {
        const error = new Error('An error occurred while creating a new salty');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();
    return eventPostResponse;
}


const GEOCODER_API_KEY = "AIzaSyBetmu8K_98HiP-_W1HagWU-HPJmQXmyG4";

export const fetchCoordinatesFromAddress = async (address: string) : Promise<GeocoderApiResponse> => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GEOCODER_API_KEY}`);

    if(!response.ok){
        console.log("something went wrong");
    }

    return await response.json();
}