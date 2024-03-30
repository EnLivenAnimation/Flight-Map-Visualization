import React from "react";
import { geoPath, geoEqualEarth, geoMercator } from "d3-geo";
import { Routes } from './routes'
import { count } from "d3";

// TASK 2 DONE!

function AirportMap(props){
    const {width, height, countries, airports, routes, selectedAirlineID} = props;
    //TODO: 
    // DONE --- 1. Define a projection which is geoMercator; 
    // set .scale(97), and .translate([width/2, height/2+20]); 
    // DONE --- 2. Define a path generator using geoPath();
    // DONE --- 3. Plot the world map; remember to use countries.features.map(); (Note: stroke is "#ccc", and color is "#eee");
    // DONE --- 4. Plot the airports; remember to use airports.map(); (Note: radius is 1; color is "#2a5599"); 

    // DONE --- TODO:
    // DONE --- Define a projection of Mercator.
    let projection = geoMercator().scale(97).translate([width/2, height/2+20]);
    let path = geoPath(projection);
    
    return <g>
        {/* This map needs the outlines of the countries ... */}
        <path className={'sphere'} d={path({type: 'Sphere'})} />
        {
            countries.features.map( feature => {
                return <path key={feature.properties.name+"boundary"}
                className={"boundary"}
                d={path(feature)}
                stroke={'#ccc'}
                fill={'#eee'}
                />
            }
        )}

        {/* ... and the positions of the airports */}
        {/* {console.log(countries)}
        {console.log(airports)} */}
        {airports.map( airport => {
            return <circle key={airport.AirportID}
            className={'airport'}
            r={1}
            fill={'#2a5599'}
            color={'black'}
            cx={projection([airport.Longitude, airport.Latitude])[0]}
            cy={projection([airport.Longitude, airport.Latitude])[1]}
            />
        }
        )}
        
        <Routes projection={projection} routes={routes} selectedAirlineID={selectedAirlineID}/>
    </g>


}

export { AirportMap }