import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  //state
  const [cryptoCurrency, setcryptoCurrency] = useState([]);

  useEffect(() => {
    fetchData()

  }, [])
  
  const fetchData = async () => {
    //fetch data
    const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    //response 
    const response = await data.data;
    //set crypto data
    setcryptoCurrency(response)

  }
  return (
    <div className="App">
      <div className="container">
        <div className="tite">
          <h1 className="text-4xl text-center py-4 font-medium">Cryptocurrency App</h1>
        </div>

        <div className="search-bar py-8 flex items-center justify-center gap-2">
          <div className="search-icon">
            <i className="fas fa-search cursor-pointer fa-lg"></i>

          </div>

          <button className="search-button" type="button">
          <input type="text"  className="py-2 px-8 bg-slate-500 rounded border-none outline-none md:px-12 md:text-center md: py-3 rounded-2xl" placeholder="Search"/>

          </button>


        </div>
      </div>
     
    </div>
  );
}

export default App;
