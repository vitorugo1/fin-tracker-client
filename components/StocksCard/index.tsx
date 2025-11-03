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
  currency: string;
};

function colourChange(x: number) {
  if (x > 0) {
    return 'text-green-500';
  } else if (x < 0) {
    return 'text-red-500';
  } else {
    return 'text-zinc-400';
  }
}

export function StocksCard({
  stocksName,
  stocksTicker,
  currentPrice,
  dayChange,
  currency,
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
          <p className='text-zinc-50'>
            {currentPrice} {currency}
          </p>
          <p className={colourChange(dayChange)}>{dayChange}</p>
        </div>
      </CardContent>
    </Card>
  );
}
