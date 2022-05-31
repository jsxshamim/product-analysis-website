import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ChartOne = ({ data }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Line Chart</h2>
            <LineChart className="m-auto w-[100%]" width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="natural" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 6 }} />
                <Line type="natural" dataKey="investment" stroke="#82ca9d" activeDot={{ r: 6 }} />
                <Line type="natural" dataKey="sell" stroke="#F97316" activeDot={{ r: 6 }} />
            </LineChart>
        </div>
    );
};

export default ChartOne;
