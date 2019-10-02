export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  roi: Roi | null;
  last_updated: string;
  sparkline_in_7d: SparklineIn7D;
}

export interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

export interface SparklineIn7D {
  price: number[];
}
