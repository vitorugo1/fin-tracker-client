import { ActionsBar } from '@/components/ActionsBar';
import { MainStocksGrid } from '@/components/MainStocksGrid';
import { StocksCard } from '@/components/StocksCard';
const MOCK_DATA = [
  {
    name: 'Petrobras',
    ticker: 'PETRA.SA',
    current_price: 69.41,
    day_change_percentage: 1.82,
    currency: 'BRL',
  },
  {
    name: 'Google',
    ticker: 'GOOG',
    current_price: 324.31,
    day_change_percentage: 5.87,
    currency: 'USD',
  },
  {
    name: 'Amazon',
    ticker: 'AMZN', // (Corrigi seu ticker do mock)
    current_price: 65.41,
    day_change_percentage: 11.39,
    currency: 'USD',
  },
];

export default function Home() {
  return (
    <>
      <ActionsBar />
      <MainStocksGrid>
        {MOCK_DATA.map(stock => (
          <StocksCard
            key={stock.ticker}
            stocksName={stock.name}
            stocksTicker={stock.ticker}
            currentPrice={stock.current_price}
            dayChange={stock.day_change_percentage}
            currency={stock.currency}
          />
        ))}
      </MainStocksGrid>
    </>
  );
}
