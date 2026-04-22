import React, { useState, useEffect } from 'react';
import PriceCard from './components/dashboard/PriceCard';
import TrendChart from './components/dashboard/TrendChart';
import CurrencyConverter from './components/converter/CurrencyConverter';
import ThemeToggle from './components/ui/ThemeToggle';
import Loader from './components/ui/Loader';
import { useCryptoData } from './hooks/useCryptoData';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const { coins, loading, error } = useCryptoData();
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (coins.length > 0 && !selectedCoin) {
      setSelectedCoin(coins[0].id);
    }
  }, [coins]);

  const toggleFavorite = (coinId) => {
    setFavorites(prev =>
      prev.includes(coinId) ? prev.filter(id => id !== coinId) : [...prev, coinId]
    );
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const top4Coins = filteredCoins.slice(0, 4);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center p-10">{error}</div>;

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            CryptoVision
          </h1>
          <ThemeToggle />
        </div>

        <input
          type="text"
          placeholder="Buscar criptomoeda..."
          className="w-full p-3 rounded-lg border mb-6 dark:bg-dark-card dark:border-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {top4Coins.map(coin => (
            <PriceCard
              key={coin.id}
              coin={coin}
              isFavorite={favorites.includes(coin.id)}
              onToggleFavorite={() => toggleFavorite(coin.id)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TrendChart coinId={selectedCoin} />
          <CurrencyConverter coins={coins} />
        </div>

        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="p-3">Moeda</th>
                <th className="p-3">Preço</th>
                <th className="p-3">24h %</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.slice(0, 10).map(coin => (
                <tr key={coin.id} className="border-t dark:border-gray-700">
                  <td className="p-3 flex items-center gap-2">
                    <img src={coin.image} className="w-6 h-6" alt={coin.name} />
                    {coin.name}
                  </td>
                  <td className="p-3">R$ {coin.current_price.toFixed(2)}</td>
                  <td className={`p-3 ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;