import { BoundingBox, Location, EventModel } from "../types/types";

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

export const fetchEventsFromCoordinates = async (boundingbox: BoundingBox, startDate?: Date, endDate?: Date, filter?: string) => {
    
    const response = await fetch(`http://localhost:5200/api/Event/GetEventFromCoordinates`, {
        method: 'POST',
        body: JSON.stringify({
            "north": boundingbox.east,
            "south": boundingbox.north,
            "east": boundingbox.south,
            "west": boundingbox.west
          }),
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

    return eventPostResponse;
}

export const fetchCoordinatesFromAddress = async (address: string): Promise<Location> => {
    const response = await fetch(`http://localhost:5200/api/Address/getCoordinatesFromAddress?Address=${address}`);

    if (!response.ok) {
        const error = new Error('something went wrong');
        error.message = await response.json();
        throw error;
    }

    const eventPostResponse = await response.json();

    return eventPostResponse;
}