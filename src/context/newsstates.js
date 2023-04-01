import React, { useState } from "react";

import newscontext from './newscontext'

const NewsStates= (props)=>
{
    const [Heading , SetHeading ] = useState("Top Headlines")
    return (
        <newscontext.Provider value={ {Heading , SetHeading}}>
            {props.children}
        </newscontext.Provider>
    )
}

export default NewsStates;