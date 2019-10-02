import React from 'react';
import axios from 'axios';

import { Charts } from './components/charts/charts.component';
import { Navbar } from './components/navbar/navbar.component';
import { CoinData } from './models/CoinData';

const App = () => {
  const [coinData, setCoinData] = React.useState<CoinData[]>([]);

  React.useEffect(() => {
    axios
      .get<CoinData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

export { App };
