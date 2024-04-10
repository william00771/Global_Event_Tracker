export type AddressComponent = {
    long_name: string;
    short_name: string;
    types: string[];
  }
  
export type Bounds = {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  }
  
export type Geometry = {
    bounds: Bounds;
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: Bounds;
  }
  
export type Result = {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    types: string[];
  }

export type GeocoderApiResponse = {
    results: Result[];
    status: string;
  }