// Formatadores para valores monetários e percentuais
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

export const formatPercentage = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        signDisplay: 'always',
    }).format(value / 100);
};

export const formatCompactNumber = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(value);
};

export const formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(date));
};