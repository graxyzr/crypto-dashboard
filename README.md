# 🚀 CryptoVision Dashboard

<div align="center">

![CryptoVision Banner](https://via.placeholder.com/1200x300/0A0A0A/A9F0D1?text=CryptoVision+Dashboard)

**Dashboard Financeiro de Criptomoedas em Tempo Real**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[📖 Documentação](#-documentação) • [🚀 Demo](#-demo) • [💻 Instalação](#-instalação) • [📊 Funcionalidades](#-funcionalidades)

</div>

---

## 📋 Sobre o Projeto

**CryptoVision Dashboard** é uma aplicação web moderna para monitoramento de criptomoedas em tempo real. Desenvolvido com foco em performance, design premium e experiência do usuário, o projeto consome dados da API da CoinGecko para exibir cotações atualizadas, gráficos históricos e conversão entre moedas.

### 🎯 Propósito
- Demonstrar habilidades avançadas em React e ecossistema frontend
- Criar um portfólio impactante para oportunidades no mercado financeiro/tech
- Oferecer uma ferramenta útil para entusiastas de criptomoedas

---

## ✨ Funcionalidades

### Core Features
- 📊 **Dashboard em Tempo Real** - Cotações atualizadas a cada minuto
- 💹 **Gráficos Interativos** - Histórico de 7 dias com Recharts
- 🔄 **Conversor de Moedas** - Calcule valores entre diferentes criptos
- ⭐ **Favoritos** - Salve suas moedas preferidas (localStorage)
- 🌓 **Dark/Light Mode** - Tema adaptável com persistência
- 🔍 **Busca em Tempo Real** - Filtre moedas instantaneamente

### Dados Exibidos
- Preço atual em BRL
- Variação percentual (24h)
- Market Cap
- Volume de negociação
- Gráfico de tendência semanal

---

## 🛠️ Stack Tecnológica

### Frontend
| Tecnologia | Versão | Finalidade |
|------------|--------|-------------|
| React | 18.2 | Biblioteca principal |
| Vite | 5.0 | Build tool e dev server |
| Tailwind CSS | 3.3 | Estilização utilitária |
| Recharts | 2.10 | Gráficos interativos |
| Axios | 1.6 | Consumo de API |

### APIs
- **CoinGecko API** - Dados de criptomoedas (gratuita, sem autenticação)

### Deploy
- **Vercel** - Hospedagem e CI/CD

---

## 📦 Instalação

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou yarn

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/graxyzr/crypto-dashboard.git
cd crypto-dashboard

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite .env se necessário (API já configurada)

# 4. Execute em desenvolvimento
npm run dev

# 5. Build para produção
npm run build

# 6. Preview do build
npm run preview