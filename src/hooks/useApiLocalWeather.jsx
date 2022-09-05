import { useEffect, useState } from 'react'
import axios from 'axios'

const useApiLocalWeather = (access) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(success)

        function success(pos) {
        const crd = pos.coords

            console.log('Your current position is:')
            console.log(`Latitude : ${crd.latitude}`)
            console.log(`Longitude: ${crd.longitude}`)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=4a1d978fdd30b229601a98f78ae2103e
            `)
                .then(res => setWeather(access(res)))
        }

    }, [])

    return {weather}

    };

    export default useApiLocalWeather;