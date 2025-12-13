"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

const geoUrl = "/africa-map-data.json";

const highlightedCountries = [
    "Ethiopia",
    "Ghana",
    "Cameroon",
    "Uganda",
    "Botswana",
    "Kenya"
];

export default function AfricaMap() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="h-[600px] w-full bg-transparent"></div>;

    return (
        <div className="w-full h-[600px] relative flex justify-center items-center">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 350,
                    center: [20, 5] // Adjusted center to show more of northern Africa
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup zoom={1} maxZoom={1} center={[0, 0]}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const countryName = geo.properties.name || geo.properties.geounit;
                                const isHighlighted = highlightedCountries.includes(countryName);

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={countryName}
                                        style={{
                                            default: {
                                                fill: isHighlighted ? "#ffffff" : "#2d2d2d", // Slightly lighter than black for visibility
                                                stroke: "#000000",
                                                strokeWidth: 0.5,
                                                outline: "none",
                                                transition: "all 0.3s ease"
                                            },
                                            hover: {
                                                fill: isHighlighted ? "#e6e6e6" : "#444444",
                                                stroke: "#ffffff",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                                cursor: isHighlighted ? "pointer" : "default"
                                            },
                                            pressed: {
                                                fill: isHighlighted ? "#cccccc" : "#333333",
                                                outline: "none"
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <Tooltip
                id="my-tooltip"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#000",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "14px"
                }}
            />
        </div>
    );
}
