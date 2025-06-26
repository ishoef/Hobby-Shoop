**Installed Packages**

1. TailwindCSS = "@tailwindcss/vite": "^4.1.7",
2. React = "react": "^19.1.0",
3. React DOM = "react-dom": "^19.1.0",
4. React Icons = "react-icons": "^5.5.0",
5. DaisyUI = "tailwindcss": "^4.1.7"
6. React Router = "react-router": "^7.6.0",
7. Firebase = "firebase": "^11.8.1",
8. SweetAlert2 = "sweetalert2": "^11.21.2",


**Project Overview**

🌟 **Design Principles:**

- **Modern & Clean UI**: Avoid clutter, use white space effectively.
- **Consistent Design System**: Use consistent colors, fonts, and spacing.
- **Mobile-First**: Start with mobile design, then scale up to tablet and desktop.
- **Unique Look**: Avoid copying from past projects or tutorials.
- **Color Mode Toggle**: Support both **Dark and Light themes**.

🧰 **Recommended Stack:**

- **React + Tailwind CSS**
- **React Router Dom**
- **DaisyUI / Shadcn / Chakra UI** (Optional for extra UI components)
- **React Icons** or **Lucide Icons** for visuals

 🧭 **Page-by-Page UI Details**

1️⃣ **Navbar**

A sticky top bar across all pages.

 ✅ Components:

- **Left Side**:

  - Logo (image or text)
  - App Name ("HobbyHub")

- **Middle/Right Side**:

  - Home
  - All Groups
  - Create Group (Private)
  - My Groups (Private)
  - Login/Register OR

    - User Avatar (photoURL)
    - On hover: show displayName (with tooltip or dropdown)
    - Logout button

 💡 Design Tip:

- Use dropdown for user options.
- Keep it compact on mobile (hamburger menu).

2️⃣ **Home Page**

 ✅ Sections:

1. **Hero/Banner/Slider**

   - 3 slides (e.g., “Discover Your Passion”, “Join Local Communities”, “Start Your Own Group”)
   - Use meaningful images and action words.
   - Include CTA (e.g., “Get Started”, “Join Now”).

2. **Featured Groups**

   - Show 6 highlighted groups.
   - Card format:

     - Image
     - Group Name
     - Category
     - Start Date
     - “See More” button

3. **Extra Section 1**: How It Works

   - 3 steps with icons (Find Group → Join → Meet Up)

4. **Extra Section 2**: Benefits or Testimonials

   - Static content (e.g., “Why HobbyHub?” or real/fake user reviews)

3️⃣ **Login Page**

 ✅ UI Elements:

- Card in the center with:

  - Email input
  - Password input
  - Login button
  - Google OR GitHub login button
  - Link to register

 🧠 UX Tips:

- Form validation
- Show loading spinner on submit
- Show toast on error/success

4️⃣ **Register Page**

 ✅ UI Elements:

- Similar to login layout
- Fields:

  - Name
  - Email
  - Photo URL
  - Password (with validation for upper, lower, and 6+ characters)

- Submit button + link to login
- Show error messages on form if password doesn't meet criteria

5️⃣ **Create Group Page** (`/createGroup`)

 ✅ UI Layout:

- Form with:

  - Group Name
  - Dropdown for Hobby Category
  - Textarea for Description
  - Input: Meeting Location
  - Input: Max Members
  - Date Picker: Start Date
  - Input: Image URL
  - Readonly Fields: User Name, User Email
  - “Create Group” button

 🧠 UX Tips:

- Form validation
- Toast/Sweet Alert on success

6️⃣ **Group Details Page** (`/group/:id`)

 ✅ Layout:

- Image banner
- Group Info in a card:

  - Name, Category, Description
  - Meeting Location, Start Date, Members

- “Join Group” button

  - Disabled & message if the group is expired

7️⃣ **All Groups Page** (`/groups`)

 ✅ Layout Options:

- **Cards View** or **Table View** (choose one)
- Each group card/row:

  - Image
  - Group Name
  - Category
  - Start Date
  - “See More” button → link to `/group/:id`

8️⃣ **My Groups Page** (`/myGroups`)

 ✅ Layout:

- Table format
- Each row:

  - Group Name, Category, Start Date
  - “Update” & “Delete” buttons
  - Show confirmation modal before delete

9️⃣ **Update Group Page** (`/updateGroup/:id`)

 ✅ Options:

- Full page form (same as Create Group)
- **OR use modal** for inline editing
- On save: show toast and update DB

🔟 **404 Page**

- Friendly message like “Page Not Found 😢”
- A link/button to go back to Home

🔄 **Loading Spinner**

- Global loader while fetching data
- Use animated loader (e.g., from Lottie)

🌙 **Dark/Light Theme Toggle**

- Switch in Navbar or Footer
- Save preference in localStorage or context
- Change background, text, and card colors based on theme

 📦 **Bonus Libraries (Choose at least 2)**

| Library                   | Example Use                                             |
| ------------------------- | ------------------------------------------------------- |
| `Lottie React`            | Animated illustrations in Hero, Empty State, or Success |
| `React Simple Typewriter` | Typewriter effect in Hero Banner                        |
| `React Awesome Reveal`    | Animated fade/slide-in for cards or sections            |
| `React Tooltip`           | Tooltip for user avatar / form labels                   |

 📱 **Responsive Design Guide**

- Use **Tailwind responsive classes**: `sm:`, `md:`, `lg:`, `xl:`
- Stack layout vertically on small screens
- Optimize images for mobile
- Navigation: use hamburger menu in mobile view

Would you like a **Figma layout**, **wireframe**, or **Tailwind starter layout code** to begin your design? I can help create one.

**Images Liks**
- Banner Png Link: https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png 
- Banner Png2 Link: https://i.ibb.co/Fkymc7mH/Chat-GPT-Image-May-26-2025-12-28-17-PM.png
- Logo Png Link: https://i.ibb.co/QxPKXTh/logo.png
- 