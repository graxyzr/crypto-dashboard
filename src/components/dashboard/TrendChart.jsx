import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { fetchHistoricalData } from '../../services/coinGeckoAPI';

const TrendChart = ({ coinId }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!coinId) return;
        const loadData = async () => {
            setLoading(true);
            try {
                const history = await fetchHistoricalData(coinId, 7);
                setData(history);
            } catch (error) {
                console.error('Erro ao carregar gráfico:', error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [coinId]);

    if (loading) return <div className="h-64 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl"></div>;

    return (
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-5">
            <h3 className="font-bold mb-4">Tendência (7 dias)</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#A9F0D1"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TrendChart;