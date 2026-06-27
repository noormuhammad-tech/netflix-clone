# 🎬 Netflix Clone — Flask + SQLite

A pixel-faithful Netflix Pakistan landing page clone with a full authentication system built using **Flask** and **SQLite**.

---

## 🚀 Features

### Landing Page
- ✅ Responsive Netflix-style hero section with background overlay
- ✅ Sticky navbar that turns solid black on scroll
- ✅ Email validation on "Get Started" button
- ✅ Scroll-reveal animations on all feature sections
- ✅ Working FAQ accordion with smooth open/close animation
- ✅ 4 feature sections (TV, Mobile, Devices, Kids)
- ✅ Fully responsive (desktop, tablet, mobile)

### Authentication System
- ✅ **Sign Up** — Register with name, email, password (hashed with Werkzeug)
- ✅ **Login** — Verified against database, session managed with Flask
- ✅ **Dashboard** — Welcome screen shown on successful login
- ✅ **Logout** — Clears session securely
- ✅ Duplicate email detection
- ✅ Flash messages for errors and success
- ✅ Floating label form inputs (Netflix-style)

---

## 🛠️ Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Backend   | Python, Flask        |
| Database  | SQLite (via SQLAlchemy) |
| Frontend  | HTML5, CSS3, Vanilla JS |
| Auth      | Werkzeug (password hashing) |
| Sessions  | Flask session        |

---

## 📁 Project Structure

```
netflix-clone/
│
├── app.py               # Flask routes & app config
├── models.py            # User model (SQLAlchemy)
├── requirements.txt     # Python dependencies
│
├── templates/
│   ├── index.html       # Landing page
│   ├── signup.html      # Register page
│   ├── login.html       # Login page
│   └── dashboard.html   # Post-login success page
│
├── static/
│   ├── css/
│   │   ├── style.css    # Main styles
│   │   └── auth.css     # Auth page styles
│   ├── js/
│   │   └── main.js      # FAQ, navbar, scroll reveal, validation
│   └── assets/
│       └── images/      # Local assets (favicon etc.)
│
└── instance/
    └── netflix.db       # SQLite database (auto-created)
```

---

## ⚙️ Setup & Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/noormuhammad-tech/netflix-clone.git
cd netflix-clone
```

### 2. Create a virtual environment
```bash
python -m venv .venv
```

#### Activate it:
- **Windows:** `.venv\Scripts\activate`
- **Mac/Linux:** `source .venv/bin/activate`

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the app
```bash
python app.py
```

### 5. Open in browser
```
http://localhost:5000
```

> The SQLite database (`instance/netflix.db`) is created automatically on first run.

---

## 📸 Pages

| Page        | Route        |
|-------------|--------------|
| Home        | `/`          |
| Sign Up     | `/signup`    |
| Login       | `/login`     |
| Dashboard   | `/dashboard` |
| Logout      | `/logout`    |

---

## 👨‍💻 Author

**Noor Muhammad**
- GitHub: [@noormuhammad-tech](https://github.com/noormuhammad-tech)
- LinkedIn: [linkedin.com/in/noormuhammad-tech](https://linkedin.com/in/noormuhammad-tech)

---

> ⚠️ This project is for educational/portfolio purposes only. Netflix name and assets belong to Netflix, Inc.
