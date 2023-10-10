<h1 align="center">lemoninfilm - Anna Esteve</h1> <br>
<p align="center">
  <img alt="lemoninfilm_mockup" title="lemoninfilm" src="https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/desktop_mockup.png?alt=media&token=cfb13144-146a-4ef0-ab27-b015b870709c" width="600">
</p>

<div align="center">
  <img src="https://www.svgrepo.com/show/327388/logo-react.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/354430/tailwindcss.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/373595/firebase.svg" width="60" height="60">
  <img src="https://avatars.githubusercontent.com/u/19635045" width="60" height="60">
</div>
<p align="center"> Built with React, Tailwind and more.</p>

## 🖥️ Demo

Here is a working live demo : https://lemoninfilm.vercel.app/

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Final conclusions](#final-conclusions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="introduction"></a>

## 📋 Introduction

This is the final Coderhouse project for the React Js course.
This is a photography e-commerce that offers the possibility of purchasing them through this platform.

**Responsive design**

<p align="center">
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/mobile_mockup_02.jpg?alt=media&token=d3ec3b15-d8ba-47d7-a9c3-f86405ae1aac" width=700>
</p>

<a name="features"></a>

## 💡 Features

This project has some interesting features that I want to highlight:

#### Fetch data

- All the info related to the products (name, title, id, img url, etc) is taken from Firestore.
- This info is obtained through _fetch_ and _promises_ methods
- It was necessary to consult the documentation to find the suitable methods for CRUD operations: **getDocs**, **getDoc**, **addDoc**, **updateDoc**.
- For more information, follow this links:
  https://firebase.google.com/docs/firestore/query-data/get-data
  https://firebase.google.com/docs/firestore/manage-data/add-data

#### Post data

- This is an app that doesn't have a payment gateway; however, purchase orders are recorded.
- In a similar way, orders registered in the purchase confirmation form are sent to Firestore.
- In this way, the flow of information is bidirectional: from the cloud to the user and from the user to the cloud.

#### Private routes

- I decided to create a simple and minimalist backoffice to be able to see the orders received without needing to enter the Firestore platform.
- This is a **protected route** that **requires authentication**: access to the application will be requested using a username and password. If the username is found in the database, navigation to the private route will be allowed.

<p align="center">
  <img src= "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/form-02.png?alt=media&token=5934b03c-6873-410a-bb7e-de41499504de&_gl=1*1td7218*_ga*OTQ3NjQ5NTE3LjE2OTM0ODAxMjY.*_ga_CW55HF8NVT*MTY5Njg4MTA2NS43Ny4xLjE2OTY4ODI5OTYuMzIuMC4w" width=700>
</p>

- Try it here: https://lemoninfilm.vercel.app/backoffice
- Want a **demo video**? <a href="https://www.awesomescreenshot.com/video/21444969?key=c36d5f81803c94622b21a0c1ab6569c9">Check this out</a>

<p align="center">
  <img src= "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/back_02_02.png?alt=media&token=bb58da02-00f7-4c76-94ef-333f082cebb4&_gl=1*144xeoo*_ga*OTQ3NjQ5NTE3LjE2OTM0ODAxMjY.*_ga_CW55HF8NVT*MTY5Njg4MTA2NS43Ny4xLjE2OTY4ODMwODUuMzAuMC4w" width=700>
</p>

<a name="built-with"></a>

## 🛠️ Built with

List of technologies used to develop this app:

- <a href="https://react.dev/">React Js</a>
- <a href="https://create-react-app.dev/">Create React App</a> for starting the file system
- <a href="https://tailwindcss.com/">Tailwind CSS</a> for styling
- <a href="https://reactrouter.com/en/main">React-router-dom</a> for everything related to routing and matching URLs
- All information about the different products is stored in Firestore. Likewise, the information for each order is collected in Firebase Storage. Both products belong to <a href="https://firebase.google.com/">Firebase</a>
- <a href="https://rsuitejs.com/">React Suite</a> has been used to implement different functionalities, including the Loader and Drawer components
- The forms have been created with <a href="https://formik.org/">Formik</a>. Also its validation is done with <a href="https://www.npmjs.com/package/yup">Yup</a>
- Since it is a photography e-commerce, the <a href="https://www.npmjs.com/package/react-image-zoom">react-image-zoom</a> library has been used to offer a quality zoom to the user
- The <a href="https://sonner.emilkowal.ski/">Sonner library</a> is used for toast notifications

<p align="center">
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/tablet_mockup_02.jpg?alt=media&token=0c4241bb-6f0f-4b9f-8c5c-f0eb2288a537" width=700>
</p>

<a name="getting-started"></a>

## 🔨 Getting started

- Fork the repo
- Clone the repo: `git clone https://github.com/annalemonbcn/ProyectoFinalReact-Esteve`
- Navigate into the project files
- Open swith VSC
- Install dependencies: `npm i`
- Run the app: `npm start`
- Open the live in your port: http://localhost:3000/
- Enjoy :)

<a name="final-conclusions"></a>

## 🙏🏻 Final conclusions

Dpecial thanks to Horacio Alfredo Gutierrez Estevez as well as the rest of the tutors for his good lessons in class, his patience in resolving doubts and, above all, for the good humor he has shown throughout this course.
