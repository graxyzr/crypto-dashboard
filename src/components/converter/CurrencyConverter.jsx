import React, { useState, useEffect } from 'react';

const CurrencyConverter = ({ coins }) => {
    const [amount, setAmount] = useState(1);
    const [fromCoin, setFromCoin] = useState('');
    const [toCoin, setToCoin] = useState('');
    const [result, setResult] = useState(0);

    // Seleciona automaticamente as primeiras moedas quando disponível
    useEffect(() => {
        if (coins.length > 0 && !fromCoin && !toCoin) {
            setFromCoin(coins[0].id);
            setToCoin(coins[1]?.id || coins[0].id);
        }
    }, [coins, fromCoin, toCoin]);

    // Calcula conversão quando os valores mudam
    useEffect(() => {
        if (fromCoin && toCoin && amount > 0) {
            const fromCoinData = coins.find(c => c.id === fromCoin);
            const toCoinData = coins.find(c => c.id === toCoin);

            if (fromCoinData && toCoinData) {
                const fromPrice = fromCoinData.current_price;
                const toPrice = toCoinData.current_price;
                const converted = (amount * fromPrice) / toPrice;
                setResult(converted);
            }
        }
    }, [amount, fromCoin, toCoin, coins]);

    const handleSwap = () => {
        setFromCoin(toCoin);
        setToCoin(fromCoin);
    };

    return (
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-5">
            <h3 className="font-bold mb-4">Conversor de Criptomoedas</h3>

            <div className="space-y-4">
                {/* Valor a converter */}
                <div>
                    <label className="block text-sm font-medium mb-2">Valor</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* De qual moeda */}
                <div>
                    <label className="block text-sm font-medium mb-2">De</label>
                    <select
                        value={fromCoin}
                        onChange={(e) => setFromCoin(e.target.value)}
                        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                        {coins.map(coin => (
                            <option key={coin.id} value={coin.id}>
                                {coin.name} ({coin.symbol.toUpperCase()})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Botão trocar */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSwap}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </button>
                </div>

                {/* Para qual moeda */}
                <div>
                    <label className="block text-sm font-medium mb-2">Para</label>
                    <select
                        value={toCoin}
                        onChange={(e) => setToCoin(e.target.value)}
                        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                        {coins.map(coin => (
                            <option key={coin.id} value={coin.id}>
                                {coin.name} ({coin.symbol.toUpperCase()})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Resultado */}
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Resultado</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {result.toFixed(8)} {toCoin.toUpperCase()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Taxa: 1 {fromCoin.toUpperCase()} ≈ {(result / amount).toFixed(8)} {toCoin.toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;