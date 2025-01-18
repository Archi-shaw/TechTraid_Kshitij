import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Data for the line chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Count',
        data: [2, 4, 6, 8, 2, 5],
        borderColor: '#6a5acd',
        backgroundColor: 'rgba(106, 90, 205, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Count: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  const barData = {
    labels: ['Steel', 'Cement', 'Services', 'Oil'],
    datasets: [
      {
        label: 'Value',
        data: [30, 15, 20, 10],
        backgroundColor: 'rgba(60, 179, 113, 0.5)',
        borderColor: '#3cb371',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#BEE4F3', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#BEE4F3', border: '1px solid #ccc' }}>Overview</button>
        <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#BEE4F3', border: '1px solid #ccc' }}>RFQ</button>
        <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#BEE4F3', border: '1px solid #ccc' }}>Vendor performance</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', backgroundColor: '#BEE4F3', borderRadius: '10px' }}>
          <h3>Monthly RFQ trend</h3>
          <Line data={lineData} options={lineOptions} />
        </div>

        <div style={{ padding: '20px', backgroundColor: '#BEE4F3', borderRadius: '10px' }}>
          <h3>RFQ by category</h3>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
}
