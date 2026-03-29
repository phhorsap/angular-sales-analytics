
# 🚀 Advanced Sales Intelligence Dashboard (Angular Edition)
<img width="1318" height="642" alt="image" src="https://github.com/user-attachments/assets/4b012693-fd2a-4996-b4e1-1095f33e7e71" />


An enterprise-grade **Sales Performance Dashboard** built with **Angular 17+**. This project demonstrates a full frontend-to-backend integration using a simulated REST API, featuring dynamic data visualization and responsive UI design.



---

## ✨ Key Features
* **Full API Integration:** Dynamic data fetching from a JSON Server (Mock API).
* **Reactive Data Visualization:** Interactive charts powered by **Chart.js** and **ng2-charts**.
* **Real-time Metrics:** Tracking Revenue, Win Rate, and Deals with automated UI updates.
* **Responsive Architecture:** Built with **Tailwind CSS** for a seamless experience on mobile and desktop.
* **Business Logic:** Includes Sales Leaderboards and Category-based segmentation.

---

## 🛠️ Tech Stack
* **Frontend Framework:** Angular (TypeScript)
* **Styling:** Tailwind CSS
* **Charts:** Chart.js & ng2-charts
* **Backend (Mock):** JSON Server (REST API)
* **Package Management:** NPM with `npx` for version consistency.

---

## ⚙️ Getting Started

To run this project locally, you need to start both the **Backend API** and the **Angular Frontend**.

### 1. Start the Backend (JSON Server)
Navigate to the api folder and run:
```bash
npx json-server --watch db.json --port 3000
