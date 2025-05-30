# Vendas Pra Valer - Landing Page de Alta Conversão

Este projeto é uma landing page de alta conversão para serviços de consultoria e treinamento em tráfego pago, desenvolvida com Next.js 14, TypeScript, Tailwind CSS e seguindo os princípios de Atomic Design.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes acessíveis e customizáveis
- **Lucide Icons**: Ícones minimalistas
- **NextAuth.js**: Autenticação para o painel administrativo
- **Zod**: Validação de esquemas

## Estrutura do Projeto

O projeto segue a metodologia Atomic Design, organizando os componentes em:

- **Atoms**: Componentes básicos como botões, inputs, títulos
- **Molecules**: Combinações de átomos que formam componentes mais complexos
- **Organisms**: Seções completas da página
- **Templates**: Layouts que organizam os organismos
- **Pages**: Páginas completas

## Funcionalidades

### Landing Page

- **HeroSection**: Seção principal com headline impactante e CTA
- **SocialProofBar**: Barra de logos de clientes/parceiros
- **ValuePillars**: Os 3 pilares do método de tráfego pago
- **AboutMentor**: Seção sobre o mentor/especialista
- **OfferStack**: Detalhes da oferta e bônus
- **FAQAccordion**: Perguntas frequentes com schema.org para SEO
- **CountdownBar**: Timer de contagem regressiva para urgência
- **FooterCTADouble**: CTAs duplicados no rodapé

### Painel Administrativo

- **Autenticação**: Login seguro para acesso ao painel
- **Configuração de Pixels**: Integração com GTM, GA4, Meta Pixel, etc.
- **Gestão de Oferta**: Edição de preços, datas e condições
- **Edição de Conteúdo**: Interface para alterar textos da página
- **Upload de Imagens**: Gerenciamento de imagens da landing page

## SEO e Performance

- **Lighthouse Optimized**: Pontuação alta em performance, acessibilidade e SEO
- **Schema.org**: Implementação de schemas para melhor indexação
- **Meta Tags**: Configuração completa de Open Graph e Twitter Cards
- **Semantic HTML**: Uso correto de tags semânticas e atributos ARIA

## Integrações de Tráfego

- **Google Tag Manager**: Container para gerenciar todas as tags
- **Eventos Padrão**: Configuração de eventos de conversão
- **UTM Auto-capture**: Captura e armazenamento de parâmetros UTM

## Como Executar o Projeto

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/vendas-pra-valer.git
cd vendas-pra-valer
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

4. Acesse o projeto em [http://localhost:3000](http://localhost:3000)

## Deploy na Vercel

A forma mais fácil de fazer deploy deste projeto é usando a [Vercel](https://vercel.com), a plataforma dos criadores do Next.js.

1. Faça push do seu código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Importe o projeto na Vercel
3. A Vercel detectará automaticamente que é um projeto Next.js e aplicará as configurações ideais

## Acessando o Painel Administrativo

1. Acesse `/admin/login`
2. Use as credenciais padrão:
   - Usuário: `admin`
   - Senha: `admin123`

**Importante**: Altere as credenciais padrão em produção!

## Configurando Integrações de Tráfego

1. Faça login no painel administrativo
2. Acesse a aba "Pixels e Tags"
3. Insira os IDs dos seus pixels e tags
4. Salve as configurações

## Customizando a Oferta

1. Faça login no painel administrativo
2. Acesse a aba "Oferta"
3. Atualize os preços, parcelas e data de término
4. Salve as configurações

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
