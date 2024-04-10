import { BoundingBox } from "@/types/types";

// This is the Haversine Formula
export function calculateLongitudeLatitudeBoundingBox(centerLatitude: number, centerLongitude: number, radiusKm: number): BoundingBox {
    const EarthRadiusKm: number = 6371;

    const centerLatRadians: number = centerLatitude * Math.PI / 180; // Convert latitude and longitude from degrees to radians
    const centerLonRadians: number = centerLongitude * Math.PI / 180;
    
    const northDistance: number = radiusKm / EarthRadiusKm; // Calculate the north, south, east, and west distances
    const southDistance: number = -northDistance;
    const eastDistance: number = radiusKm / (EarthRadiusKm * Math.cos(centerLatRadians));
    const westDistance: number = -eastDistance;
   
    const northLatRadians: number = centerLatRadians + northDistance;  // Convert distances to radians
    const southLatRadians: number = centerLatRadians + southDistance;
    const eastLonRadians: number = centerLonRadians + eastDistance;
    const westLonRadians: number = centerLonRadians + westDistance;
   
    const northLatDegrees: number = northLatRadians * 180 / Math.PI;  // Convert radians to degrees for the bounding box corners
    const southLatDegrees: number = southLatRadians * 180 / Math.PI;
    const eastLonDegrees: number = eastLonRadians * 180 / Math.PI;
    const westLonDegrees: number = westLonRadians * 180 / Math.PI;

    return {
        north: northLatDegrees,
        south: southLatDegrees,
        east: eastLonDegrees,
        west: westLonDegrees
    };
}

//Check If coordinates are inside the bounding box or not
export function isCoordinateWithinBoundingBox(coordinate: { latitude: number, longitude: number }, boundingBox: BoundingBox): boolean {
    return (
        coordinate.latitude >= boundingBox.south &&
        coordinate.latitude <= boundingBox.north &&
        coordinate.longitude >= boundingBox.west &&
        coordinate.longitude <= boundingBox.east
    );
}