
# Assignment: 04 
## Name: Alamin islam
## gamil: alaminstudent57@gmail.com
[live URL](https://alamin-codes.github.io/Food-Recipe-App/)

---


# 🍽️ Food Recipe App

A simple and responsive food recipe web application built with **Vanilla JavaScript** using the **TheMealDB API**.  
Users can browse food recipes, search by food name, view details in a modal, and enjoy a smooth user experience.

---

## 🚀 Features

- 🍱 Load and display food recipes dynamically
- 🔍 Search food by name
- ❌ Show **"Foods not found!!!"** when no result exists
- 🔄 Automatically reload all foods when search input is cleared
- 📱 Fully responsive food gallery (Grid layout)
- 🪟 View food details in a modal popup
- ⬆️ Scroll to top button
- ⚡ Smooth scrolling experience
- 🎨 Clean UI with loading spinner

---

## 🧩 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)
- TheMealDB API

---

## 📁 Folder Structure

project-root/
│
├── images/
│
├── js/
│ ├── header.js
│ ├── heroSec.js
│ ├── search.js
│ ├── foodSection.js
│ ├── footer.js
│ ├── scrollToTop.js
│ └── main.js
│
└── index.html

---

## 📌 File Responsibilities

### `index.html`
- Main HTML file
- Loads the JavaScript modules
- Contains the root element

### `main.js`
- Entry point of the application
- Connects all components together
- Manages application flow

### `header.js`
- Creates the website header/navigation

### `heroSec.js`
- Displays the hero/banner section

### `search.js`
- Handles search UI and user input
- Triggers food search functionality

### `foodSection.js`
- Fetches food data from API
- Renders food cards
- Handles "Foods not found" state
- Manages modal popup

### `footer.js`
- Displays footer section

### `scrollToTop.js`
- Adds scroll-to-top button with smooth scroll

---

## 🔗 API Used

**TheMealDB API**  
https://www.themealdb.com/api/json/v1/1/search.php?s=


---

## 🖥️ How to Run the Project

1. Clone or download the project
2. Open `index.html` in your browser
3. Start searching for your favorite foods 🍔🍕

> ⚠️ For best experience, use a local server (VS Code Live Server)

---

## 📸 Preview

- Search food by name
- Click **View Details** to see full recipe
- Responsive layout for all devices

---

## ✨ Future Improvements

- Debounced search
- Category filter
- Favorites feature
- Pagination
- Dark mode

---

## 👨‍💻 Author

**Alamin**  
Frontend Developer (JavaScript)

---

## ⭐ Support

If you like this project, give it a ⭐ and feel free to improve it!

## 🎥 Demo

![Preview](./images/demo.gif)
