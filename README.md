
# 🌐 Personal Portfolio – [joyalgeorgekj.com](https://joyalgeorgekj.com)

This is my personal portfolio website built using modern frontend technologies like **React JS**, **Tailwind CSS**, **Appwrite**, **React Redux**, and **React Router DOM**. It showcases my projects, blog posts, and a little about me – all hosted seamlessly on **Vercel**.

## 🛠️ Tech Stack

- **React JS** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS for rapid styling
- **Appwrite** – Backend-as-a-service for blogs/projects data
- **React Redux** – State management
- **React Router DOM** – Routing & navigation
- **Vercel** – Deployment & hosting

---

## 📁 Project Structure

```
/src
  ├── components      # Shared UI components
  ├── pages           # Main pages like Home, Blog, Project, About, Post
  ├── hooks           # Custom hooks (e.g., viewport check, Appwrite)
  ├── styles          # Tailwind CSS & global styles
  └── utils           # Utility functions
```

---

## 🧭 Routes

| Route            | Description                     |
|------------------|---------------------------------|
| `/`              | Home page                       |
| `/blog`          | Blog listing                    |
| `/project`       | Project showcase                |
| `/about`         | About me                        |
| `/:path/:id`     | Dynamic page for blog/project   |

The dynamic route (`/:path/:id`) renders blog or project details via the `Post` component.

---

## 📦 Installation

```bash
git clone https://github.com/Joyal-George-KJ/portfolio
cd portfolio
npm install
npm run dev
```

> ✅ Make sure to set up a `.env` file:

```env
VITE_BASE_URL = "https://fra.cloud.appwrite.io/v1"
VITE_STORE_URL = "Store Name"
VITE_PROJECT_ID = "666************"
VITE_DATABASE_ID = "666*************"
VITE_PERSONAL_PROJECT_ID = "666***********"
VITE_PERSONAL_BLOG_ID = "680*************"
VITE_PERSONAL_EXPERIENCE_ID = "680***********"
```

---

## 🧠 Features

- 💡 Blog & project content powered by Appwrite
- ⚡ Animations & responsive UI with Tailwind CSS
- 📝 Markdown rendering with React Markdown
- 🌙 Dark mode support
- 🔄 Reusable components and modular architecture

---

## 📤 Deployment

- Deployed on **Vercel**
- Continuous deployment via GitHub

---

## 📎 Useful Links

- 🔗 **Live Site**: [joyalgeorgekj.com](https://joyalgeorgekj.com)
- 🧑‍💻 **GitHub Repo**: [github.com/Joyal-George-KJ/portfolio](https://github.com/Joyal-George-KJ/portfolio)

---

## 📬 Contact

- 📧 Email: [joyalgeorgekj@gmail.com](mailto:joyalgeorgekj@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/joyalgeorgekj](https://www.linkedin.com/in/joyalgeorgekj/)

---

> Made with ❤️ using React, Tailwind, and Appwrite.
```
