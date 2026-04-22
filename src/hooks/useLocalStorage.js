import { useState, useEffect } from 'react';

// Hook personalizado para persistir dados no localStorage
export const useLocalStorage = (key, initialValue) => {
    // Estado para armazenar nosso valor
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Erro ao ler localStorage:', error);
            return initialValue;
        }
    });

    // Atualiza localStorage quando o estado muda
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};