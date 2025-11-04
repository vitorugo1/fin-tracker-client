'use client';
import { ActionsBar } from '@/components/ActionsBar';
import { MainStocksGrid } from '@/components/MainStocksGrid';
import { StocksCard } from '@/components/StocksCard';
import { AssetData } from '@/schemas';
import useSWR from 'swr';

const API_URL = 'http://127.0.0.1:8000/finances';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
  // SWR Hook
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (error) return <div>Failed to load stock data.</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <ActionsBar />
      <MainStocksGrid>
        {data.map((stock: AssetData) => (
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
