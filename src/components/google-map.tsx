
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

    const handleApiLoad = (event: any) => {
        // The Google Maps script has loaded, but we need to check for auth errors specifically.
        // The @vis.gl/react-google-maps library doesn't expose the auth error directly in a hook,
        // so we can listen to the global window object for the specific error.
        const originalError = console.error;
        console.error = (...args) => {
            const errorMessage = args[0];
            if (typeof errorMessage === 'string' && errorMessage.includes('BillingNotEnabledMapError')) {
                setError('Google Maps has a billing error. Please ensure billing is enabled for the project.');
            }
            originalError.apply(console, args);
        };
    };

    useEffect(() => {
        window.addEventListener('google-maps-api-load', handleApiLoad);
        return () => {
            window.removeEventListener('google-maps-api-load', handleApiLoad);
        }
    }, []);
    

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
        <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API loaded.')} >
           <MapComponent center={center} />
        </APIProvider>
    );
}

