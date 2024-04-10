export type Coordinates = {
    lat: number;
    lng: number;
    formattedAdress: string;
}

export type EventModel = {
    id: number,
    name: string
}

export type EventModelRequestDto = {
    name: string
}