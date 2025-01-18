"use client"
import { Bar, Radar } from "react-chartjs-2";

export default function ProductComparison() {
  // Data for the product comparison table
  const productData = [
    {
      product: "Acme Corp",
      price: 5000,
      deliveryTime: 7,
      warranty: 2,
      qualityScore: 90,
      technicalScore: 85,
      sustainability: 80,
    },
    {
      product: "Beta Industries",
      price: 5200,
      deliveryTime: 9,
      warranty: 3,
      qualityScore: 88,
      technicalScore: 82,
      sustainability: 78,
    },
    {
      product: "Gamma Supplies",
      price: 4800,
      deliveryTime: 10,
      warranty: 1,
      qualityScore: 84,
      technicalScore: 80,
      sustainability: 75,
    },
    {
      product: "Delta Tech",
      price: 5100,
      deliveryTime: 8,
      warranty: 3,
      qualityScore: 92,
      technicalScore: 88,
      sustainability: 85,
    },
  ];

  // Bar chart data
  const barChartData = {
    labels: productData.map((item) => item.product),
    datasets: [
      {
        label: "Price",
        data: productData.map((item) => item.price),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Delivery Time (Days)",
        data: productData.map((item) => item.deliveryTime),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "Quality Score",
        data: productData.map((item) => item.qualityScore),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Technical Score",
        data: productData.map((item) => item.technicalScore),
        backgroundColor: "rgba(255, 205, 86, 0.6)",
        borderColor: "rgba(255, 205, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Radar chart data
  const radarChartData = {
    labels: ["Price", "Delivery Time", "Warranty", "Quality", "Technical Score", "Sustainability"],
    datasets: productData.map((product, index) => ({
      label: product.product,
      data: [
        product.price / 1000,
        product.deliveryTime,
        product.warranty,
        product.qualityScore / 10,
        product.technicalScore / 10,
        product.sustainability / 10,
      ],
      backgroundColor: `rgba(${50 + index * 50}, ${100 + index * 40}, 200, 0.4)`,
      borderColor: `rgba(${50 + index * 50}, ${100 + index * 40}, 200, 1)`,
      borderWidth: 2,
    })),
  };

  return (
    <div className="bg-blue-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Product Details and Comparison</h1>
        <input
          type="text"
          placeholder="Magic Search"
          className="p-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-64"
        />
      </header>

      {/* Product-wise Comparison Table */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Product-Wise Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-300 text-gray-700">
              <tr>
                <th className="p-3 border">Product</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Delivery Time</th>
                <th className="p-3 border">Warranty</th>
                <th className="p-3 border">Quality Score</th>
                <th className="p-3 border">Technical Score</th>
                <th className="p-3 border">Sustainability</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border">{product.product}</td>
                  <td className="p-3 border">{product.price}</td>
                  <td className="p-3 border">{product.deliveryTime} days</td>
                  <td className="p-3 border">{product.warranty} years</td>
                  <td className="p-3 border">{product.qualityScore}</td>
                  <td className="p-3 border">{product.technicalScore}</td>
                  <td className="p-3 border">{product.sustainability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overall Comparison Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Overall Comparison Chart</h2>
        <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Radar Comparison Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Radar Comparison Chart</h2>
        <Radar data={radarChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
}
