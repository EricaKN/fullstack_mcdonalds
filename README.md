# npm

npm run dev

# DB - Prisma and postgres running at Docker

sudo docker compose up

npx prisma format
npx prisma migrate dev
npx prisma db seed
npx prisma generate - update table fields to import at ts files

## Access inside docker

sudo docker exec -it <docker_id> bash
psql -U postgres -d mydb

### Check tables

\dt

\d "Restaurant" - check for  details

SELECT \* FROM "MenuCategory";

## src/lib/prisma.ts

Ensures that we always have at least one open connection to the database.
When saving a file in development, the server restarts.
If I don't have this file, every time I save a file in development, it will create a new connection to the database (and it will overload the database).
This code ensures that if it is in development mode, I create a cached version of Prisma, which is basically a connection to the database.

# sfc 
 Shortcut for stateless functional component, which is a type of React component that is written as a function, and doesn't have any internal state.

# next

## Approuter
If a folder inside "src/app/" has a page.tsx file, it will be treated as a route.

## [folder]

In Next.js, when you create a folder (or a file) with the name enclosed in square brackets ([name]), you're telling Next.js to treat that as a dynamic route. This means that the [name] part of the folder or file name will be treated as a parameter, and its value will be extracted from the URL when a user visits a specific page. 

Eg.:
[slug]/page.tsx
localhost:3000 /fsw-donalds

The value in the URL path (e.g., fsw-donalds) is captured as the slug parameter.

It is a server component, it runs at server-side, and it can access backend, but it can't have interactivity.
If you want interactivity you must create a client component.

# Tools

## Tailwind

To customize your css by using class

## Shadcn

Pretty components. It is compatible with tailwind.

npx shadcn@2.3.0 init

### Installed components
npx shadcn@2.3.0 add button
npx shadcn@2.3.0 add card
npx shadcn@2.3.0 add scroll-area
npx shadcn@2.3.0 add sheet
npx shadcn@2.3.0 add drawer
npx shadcn@2.3.0 add form
npx shadcn@2.3.0 add sonner
npx shadcn@2.3.0 add separator

## eslint for sort imports

npm install -D eslint-plugin-simple-import-sort@12.1.1
-D because we use it only for development

## plugin prettier-plugin-tailwindcss

npm install -D prettier-plugin-tailwindcss@0.6.5
.prettierrc.json

Order classes


# Rendered components by a client component
Components rendered by a client component will always be client components, because it's not possible to have a server component inside a client component.

Unless the server component is passed as a prop-child inside the client component. 
For example, in the case of cart.tsx, which is a client component and is passed in layout.tsx. Inside the cartProvider, there are some server components like src/app/[slug]/menu/page.tsx

# Back button

The back button uses the useRouter hook, which only runs in a client component.
That's why we created components/product-header.tsx.
It’s not treated as a route because it doesn’t have a page.tsx file.

# Functions
When we use more than 1x a function, we can save it at /src/helpers and call them whenever we want.

# Cart
There are two screens that need cart information (whether the cart is open and the items in the cart):

    The cart screen (sacola screen);
    The restaurant screen (at the bottom, showing the total price of the orders).

Therefore, I need to store the state and content of the cart in a global state management tool like Context API.
We will create a context (similar to a component) that will store a state, which will be shared across the screens and the components rendered by those screens.

Context: /src/app/[slug]/menu/context/cart.tsx

I need to ensure that all components that need access to the context information are within the CartProvider, so I have to add it in layout.tsx.

The CartProvider has to be a client component.

# Layout.tsx
Rendered in all pages.

# CPF
react number format
npm install react-number-format@5.4.3

# SERVER ACTIONS
Functions that are executed on the server but can be called by client components.
They are an API route.
To indicate that a file will have server actions, you must add "use server;" at the beginning of the file.