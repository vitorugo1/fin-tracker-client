import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

type StocksCardProps = {
  stocksName: string;
  stocksTicker: string;
  currentPrice: number;
  dayChange: number;
};

export function StocksCard({
  stocksName,
  stocksTicker,
  currentPrice,
  dayChange,
}: StocksCardProps) {
  return (
    <Card className='bg-zinc-900 border-zinc-800'>
      <CardHeader>
        <CardTitle className='text-zinc-50'>{stocksName}</CardTitle>
        <CardDescription className='text-zinc-400'>
          {stocksTicker}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex gap-4'>
          <p className='text-zinc-50'>{currentPrice}</p>
          <p className='text-green-500'>{dayChange}</p>
        </div>
      </CardContent>
    </Card>
  );
}
