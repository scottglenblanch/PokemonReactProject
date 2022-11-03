import React, {useEffect, useState} from 'react';

import useFetchData from '../useFetchData';


export default function Wcode(){ //Remember to rename your section here
    
   
    const data = useFetchData();


    return(
        <>
            <div>W code here</div>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}