import { useQuery } from "react-query";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistoricalData {
  time_close: string;
  time_open: string;
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  volume: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              background: "transparent",
              toolbar: { show: false },
            },
            grid: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            yaxis: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
