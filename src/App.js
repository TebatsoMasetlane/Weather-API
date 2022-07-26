import React,{useState} from 'react'
import './App.css';

export default function App() {


  const apiKey='561e8337c51e59ec1ee8cd890451722a'
  const [weatherData,setWeatherData]=useState([{}])
  const [city,setCity]=useState('')
  

   const getWeather =(event)=>{
      if(event.key === 'Enter'){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
           response => response.json()
        ).then(
          data =>{
            setWeatherData(data)
            setCity('')
          }
        )
      }
   }
   
    return (
      <body>
      <div className='card'>
        <div className='search'>
         <input  type="text"
         class="search-bar"
         placeholder='Enter city..'
         onChange={e=>setCity(e.target.value)}
         value={city}
         onKeyPress={getWeather}
         />
        </div>
  
           {typeof weatherData.main === 'undefined' ?(
               <div>
                <p className='word'> Welcome To Weather App</p>
                         <p>Please Enter a City to get the Weather</p>
               </div>
           ):(
            <div>
              <h1>{weatherData.name},{weatherData.sys.country}</h1>
      
              <p className='temp'>Temperature: {Math.round(weatherData.main.temp)}<sup>0</sup>c</p>
              <p className='huma'>Weather: {weatherData.weather[0].main}</p>
              <p className='h'>Humidity: {weatherData.main.humidity} %</p>
              <p className='h'>Wind Speed: {weatherData.wind.speed} Km/h</p>
            
            </div>
           )}
  
      </div>
      </body>
    );
  }
  
 