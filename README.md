# SaaS Barber Shop

Este projeto é uma aplicação de agendamento de serviços de barbearia desenvolvida durante o bootcamp da **FullStackClub**.

## Visão geral

A aplicação permite:

- visualizar barbearias e serviços
- agendar reservas
- confirmar ou cancelar agendamentos
- exibir informações dos estabelecimentos

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS 3
- Prisma
- NextAuth
- Radix UI
- Sonner
- date-fns

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Execute em modo de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```bash
http://localhost:3000
```

## Scripts úteis

- `npm run dev` — roda o servidor de desenvolvimento
- `npm run build` — compila o projeto para produção
- `npm start` — inicia o servidor de produção
- `npm run lint` — executa o ESLint

## Estrutura principal

- `app/` — aplicação Next.js
- `app/globals.css` — estilos globais e configurações do Tailwind
- `app/_components/` — componentes reutilizáveis
- `app/_components/ui/` — componentes de interface
- `app/bookings/` — página de agendamentos
- `app/barbershops/[id]/` — página de detalhes da barbearia
- `prisma/` — modelo e seed do banco

## Avisos e limitações

Este projeto está em adaptação a partir de uma versão anterior do Tailwind.

- Ainda existem alguns problemas de frontend em bordas e espaçamentos.
- Alguns componentes podem não renderizar bordas ou botões corretamente em todas as telas.
- A configuração do Tailwind e o uso de `@apply` exigem atenção adicional.

## Notas do bootcamp

O projeto foi realizado como parte do bootcamp da FullStackClub. A implementação atual ainda está em evolução e serve como base para ajustes posteriores.
