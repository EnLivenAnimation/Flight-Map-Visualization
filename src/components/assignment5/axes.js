import React from "react";

// ALL DONE!

export { XAxis, YAxis };
//TODO: complete the YAxis
// DONE --- 1.Draw the y-axis, using <line>;
// DONE --- 2.Draw the ticks, using yScale.domain() to get the ticks (i.e., names of airlines);
// DONE --- For each tick line, we set x1={-5}, x2={0}, y1 and y2 are the half of yScale.bandwidth()
// DONE --- For the tick text, we set style={{textAnchor: 'start', fontSize:'10px'}}, x={-offsetX+10},y={yScale.bandwidth()/2}

function YAxis (props) {
    const { yScale, height, offsetX } = props;
    // console.log(yScale.bandwidth());
    // return <g transform={`translate(${offsetX}, 0)`}>
    return <g>

        {/* the y-axis consists of the vertical line ... */}
        <line y1={0} y2={height} x1={0} x2={0} stroke={'black'} />
                
                {/* ... and horizontal ticks ... */}
                {   
                    yScale.domain().map( d => {
                        {/* console.log(d[0]); */}
                        return <g key={d[0]} transform={`translate(0, ${yScale(d)})`}>
                            <line 
                            x1={-5} 
                            x2={0}
                            y1={yScale.bandwidth()*0.5}
                            y2={yScale.bandwidth()*0.5}
                            stroke={'black'} />

                            {/* ... and the ticks have labels */}
                            <text style={{ 
                                textAnchor:'start', fontSize:'10px'}}
                                x={-offsetX+10}
                                y={yScale.bandwidth()*0.5}
                                >
                                {d[0]}
                            </text>
                        </g>
                    })
                }
    </g>
}

// given in assignment
function XAxis(props) {
    const { xScale, width, height} = props;

    return <g transform={`translate(${0}, ${height})`}>
        {<line x2={width} stroke='black'/>}
        {xScale.ticks(5).map(tickValue => 
            <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${0})`}>
                <line y2={10} stroke='black' />
                <text style={{ textAnchor:'end', fontSize:'10px' }} x={5} y={20}>
                    {tickValue}
                </text>
            </g>
        )}
    </g>
    
}