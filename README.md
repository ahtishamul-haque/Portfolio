# Portfolio

A modern, responsive personal portfolio built using React 19 and Create React App. Showcases projects, skills, and contact information for developers and creatives.

---

## Project Structure

```
.
├── public/           # Static assets and HTML shell
├── src/              # React components and application logic
│   ├── components/   # Reusable UI components
│   └── App.js        # Root component
├── build/            # Production build output (auto-generated)
├── package.json      # Project metadata and scripts
```

---

## Features

- Responsive design optimized for desktop and mobile
- Built with React 19 and react-scripts
- Easy to customize with modular components
- Clean layout for showcasing projects, skills, and contact info

---

## Tech Stack

- React 19
- Create React App (react-scripts)
- JavaScript (ES6+)
- HTML/CSS
- Render (for deployment)

---

## Cloning and Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/ahtishamul-haque/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Start the development server

```bash
npm start
```

The app will open at `http://localhost:3000`

---

## Building for Production

```bash
npm run build
```

This will:
- Generate an optimized static build in the `build/` directory
- Minify and bundle all assets for production use

---

## Deployment on Render

If you're using [Render](https://render.com) for deployment:

- **Build Command:**  
  ```bash
  npm install --legacy-peer-deps && npm run build
  ```

- **Publish Directory:**  
  ```
  build
  ```

- **Start Command:**  
  _(Leave blank for static site)_

---

## Live Demo

🔗 [View Live Site](https://your-portfolio.onrender.com/)

---

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/)
