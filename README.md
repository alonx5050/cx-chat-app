# 📬 CX Chat Application — Home Assignment

A full-stack chatbot messaging system enabling real-time communication between a user and an automated bot.
Built with **React + Material-UI** on the frontend, **Node.js + Express + Prisma** on the backend, and **PostgreSQL** for persistent storage.

---

## 🎯 Objective

Build a basic and professional-grade chat application, following best practices in architecture, type safety, modularity, and developer experience.

---

## 📦 Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| Frontend  | React + TypeScript + MUI         |
| Backend   | Node.js + Express + TypeScript   |
| ORM       | Prisma                           |
| Database  | PostgreSQL (via Docker)          |
| Dev Tools | Vite, ts-node-dev, Prisma Studio |

---

## ✨ Features

* 💬 User + bot message exchange
* 📄 Case details displayed per conversation
* 🗂 Fully typed shared models with `Conversation`, `User`, `Message`
* ✅ Data persists in PostgreSQL via Prisma ORM
* 🔁 Real-time-feeling UI with local state updates
* 🌐 REST API with clean, modular structure
* 💅 Responsive MUI design
* 🔍 Developer-friendly logging + visual DB inspection

---

## 📁 Project Structure

```
📦 cx-chat-app
├── frontend/        # Vite React app
│   └── src/
│       ├── components/    # ChatBubble, ChatHeader, ChatInput
│       ├── pages/         # ChatPage.tsx
│       ├── api/           # Axios API calls
│       ├── types/         # Shared TS types
│       └── App.tsx, main.tsx
├── backend/         # Node.js + Express app
│   ├── src/
│   │   ├── routes/        # Express routes
│   │   ├── controllers/   # Route handlers
│   │   ├── services/      # Business logic
│   │   ├── seed/          # Seeder with User/Conversation/Messages.json
│   │   └── index.ts       # App entrypoint
│   ├── prisma/            # Prisma schema
│   └── docker-compose.yml # PostgreSQL container
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/cx-chat-app.git
cd cx-chat-app
```

---

### 2. Start PostgreSQL with Docker

Make sure Docker is installed.

```bash
cd backend
docker-compose up -d
```

This spins up a local PostgreSQL instance at `localhost:55432`.

---

### 3. Install Backend Dependencies & Migrate DB

```bash
cd backend
npm install
npx prisma migrate dev --name init
npx prisma db seed # or npm run seed (if scripted)
```

---

### 4. Run Backend API

```bash
npm run dev
```

> Server runs on: [http://localhost:3000](http://localhost:3000)

---

### 5. Run Frontend (Vite)

```bash
cd ../frontend
npm install
npm run dev
```

> Frontend runs on: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Advanced Developer Tools

### 🔍 Prisma Studio (Visual DB Browser)

Easily browse & edit data:

```bash
cd backend
npx prisma studio
```

Then open [http://localhost:5555](http://localhost:5555)

### 📦 Docker for Postgres

We use Docker Compose to ensure consistent PostgreSQL environment:

* No manual installs
* Easily resettable
* Shares `.env` settings with Prisma

---

## 📐 Best Practices Used

### ✅ Type Safety with TypeScript

All frontend & backend logic is strongly typed, including API contracts, Prisma models, and component props.

### ✅ Modular Code Structure

* `controllers` for HTTP layer
* `services` for business logic
* `types` shared between API and UI

### ✅ Prisma ORM

Prisma simplifies:

* Data modeling (`schema.prisma`)
* Migrations
* DB access with full IntelliSense support

### ✅ Seeding with Real JSON Data

Using `User.json`, `Conversation.json`, and `Messages.json` to prefill the DB with test data.

### ✅ Dev-friendly Logging

Middleware logs each request with method, path, status, and duration:

```ts
[POST] /api/conversations/54321/messages → 201 (22ms)
```

### ✅ Frontend Developer Experience

* Vite for ultra-fast startup and HMR
* MUI for consistent, responsive UI
* Axios for clean API integration

---

## ✅ Functional Requirements Coverage

* [x] User and chatbot message flow
* [x] Case details at top
* [x] Chronologically sorted messages
* [x] Consistent conversation ID
* [x] Timestamps stored + rendered
* [x] Responsive design

---

## 📬 Sample API

### `GET /api/conversations/54321`

```json
{
  "id": "54321",
  "caseId": "C102345",
  "productName": "Widget Pro",
  "status": "Open",
  "messages": [...]
}
```

### `POST /api/conversations/54321/messages`

```json
{
  "content": "Is there an update?"
}
```

Response:

```json
{
  "userMessage": { ... },
  "botMessage": { ... }
}
```

---

## 📎 Notes

* All timestamps are stored in UTC (converted on frontend with `.toLocaleString()`)
* Message bubbles are dynamically styled by `direction` field

---


