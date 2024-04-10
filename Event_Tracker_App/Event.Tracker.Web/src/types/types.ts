export type Coordinates = {
    lat: number;
    lng: number;
    formattedAddress: string;
}

export type EventModel = {
    id: number,
    name: string,
    location: Coordinates,
    description: string,
    time: Date,
    date: Date,
    dateTo: Date | null, 
    duration: number,
    websiteUrl: string,
    numberOfPeople: number | null,
    keywords: Array<String>,
    image: string
}

export type EventModelRequestDto = {
    name: string,
    location: Coordinates,
    description: string,
    time: Date,
    date: Date,
    dateTo: Date | null, 
    duration: number,
    websiteUrl: string,
    numberOfPeople: number | null,
    keywords: Array<String>,
    // image: Blob | null
}