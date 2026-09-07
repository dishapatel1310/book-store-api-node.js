# 📚 Book Store API (Node.js + Express)

Simple Book Store REST API. No TypeScript, no Tailwind CSS — sirf plain
Node.js aur Express. Data ek JSON file (`data/books.json`) me store hota
hai, isliye MongoDB ya kisi database install karne ki zarurat nahi hai.

## 📁 Folder Structure

```
book-store-api/
├── controllers/
│   └── bookController.js   # Saara logic (CRUD)
├── models/
│   └── bookModel.js        # books.json read/write helper
├── routes/
│   └── bookRoutes.js       # API routes
├── data/
│   └── books.json          # Database (JSON file)
├── server.js                # Entry point
├── package.json
└── README.md
```

## 🚀 Project Run Kaise Kare (Setup)

1. Is folder ko unzip karo, phir terminal me andar jao:
   ```bash
   cd book-store-api
   ```

2. Packages install karo:
   ```bash
   npm install
   ```

3. Server start karo:
   ```bash
   npm start
   ```

   Terminal me yeh dikhna chahiye:
   ```
   ✅ Server is running on http://localhost:5000
   ```

4. Browser me kholo: `http://localhost:5000`
   Aur API test karne ke liye Postman / Thunder Client use karo.

   (Optional) Development mode me auto-restart ke liye:
   ```bash
   npm run dev
   ```

## 🔗 API Endpoints

Base URL: `http://localhost:5000/api/books`

| Method | Endpoint          | Kaam                      |
|--------|-------------------|---------------------------|
| GET    | /api/books        | Saari books get karo      |
| GET    | /api/books/:id    | Ek book get karo (by id)  |
| POST   | /api/books        | Nayi book add karo        |
| PUT    | /api/books/:id    | Book update karo          |
| DELETE | /api/books/:id    | Book delete karo          |

### POST / PUT ke liye example body (JSON):

```json
{
  "title": "Wings of Fire",
  "author": "A.P.J. Abdul Kalam",
  "price": 199,
  "quantity": 12
}
```

### Postman me test karne ka tarika:
1. Method select karo (GET/POST/PUT/DELETE)
2. URL daalo: `http://localhost:5000/api/books`
3. POST/PUT ke liye: Body → raw → JSON select karo aur data daalo
4. Send button dabao

## 🧠 Logic Samajhne ke liye (short explanation)

- `data/books.json` → yahi humara database hai (array of book objects)
- `models/bookModel.js` → is file ko read/write karne ke functions hain
- `controllers/bookController.js` → har API ka logic (find, add, update, delete)
- `routes/bookRoutes.js` → URL aur controller function ko connect karta hai
- `server.js` → Express app start karta hai aur routes ko use karta hai

Bas itna hi! Simple CRUD flow hai:
**Route → Controller → Model → JSON file**
