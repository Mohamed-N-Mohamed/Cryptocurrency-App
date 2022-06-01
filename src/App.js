import axios from "axios";
import { useState, useEffect } from "react";
import UI from "./components/UI";
function App() {
  //state
  const [cryptoCurrency, setcryptoCurrency] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    //fetch data on load
    fetchData()
  }, [])
  
  const fetchData = async () => {
    //fetch data
    const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    //response 
    const response = await data.data;
    console.log(response)
    //set crypto data
    setcryptoCurrency(response)
  }
     //handle on change
     const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }

    //array filter
    const filterArray = cryptoCurrency.filter((item) => {
       return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })



  return (
    <div className="App">
      <div className="container">
        <div className="tite">
          <h1 className="text-4xl text-center py-4 font-medium">Cryptocurrency App</h1>
        </div>

        <div className="search-bar py-8 flex items-center justify-center gap-2">
          <div className="search-icon">
            <i className="fas fa-search cursor-pointer fa-lg" ></i>

          </div>

          <button className="search-button" type="button">
          <input type="text"  className="py-2 px-8 bg-slate-500 rounded border-none outline-none md:px-12 md:text-center md: py-3 rounded-2xl" placeholder="Search" onChange={handleChange}/>

          </button>

        </div>

        <div className="crypto-card flex justify-center items-center gap-8">
          {filterArray.map((crypto) => {
            return(
              <UI key={crypto.id}
              name={crypto.name}
              price={crypto.current_price}
              symbol={crypto.symbol}
              marketcap={crypto.total_volume}
              volume={crypto.market_cap}
              image={crypto.image}
              priceChange={crypto.price_change_percentage_24h}
              
              />
            )
          })}
        </div>
      </div>
     
    </div>
  );
}

export default App;
