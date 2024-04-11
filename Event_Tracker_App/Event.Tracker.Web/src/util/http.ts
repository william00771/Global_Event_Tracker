import { Coordinates, EventModel, EventModelRequestDto } from "../types/types";
import { logFormData } from "./formtools";

export const fetchEvents = async (startDate?: Date, endDate?: Date, filter?: string): Promise<Array<EventModel>> => {
    let url = `http://localhost:5200/api/Event`;
    if (startDate || endDate) {
        url += `?startDate=${startDate?.toISOString()}&endDate=${endDate?.toISOString()}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        const error = new Error('Error');
        error.message = await response.json();
        throw error;
    }

    return await response.json();
}

export const postEvent = async (eventRequestFormData: FormData) => {
    logFormData(eventRequestFormData);
    const response = await fetch(`http://localhost:5200/api/Event`, {
        method: 'POST',
        body: eventRequestFormData,
    });

    if (!response.ok) {
        const error = new Error('An error occurred while creating a new event');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();
    console.log(eventPostResponse);

    return eventPostResponse;
}

export const fetchCoordinatesFromAddress = async (address: string): Promise<Coordinates> => {
    const response = await fetch(`http://localhost:5200/api/Address/getCoordinatesFromAddress?Address=${address}`);

    if (!response.ok) {
        const error = new Error('something went wrong');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();

    return eventPostResponse;
}