# Arcasiles Event Hub

> A live event hub for Arcasiles Group, built with Lit and Web Components to explore modern frontend architectures beyond React.

🌐 **Live demo**: https://carmentajuelo.github.io/arcasiles_eventapp/

![Web Components](https://img.shields.io/badge/Web_Components-native-blue)
![Lit](https://img.shields.io/badge/Lit-3.0-purple)
![Vite](https://img.shields.io/badge/Vite-6.0-yellow)

---

## What is this

Arcasiles Event Hub is a webapp with a live agenda for Arcasiles Community Events. It displays past and upcoming events in a modern card layout, built entirely with native Web Components using the Lit library.

---

## Tech stack

| Technology | Role |
|---|---|
| Node.js | JavaScript runtime — runs the dev tools |
| Vite | Dev server and build tool |
| Lit | Library for building Web Components |
| Web Components | Browser-native standard for reusable custom HTML elements |

---

## Project structure
```
src/
├── assets/        # Images and static files
├── data/          # Mock event data (events.json)
├── event-card.js  # Card component
├── event-list.js  # List component
├── nav-bar.js     # Navbar component
├── arc-footer.js  # Footer component
└── index.css      # Global styles
index.html
```

---

## Components

| Component | Description |
|---|---|
| `event-card` | Displays event info: image, title, date, venue, description and registration link |
| `event-list` | Reads events from JSON and renders one card per event |
| `nav-bar` | Main navigation with logo and links |
| `arc-footer` | Footer with logo, social icons and copyright |

---

## How to run locally
```bash
# Clone the repo
git clone https://github.com/CarmenTajuelo/arcasiles_eventapp.git

# Go to the project folder
cd arcasiles_eventapp

# Install dependencies
npm install

# Run the dev server
npm run dev

# Open http://localhost:5173/ in your browser
http://localhost:5173/

# Have fun
🎉

```
---

## Author

**Carmen Tajuelo**  
[GitHub](https://github.com/CarmenTajuelo) · [LinkedIn](https://www.linkedin.com/in/carmentajuelo)