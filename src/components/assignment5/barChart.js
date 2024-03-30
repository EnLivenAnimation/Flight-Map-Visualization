import React from "react";
import { max, scaleBand, scaleLinear, groups } from "d3";
import { XAxis, YAxis } from "./axes";

// TASK 1 DONE!
// TASK 3 DONE! (for this file)

function BarChart (props) {
    const {offsetX, offsetY, data, height, width, selectedAirlineID, setSelectedAirlineID} = props;

    // Task 3. TODO
    // DONE --- 1. define an arrow function color; it takes a data item, d, as input. 
    // If d.AirlineID is equal to the selectedAirlineID, it returns "#992a5b"; 
    // otherwise, it returns "#2a5599".
    // DONE --- 2. define a function onMouseOver; it takes a data item, d, as input,
    // and sets the selectedAirlineID be the d.AirlineID
    // DONE --- 3. define a function onMouseOut; it has no argument, and sets the selectedAirlineID be null.
    // DONE --- 4. adding properties, onMouseOver and onMouseOut, to the <rect> tags.
    // Note: the function of the onMouseOver properties should be an arrow function 
    // that wraps the onMouseOver you defined since it takes d as input.

    const getColor = d => d[1][0].AirlineID == selectedAirlineID ? '#992a5b' : '#2a5599';
    // #2a5599 is blue, #992a5b is red

    const onMouseOver = (d) => {
        // console.log('on');
        setSelectedAirlineID(d[1][0].AirlineID);
        // console.log(selectedAirlineID);
    }
    const onMouseOut = () => {
        // console.log('out');
        setSelectedAirlineID(null);
    }
    
    // Task 1: TODO
    // 1. find the maximum of the Count attribute in the data --- DONE
    // 2. define the xScale and yScale --- DONE
    // 3. return the bars; (Remember to use data.map()); --- DONE
    // 4. return <XAxis/> and <YAxis/> --- DONE

    const bar_lengths = groups(data, d => d['AirlineName']);
    const max_count = max(data, d => d.Count);

    const yScale = scaleBand()
    .domain(bar_lengths)
    .range([0, height])
    .padding(0.2);

    const xScale = scaleLinear()
    .domain([0, max_count])
    .range([0, width]);

    // translate the entire graph
    return <g transform={`translate(${offsetX}, ${offsetY})`}> 

    {/* the graph consists of axes ... */}
    <YAxis 
        yScale={yScale} 
        height={height} 
        offsetX={offsetX} />
    <XAxis 
        xScale={xScale} 
        width={width}
        height={height}  />
    
    {/* and bars */}
    {
        bar_lengths.map(
            d => {
                return <rect 
                key={d} 
                x={'0'} 
                width={`${xScale(d[1][0].Count)}`} 
                y={`${yScale(d)}`} 
                height={yScale.bandwidth()} 
                stroke={'black'} 
                fill={`${getColor(d)}`} 
                onMouseOver={() => onMouseOver(d)}
                onMouseOut={onMouseOut}
                />
        })
    }

    </g>
}

export {BarChart}