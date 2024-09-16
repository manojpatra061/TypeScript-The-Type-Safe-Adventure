"TypeScript: The Type-Safe Adventure" is a fast-paced practical approach to learning the essentials of TypeScript quickly.

If you want to learn TypeScript in no time, this repo will help you learn TS faster. I recommend you go through them one by one serially. If you go through my way I bet you will have no doubt how things work in TS and will be equipped enough to learn more on your own.

You can use my notion notes along the journey - (Link will be given here soon)

You can use Vite for this, but I chose not to because I believe that understanding the raw setup process makes it easier to grasp what's happening behind the scenes in tools like Vite.

## Install

To install TypeScript on your project run this command on terminal - 

```sh
  npm install typescript --save-dev
```
On your `package.json` file it should show you TS with its version

OR, 

you can run the command on ternimal to check

```sh
  npx tsc --version
  tsc --version
```

## Create "tsconfig.json" file

This file tells TypeScript Compiler (TSC) how to compile your ts code.

- Create a `tsconfig.json` file and paste the following configuration for now. You will learn more about its options and settings later:

```json
{
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "exclude": ["node_modules"]
}
```

OR,

run the following command in your terminal to create a `tsconfig.json` file with default configuration:

```sh
  npx tsc --init
```

## Basic Understanding Before Getting Started

- TypeScript is typically used as a development tool that's why it comes under devDependencies
- TypeScript code is written in a `.ts` file (e.g., `app.ts`).
- When a `.ts` file is compiled, it generates a corresponding JavaScript `.js` file (e.g., `app.js`).
- TypeScript looks for a `tsconfig.json` file to determine how to compile the TypeScript code.
- How to compile? `npx tsc file_name.ts` (e.g, `npx tsc app.ts`)
- How to run? remember the above command generates a `js` file, so `node file_name.js` (e.g, `node app.js`)

## How to play and learn with my repository (setup)
- copy the code from a ts file and paste that in "app.ts" file
- `npm run start` (which will "compile → run → show results" on terminal)