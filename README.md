# Typescript the basics

This repository was created to learn more about the typescript programming language.

# What is TypeScript

TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

# Some tips

When we get this error:

>    + CategoryInfo          : SecurityError: ( : ) [], PSSecurityException
>    + FullyQualifiedErrorId : UnauthorizedAccess

We can fix it with opening up a powershell with administrative rights and run this code

``
set-executionpolicy remotesigned
``

