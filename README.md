# Finly

> **Full Stack AI Finance Platform built with Next.js, Supabase, Tailwind, Prisma, Inngest, ArcJet, and ShadCN UI.** 🔥🔥

Finly is a modern budgeting and transaction management platform that combines powerful financial tools with AI-driven insights. Track your expenses, scan receipts, and take control of your financial future — all in one place.

---

## 🚀 Features

* 🔐 Clerk-based Authentication (Sign up / Sign in)
* 📊 Smart Dashboard with Budget Progress
* 💳 Transaction & Account Management
* 📷 AI Receipt Scanning with OCR
* 🧠 Personalized Financial Insights
* 🤖 Google Gemini Integration
* 📅 In-app Calendar & Filtering
* 🧮 Automated Jobs with Inngest
* 📈 Data Visualization & Analytics

---

## 🧠 AI-Powered Tools

* **Receipt Scanner**: Extracts total amount, date, description, merchant, and suggests categories.
* **Insights Engine**: Learns user behavior and delivers financial tips and optimization ideas.

---

## 🛠️ Technologies Used

### 🔹 Frontend

* **Next.js 14** – App Router & SSR
* **React 18** – Component logic and hooks
* **Tailwind CSS** – Utility-first styling
* **ShadCN UI** – Accessible design components
* **Zod** + **React Hook Form** – Form validation

### 🔹 Backend

* **Node.js** + **Express.js** – API logic
* **Supabase** – Postgres DB + Realtime + Auth
* **Prisma ORM** – Type-safe DB management

### 🔹 Infra & Automation

* **Inngest** – Event-driven workflows
* **ArcJet** – API rate limiting & security

### 🔹 Authentication

* **Clerk.dev** – User auth and session management

### 🔹 AI & APIs

* **Google Gemini** – Intelligent financial recommendations
* **Receipt Scanning AI** - Analyzes receipt images and extracts transaction details in a structured JSON format. The extracted information includes:
  - **Total Amount**: The exact numerical value of the transaction.
  - **Date**: The date of the transaction in ISO format (e.g., 2023-04-01).
  - **Description**: A brief summary of the items or services purchased.
  - **Merchant/Store Name**: The name of the store or merchant from where the transaction was made.
  - **Suggested Category**: A category for the expense such as housing, transportation, groceries, utilities, entertainment, food, shopping, healthcare, education, personal, travel, insurance, gifts, bills, or other-expense.
  
  If the uploaded document is not a receipt, the system will return an empty object.

---

## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/daanish04/Finly.git
cd finly
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root with:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=
```

### 4. Start Development Server

```bash
npm run dev
```

App runs at: `http://localhost:3000`

### 5. Run Inngest Dev Server

```bash
npx inngest-cli@latest dev
```

---

## ⚙️ Deployment

Deployed on Vercel → finly-rho-inky.vercel.app



