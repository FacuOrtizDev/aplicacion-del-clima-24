import { useState } from "react"

export const WheaterApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    //?q={city name}&appid={API key}
    const API_KEY = '368173e349a3fbd8d6fddd7efac3c53d'
    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ciudad.length > 0) fethClima()
    }
    const fethClima = async () => {
        try {
          
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}&lang=es`)
            const data = await response.json()
            setDataClima(data)

        } catch (error) {
            console.error('Ocurrió el siguiente problema: ', error);
                        
        }
    }

return (
    <div className='container'>

        <h1>Aplicación del Clima</h1>

        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                value={ciudad}
                onChange={handleCambioCiudad}
            />
            <button type="submit">Buscar</button>

        </form>
        {
            dataClima && (
                <div>
                    <h2>{dataClima.name}</h2>
                    <p>Temperatura: {parseInt(dataClima?.main.temp - difKelvin)}°C</p>
                    <p>Condición meteorológica: {dataClima.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />    
                </div>
            )
        }

    </div>
)
}
