import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchTopCoins = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/markets`, {
            params: {
                vs_currency: 'brl',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false,
                price_change_percentage: '24h',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar moedas:', error);
        throw error;
    }
};

export const fetchHistoricalData = async (coinId, days = 7) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/coins/${coinId}/market_chart`,
            {
                params: {
                    vs_currency: 'brl',
                    days: days,
                },
            }
        );
        return response.data.prices.map(price => ({
            date: new Date(price[0]).toLocaleDateString(),
            price: price[1],
        }));
    } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        throw error;
    }
};