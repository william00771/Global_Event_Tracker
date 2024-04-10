export type Coordinates = {
    lat: number;
    lng: number;
    formattedAddress: string;
}

export type EventModel = {
    id: number,
    name: string
}

export type EventModelRequestDto = {
    name: string
}