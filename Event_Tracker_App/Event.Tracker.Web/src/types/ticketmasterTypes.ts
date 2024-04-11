interface Image {
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
}

interface Venue {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images: Image[];
    postalCode: string;
    timezone: string;
    city: {
        name: string;
    };
    country: {
        name: string;
        countryCode: string;
    };
    address: {
        line1: string;
    };
    location: {
        longitude: string;
        latitude: string;
    };
}

interface Event {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images: Image[];
    sales: {
        public: {
            startDateTime: string;
            startTBD: boolean;
            startTBA: boolean;
            endDateTime: string;
        };
    };
    dates: {
        start: {
            localDate: string;
            localTime: string;
            dateTime: string;
            dateTBD: boolean;
            dateTBA: boolean;
            timeTBA: boolean;
            noSpecificTime: boolean;
        };
        timezone: string;
        status: {
            code: string;
        };
        spanMultipleDays: boolean;
    };
    classifications: {
        primary: boolean;
        segment: {
            id: string;
            name: string;
        };
        genre: {
            id: string;
            name: string;
        };
        subGenre: {
            id: string;
            name: string;
        };
        family: boolean;
    }[];
    promoter: {
        id: string;
        name: string;
    };
    promoters: {
        id: string;
        name: string;
    }[];
    priceRanges: {
        type: string;
        currency: string;
        min: number;
        max: number;
    }[];
    seatmap: {
        staticUrl: string;
    };
    _links: {
        self: {
            href: string;
        };
        attractions: {
            href: string;
        }[];
        venues: {
            href: string;
        }[];
    };
    _embedded: {
        venues: Venue[];
    };
}

interface ApiResponse {
    _embedded: {
        events: Event[];
    };
    _links: {
        first: {
            href: string;
        };
        self: {
            href: string;
        };
        next: {
            href: string;
        };
        last: {
            href: string;
        };
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
}
