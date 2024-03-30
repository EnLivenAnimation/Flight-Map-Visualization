import React from "react";

function Bars(props) {
    const {xScale, yScale, bar_lengths} = props;

    if(bar_lengths){
        return <g>
                {
                    bar_lengths.map(
                        d => {
                            console.log(d[1][0].AirlineName);
                            {/* console.log(xScale(d[1][0].Count)) */}
                            return <rect 
                            key={d} 
                            x1={'0'} 
                            width={'100'} 
                            y1={'0'} 
                            height={'100'} 
                            stroke={'black'} 
                            fill={'#2a5599'} />
                    })
                }
                </g>
    } else {
        return <g></g>
    }
}

export {Bars}