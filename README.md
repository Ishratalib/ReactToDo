# React To-Do App

A simple and responsive To-Do application built with **React** and **Vite**. This project focuses on practicing React fundamentals, state management, event handling, and dynamic UI rendering while creating a practical task-management application.

## 🚀 Live Demo

[View the Live To-Do App](https://ishratalib.github.io/ReactToDo/)


## ✨ Features

* Add new tasks
* Mark tasks as completed
* Edit existing tasks
* Delete individual tasks
* Delete completed tasks
* Display the number of remaining tasks
* Responsive user interface
* Clean and simple design

## 🛠️ Technologies Used

* **React**
* **Vite**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS**
* **ESLint**

## 📁 Project Structure

```text
ReactToDo/
│
├── public/
│
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 📄 File Overview

### `src/App.jsx`

Contains the main React application and To-Do functionality, including task handling and UI rendering.

### `public/`

Contains public/static assets used by the application.

### `index.html`

The main HTML entry point used by Vite.

### `vite.config.js`

Contains the Vite configuration, including the configuration required for deployment to GitHub Pages.

### `package.json`

Contains the project's dependencies and npm scripts.

## ⚙️ Run the Project Locally

### 1. Clone the repository

Use the following command and replace the URL with your repository URL:

```bash
git clone "YOUR_REPOSITORY_URL"
```

**Example:**

```bash
git clone https://github.com/Ishratalib/ReactToDo.git
```

### 2. Open the project folder

```bash
cd ReactToDo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The production files are generated inside the `dist` folder.

## 🌐 Deployment

This project is deployed using **GitHub Pages**.

The Vite configuration uses the repository path:

```js
base: '/ReactToDo/'
```

To deploy the application:

```bash
npm run deploy
```

## 📚 What I Practiced

While building this project, I practiced:

* React fundamentals
* JSX
* State management
* Event handling
* Dynamic list rendering
* Updating UI based on state
* Handling user input
* Component-based development
* Vite development and production builds
* Deploying a React application with GitHub Pages

## 🎯 Project Purpose

This project was created as a hands-on React practice project to move from traditional JavaScript DOM manipulation toward **React-based UI development and state management**.

## 👩‍💻 Author

**Ishrat Talib**

Built as part of my frontend development learning journey.
