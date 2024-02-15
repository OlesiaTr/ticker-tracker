import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { selectTicker } from '../../slices/tickers';
import { TickerData } from '../../types';

export interface Props {
  selectedTicker: string;
}

const Chart: FC<Props> = ({ selectedTicker }) => {
  const quotes = useSelector(selectTicker(selectedTicker));
  const latestByTime: { [key: string]: TickerData } = {};

  const formattedData = quotes.map(item => ({
    ...item,
    last_trade_time: new Date(item.last_trade_time).toLocaleString(),
  }));

  const uniqueFormattedData = formattedData.reduce(
    (acc: TickerData[], item) => {
      const existingItem = latestByTime[item.last_trade_time];

      if (existingItem) {
        acc = acc.filter(
          accItem => accItem.last_trade_time !== item.last_trade_time
        );
      }

      acc.push(item);

      latestByTime[item.last_trade_time] = item;

      return acc;
    },
    []
  );

  return (
    <section style={{ paddingTop: '20px' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={400} data={uniqueFormattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="last_trade_time"
            type="category"
            stroke="#0C0B0B"
            strokeWidth={2}
            tick={{
              fontFamily: "'Baloo Bhaijaan 2', sans-serif",
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />
          <YAxis
            yAxisId="left"
            stroke="#0C0B0B"
            strokeWidth={2}
            tick={{
              fontFamily: "'Baloo Bhaijaan 2', sans-serif",
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#0C0B0B"
            strokeWidth={2}
            tick={{
              fontFamily: "'Baloo Bhaijaan 2', sans-serif",
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />

          <Tooltip
            wrapperStyle={{
              fontFamily: "'Baloo Bhaijaan 2', sans-serif",
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />
          <Legend
            verticalAlign="bottom"
            margin={{ bottom: 20 }}
            wrapperStyle={{
              fontFamily: "'Baloo Bhaijaan 2', sans-serif",
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FF868E"
            strokeWidth={2}
            yAxisId="left"
            name="price"
          />
          <Line
            type="monotone"
            dataKey="yield"
            stroke="#0C0B0B"
            strokeWidth={2}
            yAxisId="right"
            name="yield"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;
