<h1 align="center">
  <br>
  <a href="https://github.com/Youssef-kobi/ChatApp"><img src="https://raw.githubusercontent.com/Youssef-kobi/ChatApp/main/client/public/Logo.svg" alt="MERN" width="200"></a>
  <br>
  Chat Application
  <br>
</h1>

<h4 align="center">A MERN Socket.io Chat app.</h4>

<p align="center">
 <a href="https://img.shields.io/npm/v/npm?style=plastic"><img src="https://img.shields.io/npm/v/npm?style=plastic" alt="npm version" height="18"></a>
</p>

<p align="center">
	<a href="#introduction">Introduction</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

## Introduction

This project is a MERN Chat Application. The technologies used are as follows:

- **MongoDB** as a NoSQL database
- **React** for the front-end, bootstrapped with "Create React App".
- **Express.js** for the server
  - Serves the React app
  - Provides the JSON API for the React app using http
- **Node.js** for the back-end
- **Socket.io** for real-time, bi-directional communication between web clients and servers.

## Key Features

<img align="right"  width="220" height="400" src="https://user-images.githubusercontent.com/52678976/190696479-54fcb58b-ece0-49d4-b469-b37c0c16b45f.PNG" alt="Files Structure"/>

- MERN structured folders
- TailwindCSS
- ES7 Airbnb eslint / prettier
- Axios for API fetching
- Socket.io for instant messaging
- Jwt auth for socket connections
- React-toastify for Toast notification
- React-hook-form for form management
- Yup (frontend & backend)for Forms validation
- @hookform/resolvers to use yup with react-hook-form
- React-router-dom V6, route restrictions: PrivateOutlet & PublicOutlet
- Dark/Light mode
- emoji-mart for chat Emojis
- Pages: Login, Registration, ForgetPassword, NotFound, Dashboard,
- Authentication using JWT with verification middleman in the serve routes
- React Context for Authentication and Socket

## TO-DO

- Responsiveness 30%
- Mailing service for user account verification & reset password
- Google / Facebook / Twitter Authentication

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/amitmerchant1990/electron-markdownify

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

MIT

