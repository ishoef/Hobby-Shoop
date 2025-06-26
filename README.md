# 🎯 Hobby Shop — Hobby Group Organizer Web App

**Hobby Shop** (also known as **HobbyHub**) is a full-stack, mobile-first web application that helps users discover, join, and create local hobby-based groups. Whether you're into music, photography, crafts, or hiking, HobbyHub connects like-minded people through a clean and engaging platform.

---

## 📌 Project Overview

> Empowering people to connect through shared passions—join or start hobby groups in your community.

Key Features:
- Discover featured and trending hobby groups
- Join existing groups or create new ones
- Responsive and modern user interface
- Dark/Light theme toggle
- Authentication with Firebase (Email + Google/GitHub)
- Real-time feedback with SweetAlert2 and toasts

---

## 🚀 Tech Stack

| Tech              | Purpose                              |
|-------------------|--------------------------------------|
| React             | Frontend framework                   |
| Tailwind CSS      | Utility-first styling                |
| DaisyUI           | Prebuilt Tailwind UI components      |
| React Router DOM  | Client-side routing                  |
| Firebase          | Authentication and backend services  |
| SweetAlert2       | Alert modals and confirmations       |
| React Icons       | Icons and visuals                    |

---

## 🌟 Design Principles

- **Mobile-First**: Responsive from small to large screens  
- **Clean UI**: Clear spacing, modern layout  
- **Consistent Design System**: Fonts, colors, and spacing aligned  
- **Dark/Light Theme**: Toggle with saved preference  
- **Unique Aesthetic**: Custom design, not based on templates

---

## 🧭 Pages & UI Components

### 🔹 Navbar
- Sticky top navigation
- Logo + App Name (“HobbyHub”)
- Links: Home, All Groups, Create Group, My Groups
- Login/Register or Avatar Dropdown with Logout

### 🔹 Home Page
- Hero slider with CTA buttons
- Featured Groups (6 cards: image, name, date, category)
- “How It Works” (3 steps: Find → Join → Meet)
- Testimonials or Benefits section

### 🔹 Login & Register
- Email/Password with validation
- Google/GitHub login
- Responsive card layout
- Inline error handling and toast feedback

### 🔹 Group Management
- `/createGroup`: Create group form with validation
- `/groups`: Browse all groups in card or table format
- `/group/:id`: Group details page with Join button
- `/myGroups`: Table with Update/Delete options
- `/updateGroup/:id`: Form or modal for updating

### 🔹 Additional Pages
- **404 Not Found**: Friendly message and link to home
- **Loading Spinner**: Global loader with animation

---

## 🌙 Theme Toggle

- Switch between Dark and Light mode
- Save preference using `localStorage`
- Consistent theme across components and backgrounds

---

## 🧩 Bonus Libraries Used

| Library                   | Description                          |
|---------------------------|--------------------------------------|
| Lottie React              | Animations (Hero, loading, success)  |
| React Simple Typewriter   | Hero section text animation          |
| React Awesome Reveal      | Scroll-based animations              |
| React Tooltip             | Tooltip for avatars, labels, etc.    |

---

## 📱 Responsive Design

- Tailwind’s `sm:`, `md:`, `lg:` classes used extensively
- Cards and sections stack vertically on small devices
- Hamburger menu for mobile navigation
- Optimized image rendering

---

## 🖼️ Assets & Media

- **Banner 1:** [View](https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png)
- **Banner 2:** [View](https://i.ibb.co/Fkymc7mH/Chat-GPT-Image-May-26-2025-12-28-17-PM.png)
- **Logo:** [View](https://i.ibb.co/QxPKXTh/logo.png)

---

## ⚙️ Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/hobby-shop.git
