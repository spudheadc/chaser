import { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export const GoogleMap: React.FC<MapProps> = ({
    children,
    style,
    ...options
}) => {
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    // [START maps_react_map_component_app_return]
    return (
        <div style={style}>
            <Wrapper apiKey={"AIzaSyBvKTqxTunXp5vrN8T2PK4NwYj4XJ1MWr0"} render={render}>
                <GoogleMapElement
                    style={style}
                >
                </GoogleMapElement>
            </Wrapper>
        </div>
    );
};



interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    children?: React.ReactNode;
}

const GoogleMapElement: React.FC<MapProps> = ({
    children,
    style,
    ...options
}) => {


    // [START maps_react_map_component_add_map_hooks]
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();
    const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>();

    useEffect(() => {
        if (ref.current && !map) {
            const center = { lat: -37.816072, lng: 144.963207 };
            const zoom = 16;
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom
            }));
        }
        if (!infoWindow) {
            setInfoWindow(new window.google.maps.InfoWindow());
        }
    }, [ref, map, infoWindow]);
    // [END maps_react_map_component_add_map_hooks]

    // [START maps_react_map_component_event_hooks]
    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );
        }
        // Try HTML5 geolocation.
        if (map && infoWindow && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true);
                }
            );
        } else if (!navigator.geolocation) {
            // Browser doesn't support Geolocation
            handleLocationError(false);
        }
    }, [map]);
    // [END maps_react_map_component_event_hooks]


    const handleLocationError = (
        browserHasGeolocation: boolean
    ) => {
        if (map && infoWindow) {
            infoWindow.setPosition(map.getCenter()!);
            infoWindow.setContent(
                browserHasGeolocation
                    ? "Error: The Geolocation service failed."
                    : "Error: Your browser doesn't support geolocation."
            );
            infoWindow.open(map);
        }
        console.log(browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.");
    }

    // [START maps_react_map_component_return]
    return (
        <>
            <div ref={ref} style={style} />
        </>
    );
    // [END maps_react_map_component_return]
};
