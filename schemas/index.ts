export type ChartDataPoint = {
  date: string; // O 'date' do Python vira uma string no JSON
  price: number;
};

export type AssetData = {
  ticker: string;
  name: string;
  currency: string;
  logo_url?: string | null;
  current_price: number;
  day_change_percentage: number;
  six_month_chart?: ChartDataPoint[];
};
