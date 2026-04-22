import React from 'react';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const PriceCard = ({ coin, isFavorite, onToggleFavorite }) => {
    const isPositive = coin.price_change_percentage_24h > 0;

    return (
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-5 transition-all hover:scale-105">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                        <h3 className="font-bold text-lg">{coin.symbol.toUpperCase()}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{coin.name}</p>
                </div>
                <button
                    onClick={onToggleFavorite}
                    className="text-2xl focus:outline-none"
                >
                    {isFavorite ? '⭐' : '☆'}
                </button>
            </div>

            <div className="mt-4">
                <p className="text-2xl font-bold">
                    {formatCurrency(coin.current_price)}
                </p>
                <p
                    className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'
                        }`}
                >
                    {formatPercentage(coin.price_change_percentage_24h)}%
                </p>
            </div>
        </div>
    );
};

export default PriceCard;