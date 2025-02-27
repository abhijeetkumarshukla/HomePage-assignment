import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const WeatherGraph = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getFormattedDate(0)); // Default to today

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=b80f88eb21235860c485526431858990&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.list.map((item) => ({
          date: new Date(item.dt * 1000).toLocaleDateString(),
          time: new Date(item.dt * 1000).toLocaleTimeString(),
          temperature: item.main.temp,
        }));
        setWeatherData(formattedData);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter data for the selected date
  const filteredData = weatherData.filter((item) => item.date === selectedDate);

  // Calculate average temperature for performance
  const avgTemp =
    filteredData.length > 0
      ? (filteredData.reduce((sum, item) => sum + item.temperature, 0) / filteredData.length).toFixed(2)
      : "N/A";

  return (
    <div className="p-2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Performance Section (Left) */}
        <div className="bg-gray-100 p-1 rounded">
          <h2 className="text-sm font-semibold">Performance</h2>
          <p className="text-sm">Avg Temp: <span className="text-sm">{avgTemp}°C</span></p>
        </div>

        {/* Dropdown (Right) */}
        <select
          className="p-1  rounded-full text-sm bg-gray-100"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          {[0, 1, 2].map((dayOffset) => {
            const date = getFormattedDate(dayOffset);
            return (
              <option key={date} value={date}>
                {date}
              </option>
            );
          })}
        </select>
      </div>

      {/* Graph */}
      <ResponsiveContainer width="100%"  height={150}>
        <LineChart data={filteredData} >
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey="time"   />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8"     />
        </LineChart >
      </ResponsiveContainer>
    </div>
  );
};

// Utility function to get formatted date (e.g., "7/10/2025")
const getFormattedDate = (offset) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString();
};

export default WeatherGraph;
