# 🚀 QuickServe Website

A responsive, modern e-commerce and service showcase website built using **React**, **Tailwind CSS**, **JavaScript**, and **HTML**. This project is designed for local businesses to market and manage services such as mobile recharge, cycle repairs, AEPS, and more — all through a user-friendly web interface.

---

## 🌐 Features

- 🏪 Service listing for:
  - Mobile Recharge
  - Cycle Repairs & Parts
  - Motorcycle Tyres
  - AEPS (Aadhaar Enabled Payment System)
  - Money Transfer & Top-Up Services
- 📱 Responsive Design (mobile & desktop friendly)
- 📇 About the shop and contact info
- 💬 Simple contact form and direct WhatsApp/call interaction
- 📍 Google Maps location integration (optional)
- 🧩 Modular Components using React

---

## 🛠️ Tech Stack

| Technology   | Description                      |
|--------------|----------------------------------|
| React        | JavaScript library for UI        |
| Tailwind CSS | Utility-first CSS framework      |
| HTML & CSS   | Structure and basic styling      |
| JavaScript   | Dynamic frontend functionality   |
| Vercel       | Deployment (Optional)            |

---

## 📁 Project Structure

```
quickserve-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── ServicesPage.js
│   │   ├── AboutPage.js
│   │   └── ContactPage.js
│   ├── data/
│   │   ├── services.js
│   │   └── testimonials.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 📦 Getting Started

```bash
git clone https://github.com/your-username/quickserve-website.git
cd quickserve-website
npm install
npm start
npm run build
```

---

## 🌈 Tailwind CSS Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
content: ["./src/**/*.{js,jsx,ts,tsx}"],
```

And add the following in `src/styles/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📬 Contact

Made with ❤️ by [Niranjan Singh](https://niranjansingh.vercel.app)

---

