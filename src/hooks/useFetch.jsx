import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (latitude, longitude, access) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {
   
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4a1d978fdd30b229601a98f78ae2103e
            `)
                .then(res => setWeather(access(res)))

    }, [])

    return {weather}

    };

    export default useFetch;