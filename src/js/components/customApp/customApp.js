const IMG_URL = (new URL('images/magnifying-glass.png', import.meta.url)).href
const IMG_URL2 = (new URL('images/position.png', import.meta.url)).href
const IMG_ERROR = (new URL('images/error.png', import.meta.url)).href

const IMG_SNOW = (new URL('images/snowing.png', import.meta.url)).href
const IMG_CLOUDS = (new URL('images/cloud.png', import.meta.url)).href
const IMG_MIST = (new URL('images/rain-drops.png', import.meta.url)).href
const IMG_HAZE = (new URL('images/cloudy-day.png', import.meta.url)).href
const IMG_CLEAR = (new URL('images/sun.png', import.meta.url)).href
const IMG_RAIN = (new URL('images/raining.png', import.meta.url)).href
const IMG_SUNNY = (new URL('images/sun.png', import.meta.url)).href
const IMG_WINDICON = (new URL('images/wind.png', import.meta.url)).href
const IMG_HUMIDITYICON = (new URL('images/droplet.png', import.meta.url)).href


const template = document.createElement('template')
template.innerHTML = `
  <style>

#Window::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
}

#Window {
        position: relative; 
        display: flex;
    flex-direction: column;
    /* border: 1px solid #ddd; */
    
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* max-width: 400px;
    max-height: 600px; */
    overflow: hidden;
    width: 390px;
    height: 600px;
    /* transition: width 0.5s ease, height 0.5s ease; */
    border: 1px solid rgba(255, 255, 255, 0.5);
    /* background: radial-gradient(circle, rgba(201, 77, 212, 0.7), rgba(75, 19, 79, 0.7)); */

    

    margin: 20px;
    /* background-color: #f9f9f9; */
    /* background: linear-gradient(to right, #b0bbe7 0%, #1f2e5c 100%); */
    /* background: radial-gradient(circle, #b0bbe7, #1f2e5c); */
    /* background: radial-gradient(circle, #c94dd4, #4b134f); */
    /* background: linear-gradient(to right, #c94dd4 0%, #4b134f 100%); */
    background: radial-gradient(circle, rgba(201, 77, 212, 0.7), rgba(75, 19, 79, 0.7));

    
    
    text-align: center;
    align-items: center; 
    max-width: none;
    max-height: none;
    resize: both;
    
}

/* #Window.expanded {
    width: 390px;  
    height: 600px; 
} */

#dragHandle {
    margin-bottom: 5px;
    /* background-color: orange; */
    color: transparent;
    width: 100%;
    height: 30px;
    align-items: center; 
    display: flex; 
    justify-content: center;
    /* background: radial-gradient(circle, rgba(201, 77, 212, 0.7), rgba(75, 19, 79, 0.7)); */
    
  }

  #exitButton {
      position: absolute;
      right: 1px;
      /* margin-top: 1px;
      margin-bottom: 10px; */
      cursor: pointer;
      border: none;
      background: none;
      font-size: 30px;
      color: white;
    }

    #searchInputContainer {
        position: relative; 
    display: flex;
    align-items: center; 
    

    }

    #searchBox {
        flex-grow: 0;
        border: none;
    padding: 0px;
    /* background: linear-gradient(to right, #5a5b5b 0%, #2a2b2b 100%); */
    /* color: #23b82a; */
    color: white;
    font-weight: bold;
    resize: none;
    height: 35px;
    width: 300px;
    border-radius: 8px;
    padding-left: 40px;
    background: transparent;
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
    /* border: 1px solid #DDD; */
    /* border: 1px solid rgba(255, 255, 255, 0.5); */
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);

    
    }

    #searchButton {
    position: absolute; 
    right: 5px; 
    height: 30px; 
    width: 30px;
    border: none;
    
    color: white; 
    
    cursor: pointer;
    border: none;
    
    cursor: pointer;
   
    
    background: url("${IMG_URL}") no-repeat center/50%;
    background-size: 60%;
}

/* #searchButton img {
    width: 100%;
    height: auto;
} */

    #searchBox:focus {
    outline: none;
}

#positionButton {
    position: absolute;
    left: 5px; 
    width: 30px; 
    height: 30px; 
    background: url("${IMG_URL2}") no-repeat center/50%;
    background-size: 60%;
    border: none; 
    cursor: pointer; 
    
    
}

/* #weatherImageContainer {
    height: 50px;
    width: 50px;
} */

#weatherImage {
    height: 200px;
    width: 200px;
    visibility: hidden;
}

#windSpeedContainer, #humidityContainer {
    display: flex;
    align-items: center;
    font-weight: bold;
    /* color: #58D8F8; */
    color: white;
}

#windSpeedContainer {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 25px;
    text-align: left;
    margin-bottom: 20px;
    visibility: hidden;
}

#humidityContainer {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 25px;
    text-align: left;
    margin-bottom: 20px;
    visibility: hidden;
}

#windIcon{
    width: 40px; 
    height: 40px; 
    margin-right: 5px; 
    
}

#humidityIcon {
    width: 40px; 
    height: 40px; 
    margin-right: 5px; 
    
}

#temperature {
    font-size: 40px;
    font-weight: bold;
    color: white;
}

#weatherState {
  color: white;
  font-size: 20px;
}

#cityNameDisplay {
    color: white;
    margin-top: 5px; 
    font-size: 20px; 
}

/* .forecast-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}

.forecast-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
    text-align: center;
    width: 18%; 
    height: 100px;
}

.forecast-icon {
    width: 50px;
    height: 50px;
    margin: 5px 0;
}

.forecast-date, .forecast-temp, .forecast-desc {
    margin: 5px 0;
}

#forecastContainer {
  display: flex;
    justify-content: space-around; 
    align-items: center;
    flex-wrap: nowrap;
} */

#hourlyContainer {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    /* padding: 10px; */
    /* background-color: blue; */
    width: 340px;
    margin-top: 10px;
    justify-content: center;
    color: white;
    font-weight: bold;
}

.weatherSlot {
    flex: none;
    margin-right: 5px;
    /* padding: 5px; */
    /* border: 1px solid #ccc; */
    /* background-color: blue; */
    border-radius: 5px;
    width: 50px;
    height: 120px;
    font-size: 15px;
}

#hourlyContainer::-webkit-scrollbar {
    display: none;
}

/* Make the scrollbar visible when hovering over the container */
#hourlyContainer:hover::-webkit-scrollbar {
    display: block;
}

/* Style the scrollbar track */
#hourlyContainer::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 10px;
}

/* Style the scrollbar handle */
#hourlyContainer::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
}

#hourlyContainer::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Style the scrollbar itself */
#hourlyContainer::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

#welcomeContainer {
  color: white;
  text-align: left;
}

#welcomeText {
  margin-top: 10px;
}

#disclaimerText {
  text-align: left;
  color: white;
}

.modal {
    display: none;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
    /* background-color: #fefefe; */
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    background: radial-gradient(circle, rgba(201, 77, 212, 0.7), rgba(75, 19, 79, 0.7));
}

.close {
  position: absolute;
  top: 1px;
    right: 7px;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}


/* #welcomeContainer {

} */




</style>

<div id="Window">
  <div id="dragHandle">
  <button id="exitButton">&times;</button>
  </div>
  
   <div id="searchInputContainer">
    <button id="positionButton"></button>
    <input type="text" id="searchBox" placeholder="Search City..." />
   <button id="searchButton"></button>
   </div>

   <!-- <div id="welcomeContainer">
        <div id="welcomeText">What's the weather like?</div>
        <h2>Enter city name or</h2>
        <h2>Press the location button</h2>
       -->

       <!-- <button id="disclaimerButton">Disclaimer</button> -->
      <div id="disclaimerModal" class="modal">
      <div class="modal-content">
      <button id="disclaimerAcknowledgeButton">Allow</button>
        <span class="close">&times;</span>
        <div id="disclaimerText">Loading disclaimer...</div>
      </div>
    </div> 


   

   <div id="cityNameDisplay"></div>
   
   <div id="weatherImageContainer">
    <img id="weatherImage" src="" alt="Weather Image">
</div>


<div id="weatherPageContainer">

   <div id="weatherInfo">
    <div id="temperature"></div>
    <div id="weatherState"></div>

    <div id="hourlyContainer"></div>

    


    <div id="windSpeedContainer">
        <img id="windIcon" src="${IMG_WINDICON}" alt="Wind Icon">
        <div>
            <div id="windSpeedValue"></div>
            <div>Windspeed</div>
    </div>
    </div>

    <div id="humidityContainer">
        <img id="humidityIcon" src="${IMG_HUMIDITYICON}" alt="Humidity Icon">
        <div>
        <div id="humidityValue"></div>
            <div>Humidity</div>
            </div>
    </div>
</div>
    <div id="windSpeed"></div>
    <div id="humidity"></div>
</div>

</div>

   
  </div>
  



`

