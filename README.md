This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# DB - Prisma and postgres running at Docker

sudo docker compose up

npx prisma migrate dev
npx prisma db seed

## Access inside docker

sudo docker exec -it 9988508c3e2b bash
psql -U postgres -d mydb

### Check tables

\dt

\d "Restaurant" check details

SELECT \* FROM "MenuCategory";

## src/lib/prisma.ts

Garante que sempre teremos pelo menos 1 conexão aberta com db.
quando salva arquivo em desenvolvimento, o servidor reinicia.
Se não tenho esse arquivo, sempre que eu salvo arquivo em desenvolvimento, ele vai criar uma nova conexão com banco (e vai estourar o banco)
Esse código garante que se estiver em desenvolvimento crio versão em cache do prisma, que é basicamente uma conexão com db.

# sfc criar page

# next

## Approuter

Dentro das subpastas que forem adicionadas ao caminho "src/app/" e que tiverem um arquivo page.tsx será tratada como uma rota.

## [Pasta]

Quando crio uma pasta no next com nome entre colchetes, vou receber no parâmetro da url, um parâmetro com esse nome. Ex.:
[slug]/page.tsx
localhost:3000 /fsw-donalds

Nesse caso, fsw-donalds vai ser o valor de slug.
É um server component, roda no server, e pode acessar backend. Não consegue ter interatividade.

Se quiser interatividade tem que criar um client component

# Tools

## Tailwind

To customize your css by using class

## Shadcn

npx shadcn@2.3.0 init

Pretty components. It is compatible with tailwind.

npx shadcn@2.3.0 add button
It created a /src/components/ui/button.tsx. It uses tailwind classes, so it makes easier to customize it.

npx shadcn@2.3.0 add card
npx shadcn@2.3.0 add scroll-area

## eslint for sort imports

npm install -D eslint-plugin-simple-import-sort@12.1.1
-D because we use it only for development

## plugin prettier-plugin-tailwindcss

npm install -D prettier-plugin-tailwindcss@0.6.5
.prettierrc.json

Order classes


# Componentes renderizados por um client component
sempre serão client coomponents, pois não é possível ter um server component dentro de um client component.

# Botão de voltar a página, usa um useRouter
hook useRouter que só roda em client component. 
Por isso criamos components/product-header.tsx
não é tratada como rota porque não tem arquivo page.tsx. 
