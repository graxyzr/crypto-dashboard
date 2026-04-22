import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-light-bg dark:bg-dark-bg flex items-center justify-center z-50">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Carregando dados do mercado...</p>
            </div>
        </div>
    );
};

export default Loader;