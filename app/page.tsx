import { ActionsBar } from '@/components/ActionsBar';
import { MainStocksGrid } from '@/components/MainStocksGrid';
import { StocksCard } from '@/components/StocksCard';
const stock_name = ['Petrobras', 'Google', 'Amazon'];
const ticker = ['PETR4.SA', 'GOOG', 'AMZO34'];
const current_price = [69.41, 324.31, 65.41];
const day_change = [1.82, 5.97, 11.39];

export default function Home() {
  return (
    <>
      <ActionsBar />
      <MainStocksGrid>
        <StocksCard
          stocksName={stock_name[0]}
          stocksTicker={ticker[0]}
          currentPrice={current_price[0]}
          dayChange={day_change[0]}
        />
        <StocksCard
          stocksName={stock_name[1]}
          stocksTicker={ticker[1]}
          currentPrice={current_price[1]}
          dayChange={day_change[1]}
        />
        <StocksCard
          stocksName={stock_name[2]}
          stocksTicker={ticker[2]}
          currentPrice={current_price[2]}
          dayChange={day_change[2]}
        />
      </MainStocksGrid>
    </>
  );
}
