# Vue-Mat-Recepet

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run project on localhost 
 1. npm install
 2. npm run dev
 3. On a separate terminal window: npm  run server 

### Teoretiska resonemang 
 #### Redogör översiktligt hur applikationen fungerar.

    Applikationen använder json server med json fil som databas. 
    npm run server är scriptet för att starta servern och npm run dev för att köra vue applikationen. 

    Sidan har tre pages. 
    Första sidan är landnings sidan där man har navbar längs upp.

    Under hero delen så finns två kort. "Browse Recipes" knappen leder till sidan för att se alla recept. "Add Recipe" har ingen sida den leder istället till 404 not found sidan. 

    Under korten på landings sidan så finns tre recept.

    "View all recipes" knappen längs ner på landnings sidan leder till Browse Recipes sidan där man kan se korten för alla recept.

    På recept korten så kan man klicka på show more för att se hela listan av ingredienser.

    Om man klickar på sjärnan så lägs den till som favorite.  Om man klickar på den igen så tar man bort den som favorite. 

    Om man vill se instruktioner för receptet så klickar man på read instructions så tas man till en separt sida där man ser all info om det enskilda receptet. 

 #### Beskriv hur du använt AI utveckling av din applikation. 
  
  Recepten är skapade med AI. AI har även används för att debugga när buggar har hittats.  