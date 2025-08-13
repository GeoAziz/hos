
'use client';

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

interface GoogleMapProps {
    center: { lat: number; lng: number };
    apiKey: string;
}

export function GoogleMap({ center, apiKey }: GoogleMapProps) {
    if(!apiKey) {
        return (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps API key is missing.</p>
            </div>
        )
    }
    return (
        <APIProvider apiKey={apiKey}>
            <Map
                defaultCenter={center}
                defaultZoom={15}
                mapId="medibook-map"
                className="w-full h-full"
            >
                <AdvancedMarker position={center} />
            </Map>
        </APIProvider>
    );
}
