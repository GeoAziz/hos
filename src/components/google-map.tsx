
'use client';

import { APIProvider, Map, AdvancedMarker, useApiIsLoaded } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

interface GoogleMapProps {
    center: { lat: number; lng: number };
    apiKey: string;
}

function MapComponent({ center }: { center: { lat: number, lng: number } }) {
    const isLoaded = useApiIsLoaded();

    if (!isLoaded) {
        return (
             <div className="w-full h-full bg-secondary flex items-center justify-center">
                <p>Loading Map...</p>
            </div>
        )
    }

    return (
        <Map
            defaultCenter={center}
            defaultZoom={15}
            mapId="medibook-map"
            className="w-full h-full"
        >
            <AdvancedMarker position={center} />
        </Map>
    )
}

export function GoogleMap({ center, apiKey }: GoogleMapProps) {
    const [error, setError] = useState<string | null>(null);

    const handleApiLoad = () => {
        // This is a workaround to check for authentication errors after the API has loaded.
        // The library doesn't expose auth errors directly, so we check a global object.
        if ((window as any).google?.maps?.AuthenticationService) {
           // This is an internal object, and this check is not foolproof, but it's
           // a common indicator of an auth issue post-load.
           // A more robust solution involves a full backend proxy, which is out of scope here.
           const originalConsoleError = console.error;
           console.error = (...args) => {
               const msg = args[0];
               if (typeof msg === 'string' && msg.includes('BillingNotEnabledMapError')) {
                   setError('Google Maps has a billing error. Please ensure billing is enabled for the project in the Google Cloud Console.');
               }
               originalConsoleError(...args);
           };
        }
    };

    if(!apiKey) {
        return (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center p-4">
                    <p className="font-semibold text-lg mb-2">Map Unavailable</p>
                    <p className="text-muted-foreground">The Google Maps API key is missing. Please provide a valid key in your environment configuration to enable maps.</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
             <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center p-4">
                    <p className="font-semibold text-lg mb-2">Map Error</p>
                    <p className="text-muted-foreground">{error}</p>
                    <p className="text-xs text-muted-foreground mt-2">This is a configuration issue and not a bug in the application code.</p>
                </div>
            </div>
        )
    }

    return (
        <APIProvider apiKey={apiKey} onLoad={handleApiLoad}>
           <MapComponent center={center} />
        </APIProvider>
    );
}
