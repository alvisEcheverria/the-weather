import { useEffect, useState } from 'react'
import WeatherLocal from './components/WeatherLocal'
import NewYork from './components/NewYork'
import Tokyo from './components/Tokyo'
import './App.css'
import useApiLocalWeather from './hooks/useApiLocalWeather';

function App() {

  /*  LOADING SCREEN --> const [loading, setLoading] = useState(false)

  useEffect(() => {

      setLoading(true)
        setTimeout(()=>{
          setLoading(false) 
        }, 3000)

  }, [])*/

  const {weather} = useApiLocalWeather(res => res.data)

  const listImg = [
                  {time: 'Thunderstorm', img: "url(../public/img/Weather/Thunderstorm.gif)"},
                    {img: 'Drizzle',  img: "url(../public/img/Weather/Drizzle.gif)"},
                      {img: 'Rain', img: "url(../public/img/Weather/Rain.gif)"},
                        {img: 'Snow', img: "url(../public/img/Weather/Snow.gif)"},
                          {img: 'Clear', img: "url(../public/img/Weather/Clear.gif)"},
                            {time: 'Clouds', img: "url(../public/img/Weather/Clouds.gif)"}
                  ]

    const changeBackground = (arrImg) =>{

        return arrImg.find(item => item.time === weather.weather?.[0].main)

    }

    const myImage = changeBackground(listImg)

          let backgroundStyles =  {
                                  backgroundImage: 'url(./img/Weather/Rain.gif)',
                                    backgroundRepeat: 'no-repeat',
                                      backgroundPosition: 'left',
                                        backgroundSize: 'cover',
                                          boxShadow: '0px 0px 23px 3px #000000',
                                            position: 'relative',
                                              zIndex: '0',
                                                gridColumn: '1/2',
                                                  gridRow: '1/3'
                                  }

  return (

    <div className={"App"}>

      {/* LOADING SCREEN -->
      
      loading ? (
        <div className="loader-container">
          <div className='spinner'></div>
        </div>
      ) : (*/
      <div className='card-container'>
        <div className="main-card" style={backgroundStyles}>
           <WeatherLocal weather={weather}/>
        </div>
        <div className='small-card' >
          <Tokyo/>
        </div>
        <div className='small-card'>
          <NewYork/>
        </div>
      </div>
      /*)*/}
    </div>
  )
}

export default App
