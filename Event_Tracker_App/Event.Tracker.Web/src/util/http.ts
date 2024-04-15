import { BoundingBox, Location } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchEventsFromCoordinates = async (boundingbox: BoundingBox, quantity: number) => {
    let url = `${API_URL}/Event/getEventFromBoundingBox?&north=${boundingbox.east}&south=${boundingbox.north}&east=${boundingbox.south}&west=${boundingbox.west}&quantity=${quantity}`;
    
    const response = await fetch(url, {
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while creating a new event');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();

    return eventPostResponse;
}

export const postEvent = async (eventRequestFormData: FormData) => {
    const response = await fetch(`${API_URL}/Event`, {
        method: 'POST',
        body: eventRequestFormData,
    });

    if (!response.ok) {
        const error = new Error('An error occurred while creating a new event');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();

    return eventPostResponse;
}

export const fetchCoordinatesFromAddress = async (address: string): Promise<Location> => {
    const response = await fetch(`${API_URL}/Address/getCoordinatesFromAddress?Address=${address}`);

    if (!response.ok) {
        const error = new Error('something went wrong');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();

    return eventPostResponse;
}