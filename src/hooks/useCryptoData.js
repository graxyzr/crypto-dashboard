import { useState, useEffect } from 'react';
import { fetchTopCoins } from '../services/coinGeckoAPI';

export const useCryptoData = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCoins = async () => {
            try {
                setLoading(true);
                const data = await fetchTopCoins();
                setCoins(data);
            } catch (err) {
                setError('Falha ao carregar dados das criptomoedas');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadCoins();
        const interval = setInterval(loadCoins, 60000); // atualiza a cada 1 minuto
        return () => clearInterval(interval);
    }, []);

    return { coins, loading, error };
};