customElements.define('custom-app',

  /**
   *
   */
  class extends HTMLElement {

    weatherStateImages = {
      snow: IMG_SNOW ,
      clouds: IMG_CLOUDS,
      mist: IMG_MIST,
      haze: IMG_HAZE,
      clear: IMG_CLEAR,
      rain: IMG_RAIN,
      sunny: IMG_SUNNY,
      drizzle: IMG_MIST,
      fog: IMG_CLOUDS
    }
    /**
     *
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.searchButton = this.shadowRoot.querySelector('#searchButton')
      this.searchBox = this.shadowRoot.querySelector('#searchBox')
      this.positionButton = this.shadowRoot.querySelector('#positionButton')
      this.disclaimerButton = this.shadowRoot.querySelector('#disclaimerButton')
      this.disclaimerAcknowledgeButton = this.shadowRoot.querySelector('#disclaimerAcknowledgeButton')
    }

    /**
     *
     * @param event
     */
    handleDragStart (event) {
      this.isDragging = true
      this.offsetX = event.clientX - this.getBoundingClientRect().left
      this.offsetY = event.clientY - this.getBoundingClientRect().top

      // Set width and height explicitly
      this.style.width = `${this.offsetWidth}px`
      this.style.height = `${this.offsetHeight}px`
      event.preventDefault()
    }

    /**
     *
     * @param event
     */
    handleDragMove (event) {
      if (!this.isDragging) return
      this.style.position = 'absolute'
      this.style.left = `${event.clientX - this.offsetX}px`
      this.style.top = `${event.clientY - this.offsetY}px`
    }

    /**
     *
     */
    handleDragEnd () {
      this.isDragging = false
    }

    /**
     *
     */
    closeMessageApp () {
      this.remove() 
    }

    hideWelcomeContainer() {
      const welcomeContainer = this.shadowRoot.getElementById('welcomeContainer')
      if (welcomeContainer) {
          welcomeContainer.style.display = 'none'
      }
  }

    /**
     *
     */
    connectedCallback () {

      if (localStorage.getItem('disclaimerAcknowledged') !== 'true') {
        this.showDisclaimerModal(),
        this.loadDisclaimer()
      } else {
        
        this.requestLocationAccess()
      }
      /* this.showDisclaimerModal()
      this.loadDisclaimer() */

      this.shadowRoot.getElementById('exitButton').addEventListener('click', () => this.closeMessageApp())
      window.addEventListener('mousemove', (event) => this.handleDragMove(event))
      window.addEventListener('mouseup', () => this.handleDragEnd())

      const dragHandle = this.shadowRoot.getElementById('dragHandle')
      dragHandle.addEventListener('mousedown', (event) => this.handleDragStart(event))

      this.searchButton.addEventListener('click', () =>  {
        this.fetchWeather()
        
      })

      this.positionButton.addEventListener('click', () => {
        this.getLocation()
        
      })

      this.searchBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.fetchWeather()
          
        }
      })

      /* this.disclaimerButton.addEventListener('click', () => {
        this.showDisclaimerModal()
        this.loadDisclaimer()
    }) */
    
    

    this.disclaimerAcknowledgeButton.addEventListener('click', () => this.disclaimerAcknowledged())
      
      /* const closeModal = this.shadowRoot.querySelector('.close')
    closeModal.addEventListener('click', () => this.hideDisclaimerModal()) */

    /* this.getLocation() */
      
    }

    disclaimerAcknowledged() {
      localStorage.setItem('disclaimerAcknowledged', 'true')
      this.hideDisclaimerModal()
      this.requestLocationAccess()
    }

    showDisclaimerModal() {
      const modal = this.shadowRoot.getElementById('disclaimerModal')
      if (modal) {
          modal.style.display = 'block'
      }
  }
    
  hideDisclaimerModal() {
    const modal = this.shadowRoot.getElementById('disclaimerModal')
    if (modal) {
        modal.style.display = 'none'
    }
}

