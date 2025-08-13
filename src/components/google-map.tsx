
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
                <div className="text-center p-4">
                    <p className="font-semibold text-lg mb-2">Map Unavailable</p>
                    <p className="text-muted-foreground">The Google Maps API key is missing or invalid. Please provide a valid key in your environment configuration to enable maps.</p>
                    <p className="text-xs text-muted-foreground mt-2">Note: This may also be caused by billing not being enabled on the associated Google Cloud project.</p>
                </div>
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
