# Kitchen Books

Kitchen Books is a full-stack restaurant operations platform designed to help restaurants manage inventory from purchasing through production and sales. The application connects supplier purchasing, recipe management, production batches, finished inventory, and HIOPOS point-of-sale imports into a single inventory workflow.

---

## Overview

Restaurants often manage purchasing, production, and sales across multiple systems, making it difficult to accurately track inventory. Kitchen Books centralizes these workflows into one application that automatically updates inventory throughout the production lifecycle.

With Kitchen Books, users can:

- Receive supplier purchases
- Track raw ingredient inventory
- Create recipes with ingredient quantities and serving yields
- Calculate recipe costs automatically
- Produce finished inventory from recipes
- Import HIOPOS sales reports
- Automatically reduce finished inventory based on sales

---

## Features

### Supplier Management

- Create and manage suppliers
- View supplier purchase history

### Purchasing

- Record purchases containing multiple items
- Automatically calculate purchase totals
- Increase raw ingredient inventory
- Automatically create new raw ingredients when needed

### Raw Ingredient Inventory

- Track ingredient inventory by weight
- Automatically update inventory after purchases
- Prevent duplicate ingredients using normalized names

### Recipe Management

- Create recipes with multiple ingredients
- Define servings produced per batch
- Automatically calculate recipe costs
- Calculate cost per serving using the latest ingredient purchase prices

### Production

- Record production batches
- Validate ingredient availability before production
- Automatically deduct raw ingredients
- Increase finished inventory based on recipe yields

### Finished Inventory

- Track available servings
- Automatically update inventory after production
- Automatically reduce inventory after imported sales

### HIOPOS Integration

- Upload HIOPOS CSV exports
- Preview imported sales
- Map POS product names to recipes
- Save reusable POS mappings
- Automatically reduce finished inventory
- Record imported sales history

### Dashboard

- Available servings
- Finished products
- Low stock ingredients
- Recipe count

---

## Inventory Workflow

```text
Supplier Purchase
        │
        ▼
Raw Ingredient Inventory
        │
        ▼
Recipe Creation
        │
        ▼
Production Batches
        │
        ▼
Finished Inventory
        │
        ▼
HIOPOS Sales Import
        │
        ▼
Automatic Inventory Depletion
```

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Material UI

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite

---

## Project Structure

```text
Kitchen Books
├── frontend
│   └── React + TypeScript + Material UI
├── backend
│   ├── Express API
│   ├── Prisma ORM
│   └── SQLite
```

---

## Getting Started

### Prerequisites

- Node.js
- npm

### Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
DATABASE_URL="file:./dev.db"
```

Generate the Prisma client and create the database:

```bash
npx prisma generate
npx prisma migrate dev
```

Start the backend server:

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend/restaurant-ops-frontend
npm install
npm run dev
```

---

## HIOPOS Sales Import

Kitchen Books supports importing HIOPOS product sales reports exported as CSV files.

Current workflow:

1. Upload HIOPOS CSV
2. Preview imported products
3. Review mapped and unmapped items
4. Create or update POS product mappings
5. Confirm import
6. Automatically reduce finished inventory
7. Record imported sales history

---

## Screenshots

### Dashboard

*Coming Soon*

### Purchasing

*Coming Soon*

### Production

*Coming Soon*

### Sales Import

*Coming Soon*

---

## Future Improvements

- Sales and profitability dashboard
- Low stock alerts
- Purchase order generation
- Barcode support
- User authentication
- PostgreSQL support
- Docker deployment
- Automated testing
- Cloud deployment

---

## Author

**Javier Woo**

Kitchen Books was developed as a personal software engineering project to explore full-stack application development while solving real-world restaurant inventory management challenges.