requestLocationAccess() {
  if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              // Location access granted, fetch weather
              this.fetchWeatherByCoordinates(position.coords.latitude, position.coords.longitude)
          },
          (error) => {
              console.error("Error Code = " + error.code + " - " + error.message)
          }
      )
  } else {
      console.error("Geolocation is not supported by this browser.")
  }
}

    /**
     *
     */
    async fetchWeather () {
      const weatherPageContainer = this.shadowRoot.getElementById('weatherPageContainer')
      weatherPageContainer.style.display = 'block'
      
      this.shadowRoot.getElementById('weatherImage').style.visibility = 'visible'
      console.log('fetching weather')

      const APIkey = '6dc4f57a3bc1d883f18bc90fda0a6973'
      const searchBox = this.shadowRoot.getElementById('searchBox')
      const city = searchBox.value
      const cityNameDisplay = this.shadowRoot.getElementById('cityNameDisplay')
      const weatherImage = this.shadowRoot.getElementById('weatherImage')
     
      

      if (!city) {
        console.error('No city provided.')
        weatherImage.src = `${IMG_ERROR}`
        cityNameDisplay.textContent = 'No city provided'
        weatherPageContainer.style.display = 'none'

        return
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${APIkey}`

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()

        const roundedTemp = Math.round(data.main.temp)

        this.shadowRoot.getElementById('temperature').textContent = `${roundedTemp}°C`
        this.shadowRoot.getElementById('windSpeedValue').textContent = `${data.wind.speed} m/s`
        this.shadowRoot.getElementById('humidityValue').textContent = `${data.main.humidity}%`
        this.shadowRoot.getElementById('weatherState').textContent = `${data.weather[0].main}`

        this.shadowRoot.getElementById('windSpeedContainer').style.visibility = 'visible'
        this.shadowRoot.getElementById('humidityContainer').style.visibility = 'visible'
        /* (${data.weather[0].description}) */
        searchBox.value = ''

        cityNameDisplay.textContent = `${city}`
        cityNameDisplay.textContent = this.capitalizeFirstLetter(city)
        this.shadowRoot.getElementById('Window').classList.add('expanded')
        await this.fetchWeatherForecast(city)


        

        const weatherStateImages = {
          snow: IMG_SNOW ,
          clouds: IMG_CLOUDS,
          mist: IMG_MIST,
          haze: IMG_HAZE,
          clear: IMG_CLEAR,
          rain: IMG_RAIN,
          sunny: IMG_SUNNY,
          drizzle: IMG_MIST,
          fog: IMG_CLOUDS
        }

        /* const weatherStateImages = {
          snow: 'js/components/customApp/images/snowing.png',
          clouds: 'js/components/customApp/images/cloud.png',
          mist: 'js/components/customApp/images/rain-drops.png',
          haze: 'js/components/customApp/images/cloudy-day.png',
          clear: 'js/components/customApp/images/sun.png',
          rain: 'js/components/customApp/images/raining.png',
          sunny: 'js/components/customApp/images/sun.png',
          drizzle: 'js/components/customApp/images/rain-drops.png',
          fog: 'js/components/customApp/images/cloud.png'
        } */

        const weatherState = data.weather[0].main.toLowerCase()
        const weatherImageSrc = weatherStateImages[weatherState]
        if (weatherImageSrc) {
          this.shadowRoot.getElementById('weatherImage').src = weatherImageSrc
          this.shadowRoot.getElementById('weatherImage').alt = `Weather Image - ${weatherState}`
        } else {
          console.error('No image found for this weather state:', weatherState)
        }
        

        console.log(data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
        weatherImage.src = `${IMG_ERROR}`
        cityNameDisplay.textContent = 'No city provided'
        weatherPageContainer.style.display = 'none'
      }
    }

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }


    async fetchWeatherForecast(city) {
      console.log('fetching weather forecast')
  
      const APIkey = '6dc4f57a3bc1d883f18bc90fda0a6973'
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${APIkey}`
  
      try {
          const response = await fetch(url)
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
          }
          const forecastData = await response.json()
  
          
          this.displayHourlyForecast(forecastData)
      } catch (error) {
          console.error('Error fetching weather forecast:', error)
      }
  }

  displayHourlyForecast(forecastData) {
    const hourlyContainer = this.shadowRoot.getElementById('hourlyContainer')
    hourlyContainer.innerHTML = ''

    const weatherStateImages = {
      snow: IMG_SNOW ,
      clouds: IMG_CLOUDS,
      mist: IMG_MIST,
      haze: IMG_HAZE,
      clear: IMG_CLEAR,
      rain: IMG_RAIN,
      sunny: IMG_SUNNY,
      drizzle: IMG_MIST,
      fog: IMG_CLOUDS
    }

    const currentTime = new Date()
    const next24Hours = forecastData.list.filter(item => {
        const itemTime = new Date(item.dt * 1000)
        return itemTime > currentTime && itemTime < new Date(currentTime.getTime() + 24 * 60 * 60 * 1000)
    })

    next24Hours.forEach(item => {

      const itemTime = new Date(item.dt * 1000)
      const hours = itemTime.getHours() 
      const formattedHour = hours < 10 ? `0${hours}` : `${hours}`

      const roundedTemp = Math.round(item.main.temp)

      const weatherState = item.weather[0].main.toLowerCase()
        const weatherIconSrc = weatherStateImages[weatherState] || 'default-icon-path'

        const weatherDiv = document.createElement('div')
        weatherDiv.className = 'weatherSlot'
        weatherDiv.innerHTML = `
            <p>${formattedHour}</p>
            <img src="${weatherIconSrc}" alt="${item.weather[0].main}"  style="width: 30px; height: 30px;">
            <p>${roundedTemp}°C</p>`
        hourlyContainer.appendChild(weatherDiv)
    })
}

