import { EventModel } from "../types/types";

export const fetchEvents = async (): Promise<Array<EventModel>> => {
    const response = await fetch('http://localhost:5200/api/Event');

    if(!response.ok){
        const error = new Error('Error');
        error.message = await response.json();
        throw error;
    }
    
    return await response.json()
}