# Typescript the basics

This repository was created to learn more about the typescript programming language.

# What is TypeScript

TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

# How install Node.js

> Working on it

# How install TypeScript

You can install TypeScript via npm.
Go to your project folder and open your command line and write this:

```
npm install -g typescript
```

# How compile your app.ts

In your project folder open your command line and write this:

```
tsc app.ts
```

# How run my application

> Working on it

# Good practices

If the value are not directly initialized into a function/class we can defined it like that:

```typescript
let Number: number;
```

If the value are typed into the function its redundant redifine the type when we declare the variable

```typescript
function add(Number: number, Number2: number){
    console.log(Number+Number2);
}

const Number: number = 10;
const Number2 = 5;
```

# Some tips

When we get this error:

>    + CategoryInfo          : SecurityError: ( : ) [], PSSecurityException
>    + FullyQualifiedErrorId : UnauthorizedAccess

We can fix it with opening up a powershell with administrative rights and run this code

```
set-executionpolicy remotesigned
```

