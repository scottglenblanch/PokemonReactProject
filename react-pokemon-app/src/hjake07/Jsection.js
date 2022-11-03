import React, {useEffect, useState} from 'react';

import useFetchData from '../useFetchData';


export default function Jcode(){ //Remember to rename your section here
    
   
    const data = useFetchData();


    return(
        <>
            <div>J code here</div>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}