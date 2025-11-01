import { ActionsBar } from '@/components/ActionsBar';
import { MainStocksGrid } from '@/components/MainStocksGrid';
import { StocksCard } from '@/components/StocksCard';

export default function Home() {
  return (
    <>
      <ActionsBar />
      <MainStocksGrid>
        <StocksCard />
        <StocksCard />
        <StocksCard />
      </MainStocksGrid>
    </>
  );
}
