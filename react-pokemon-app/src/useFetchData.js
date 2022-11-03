import React, {useEffect, useState} from 'react';
import GetData from './APIdata'

export default function useFetchData() {

    const [data, setData] = useState(null)

    useEffect(() => {
        GetData().then(newData => {
            setData(newData)
        })
    }, [])

    return data;
}