async getLocation() {
  const weatherPageContainer = this.shadowRoot.getElementById('weatherPageContainer')
      weatherPageContainer.style.display = 'block'
  if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
          console.log("Latitude: " + position.coords.latitude)
          console.log("Longitude: " + position.coords.longitude)

          this.fetchWeatherByCoordinates(position.coords.latitude, position.coords.longitude)
      }, (error) => {
          console.error("Error Code = " + error.code + " - " + error.message)
      })
  } else {
      console.error("Geolocation is not supported by this browser.")
  }
}

async fetchWeatherByCoordinates(lat, lon) {
  this.shadowRoot.getElementById('weatherImage').style.visibility = 'visible'
  const APIkey = '6dc4f57a3bc1d883f18bc90fda0a6973'
  /* const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}` */
  /* const city = 'Stockholm' */
      /* const cityNameDisplay = this.shadowRoot.getElementById('cityNameDisplay') */

  try {

    const geoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIkey}`
    const geoResponse = await fetch(geoUrl)
    const geoData = await geoResponse.json()

    let city = 'Unknown Location'
    if (geoData && geoData.length > 0) {
        city = geoData[0].name
    }

    const cityNameDisplay = this.shadowRoot.getElementById('cityNameDisplay')
    cityNameDisplay.textContent = this.capitalizeFirstLetter(city)


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }




    const data = await response.json()

    const roundedTemp = Math.round(data.main.temp)

    this.shadowRoot.getElementById('temperature').textContent = `${roundedTemp}°C`
    this.shadowRoot.getElementById('windSpeedValue').textContent = `${data.wind.speed} m/s`
    this.shadowRoot.getElementById('humidityValue').textContent = `${data.main.humidity}%`
    this.shadowRoot.getElementById('weatherState').textContent = `${data.weather[0].main}`

    this.shadowRoot.getElementById('windSpeedContainer').style.visibility = 'visible'
    this.shadowRoot.getElementById('humidityContainer').style.visibility = 'visible'
    /* (${data.weather[0].description}) */
    /* searchBox.value = '' */

    cityNameDisplay.textContent = `${city}`
    /* cityNameDisplay.textContent = this.capitalizeFirstLetter(city) */
    this.shadowRoot.getElementById('Window').classList.add('expanded')
    await this.fetchWeatherForecast(city)

    const weatherStateImages = {
      snow: IMG_SNOW ,
      clouds: IMG_CLOUDS,
      mist: IMG_MIST,
      haze: IMG_HAZE,
      clear: IMG_CLEAR,
      rain: IMG_RAIN,
      sunny: IMG_SUNNY,
      drizzle: IMG_MIST,
      fog: IMG_CLOUDS
    }

    const weatherState = data.weather[0].main.toLowerCase()
    const weatherImageSrc = weatherStateImages[weatherState]
    if (weatherImageSrc) {
      this.shadowRoot.getElementById('weatherImage').src = weatherImageSrc
      this.shadowRoot.getElementById('weatherImage').alt = `Weather Image - ${weatherState}`
    } else {
      console.error('No image found for this weather state:', weatherState)
    }
    

    console.log(data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

async loadDisclaimer() {
  try {
      const response = await fetch('js/components/customApp/disclaimer.txt')
      let text = await response.text()
      text = text.replace(/\n/g, '<br>')
      const disclaimerTextDiv = this.shadowRoot.getElementById('disclaimerText')
      disclaimerTextDiv.innerHTML = text
  } catch (error) {
      console.error('Failed to load disclaimer:', error)
  }
}

  })
