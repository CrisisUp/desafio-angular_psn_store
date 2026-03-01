# 🎮 PlayStation Store Clone - Angular Pro

Este projeto é uma evolução do desafio da DIO, focado em implementar uma arquitetura escalável e moderna utilizando Angular. Além da interface visual, o projeto explora conceitos de DevOps e Arquitetura de Software em um ambiente de hardware de última geração.

## 🚀 Diferenciais Técnicos (Nível Intermediário)

Diferente da versão básica, este clone implementa:

* **Roteamento Dinâmico:** Navegação entre a vitrine de jogos e páginas de detalhes específicas (/details/:id) sem recarregamento de página.

* **Service Pattern:** Centralização da lógica de dados em um GameService, facilitando a manutenção e futura integração com APIs.

* **Data Modeling:** Uso de Interfaces TypeScript para garantir a integridade dos dados em toda a aplicação.

* **Filtro em Tempo Real:** Sistema de busca reativo que filtra a vitrine de jogos instantaneamente através de Input Binding.

## 💻 Ambiente de Desenvolvimento & Compatibilidade

Um dos grandes desafios superados neste projeto foi a homologação em um ambiente de ponta:

| Recurso | Especificação |
| :--- | :--- |
| **Hardware** | Apple Mac mini (Chip M4) com 16GB RAM |
| **OS** | macOS Tahoe 26.2 |
| **Runtime** | Node.js v25.x (Current) |
| **Package Manager** | npm v10.x |
| **Framework** | Angular v19+ |

**`Nota Técnica`:** O projeto foi testado para garantir que o compilador do Angular e o servidor de desenvolvimento (HMR) operem com latência zero na arquitetura ARM64 do chip M4, mesmo utilizando a versão experimental do Node v25.

## 🏗️ Estrutura do Projeto

```Plaintext
src/app/
├── components/            # Componentes reutilizáveis (Card, Search, Menu)
├── models/                # Interfaces e Contratos de Dados
├── pages/                 # Home e Detalhes (Roteamento)
├── services/              # Lógica de negócio e busca de dados
└── app-routing.module.ts  # Configuração das rotas
```

## 🛠️ Como rodar o projeto

### 1. Certifique-se de ter o Node v25 instalado

### 2. Clone o repositório

### 3. Instale as dependências: `npm install`

### 4. Inicie o servidor: `npm start` ou `ng serve`

### 5. Acesse <http://localhost:4200>
