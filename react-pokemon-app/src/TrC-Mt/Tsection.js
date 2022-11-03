import React, {useEffect, useState} from 'react';

import useFetchData from '../useFetchData';


export default function Tcode(){ //Remember to rename your section here
    
   
    const data = useFetchData();


    return(
        <>
            <div>T code here</div>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}