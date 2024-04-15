export type Location = {
    lat: number;
    lng: number;
    formattedAddress: string;
}

export type Coordinates = {
    lat: number;
    lng: number;
}

export type EventModel = {
    id: number,
    name: string,
    location: Location,
    description: string,
    time: string,
    date: Date,
    dateTo: Date, 
    duration: number,
    websiteUrl: string,
    numberOfPeople: number | null,
    keywords: Array<String>,
    image: string
}

export type EventModelRequestDto = {
    name: string,
    location: Location,
    description: string,
    time: Date,
    date: Date,
    dateTo: Date | null, 
    duration: number,
    websiteUrl: string,
    numberOfPeople: number | null,
    keywords: Array<String>,
    image: Blob | null
}

export type BoundingBox = {
    north: number;
    south: number;
    east: number;
    west: number;
}
