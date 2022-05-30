import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const ChartTwo = ({ data }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Bar Chart</h2>
            <BarChart
                className="m-auto"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="investment" fill="#82ca9d" />
                <Bar dataKey="sell" fill="#F97316" />
            </BarChart>
        </div>
    );
};

export default ChartTwo;
