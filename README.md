# 🌐 Personal Portfolio — Full Stack

A full stack personal portfolio website built with **React (Vite)** for the frontend and **Spring Boot** for the backend, with **MySQL** as the database.

---

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- JavaScript
- CSS

**Backend:**
- Java Spring Boot
- Spring Data JPA
- MySQL Database
- REST API

---

## ✨ Features

- 🏠 **Hero / Landing Section** — Introduction and call to action
- 👩‍💻 **About Me** — Background and personal introduction
- 🗂️ **Projects Section** — Showcase of work with descriptions
- 🛠️ **Skills Section** — Technologies and tools
- 📬 **Contact Form** — EmailJS powered contact form with LinkedIn link
- 📄 **Resume Download** — Direct resume download option

---

## 📁 Folder Structure

```
Personal_Portfolio_fullstack/
├── frontend/                   # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   └── package.json
│
├── backend/                    # Spring Boot backend
│   └── Portfolio/
│       ├── src/
│       │   └── main/
│       │       ├── java/com/example/Portfolio/
│       │       │   ├── controller/
│       │       │   ├── model/
│       │       │   ├── repository/
│       │       │   └── service/
│       │       └── resources/
│       │           └── application.properties
│       └── pom.xml
```

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js installed
- Java 17+ installed
- MySQL installed and running
- Maven installed

---

### 🔵 Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then run:
```bash
npm run dev
```
Frontend runs at: `http://localhost:5173`

---

### 🔴 Backend Setup

1. Create a MySQL database:
```sql
CREATE DATABASE portfolio_db;
```

2. Update `backend/Portfolio/src/main/resources/application.properties`:
```properties
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

3. Run the Spring Boot application from IntelliJ or using:
```bash
cd backend/Portfolio
./mvnw spring-boot:run
```
Backend runs at: `http://localhost:8080`

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/krishna-deepika-k-72baa0293/)

---

> Designed and developed by **Krishna Deepika K**
