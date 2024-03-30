import React from "react";

// ALL DONE!

function Routes(props){
    const {projection, routes, selectedAirlineID} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    
    if (selectedAirlineID){
        // console.log('hi');
        return <g>
            {
                routes.filter(d => d.AirlineID == selectedAirlineID).map(
                    route => {
                        // console.log(route.SourceLongitude);
                        const [x1, y1] = projection([route.SourceLongitude, route.SourceLatitude]);
                        const [x2, y2] = projection([route.DestLongitude, route.DestLatitude]);
                        {/* console.log(x1, y1, x2, y2); */}
                        return <line
                            x1={`${x1}`}
                            x2={`${x2}`}
                            y1={`${y1}`}
                            y2={`${y2}`}
                            stroke={'#992a5b'}
                        />
            }
        )
            }
        </g>
    }
    else{
        return <g></g>
    }
}

export { Routes }