# Blogy 🚀

> 🌐 **Live Demo:** [https://blogy-kohl.vercel.app/](https://blogy-kohl.vercel.app/)

Blogy is a modern, fully-functional fullstack blog web application built with **React 19**, **Vite**, **Redux Toolkit**, and **Appwrite**. It features a bold **Neo-Brutalism UI** design, a completely **self-made Native Rich Text Editor** (zero external API keys), secure authentication, and seamless cloud media storage.

---

## ✨ Features

- **🔐 User Authentication:** Secure signup, login, and logout powered by Appwrite.
- **👁️ Password Visibility Toggle:** Integrated interactive show/hide (eye) button on password fields.
- **✍️ Self-Made Rich Text Editor:** Built-in editor with zero API key dependencies:
  - Text formatting: **Bold**, *Italic*, <u>Underline</u>, ~~Strikethrough~~
  - Colors & Highlights: Text color swatches + custom color picker + highlight presets
  - Typography Hierarchy: Paragraphs, Headings (`H1`–`H4`), Blockquotes, and Code blocks
  - Alignment: Left, Center, Right, and Justify
  - Lists & Dividers: Bullet lists, Numbered lists, and Horizontal rules
  - Hyperlinks: Insert and remove custom URLs with display text
  - Source Code Toggle: Seamlessly switch between Visual WYSIWYG and Raw HTML source view
  - Word, character, and estimated reading time counters
- **📰 Full CRUD Post Management:** Create, read, update, and delete blog articles with featured image uploads.
- **🛡️ Protected Routes:** `AuthLayout` container guarding private routes (`/add-post`, `/edit-post`, `/my-posts`).
- **⚡ State Management:** Centralized authentication and user state via Redux Toolkit.
- **📋 Form Validation:** Real-time form control and auto-slug generation with React Hook Form.
- **🎨 Neo-Brutalism Design System:** High-contrast borders (`border-4 border-black`), vibrant palette (Cyan, Yellow, Pink), and hard drop shadows (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`).
- **📱 Fully Responsive:** Clean layout across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (Neo-Brutalist Theme) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) & React-Redux |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Backend as a Service** | [Appwrite](https://appwrite.io/) (Auth, Database, Cloud Storage) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) |
| **Rich Text Editor** | Custom Native Editor (`contentEditable` + Selection API) |
| **HTML Parser** | `html-react-parser` (Renders formatted post HTML safely) |

---

## 📁 File Structure

```text
12_blogApp/
├── public/                 # Static assets
├── src/
│   ├── appwrite/           # Appwrite service wrappers
│   │   ├── auth.js         # Authentication methods (login, createAccount, getCurrentUser, logout)
│   │   └── config.js       # Database & Storage methods (createPost, updatePost, uploadFile, etc.)
│   ├── assets/             # Images and visual assets
│   ├── components/         # Reusable UI components
│   │   ├── AuthLayout.jsx  # Route protection container (redirects unauthenticated users)
│   │   ├── Button.jsx      # Neo-brutalist styled button component
│   │   ├── Container/      # Max-width layout wrapper
│   │   ├── Footer/         # App footer
│   │   ├── Header/         # Navbar with dynamic auth links & Logout button
│   │   ├── Input.jsx       # Custom input with show/hide password toggle support
│   │   ├── Login.jsx       # Sign-in form with demo account credentials box
│   │   ├── Logo.jsx        # Branding logo component
│   │   ├── PostCard.jsx    # Blog card component with featured image preview
│   │   ├── post-form/      # Post creation and update form
│   │   │   └── PostForm.jsx
│   │   ├── RTE.jsx         # Custom self-made Rich Text Editor component
│   │   ├── Select.jsx      # Neo-brutalist select dropdown
│   │   ├── Signup.jsx      # Registration form
│   │   └── index.js        # Central component export file
│   ├── conf/
│   │   └── conf.js         # Sanitized environment variable configuration
│   ├── pages/              # Route view pages
│   │   ├── AddPost.jsx     # Create post page
│   │   ├── EditPost.jsx    # Edit existing post page
│   │   ├── Home.jsx        # Landing page & feed
│   │   ├── Login.jsx       # Login view wrapper
│   │   ├── MyPosts.jsx     # Filtered author posts view
│   │   ├── Post.jsx        # Single post article view with HTML parser
│   │   └── Signup.jsx      # Signup view wrapper
│   ├── store/              # Redux store configuration
│   │   ├── authSlice.js    # Auth state reducer (status, userData)
│   │   └── store.js        # Redux store definition
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main layout shell with header, footer, & outlet
│   ├── index.css           # Tailwind CSS imports & post content typography (.browser-css)
│   └── main.jsx            # React root and React Router route definitions
├── .env.Sample             # Sample environment variables template
├── index.html              # HTML entry point
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite build configuration
└── README.md               # Project documentation
```

---

## ⚙️ How It Works

### 1. Environment & Configuration
All environment variables are declared with the `VITE_` prefix and mapped through [`src/conf/conf.js`](src/conf/conf.js) to guarantee type safety and clean imports:
- `VITE_APPWRITE_URL`
- `VITE_APPWRITE_PROJECT_ID`
- `VITE_APPWRITE_DATABASE_ID`
- `VITE_APPWRITE_COLLECTION_ID`
- `VITE_APPWRITE_BUCKET_ID`

### 2. Authentication & Route Protection
- When the app loads, [`App.jsx`](src/App.jsx) queries `authService.getCurrentUser()`.
- If active, the user session is dispatched to Redux (`login({ userData })`), updating `auth.status` to `true`.
- [`AuthLayout.jsx`](src/components/AuthLayout.jsx) guards routes:
  - Public routes (`/login`, `/signup`) redirect authenticated users to the home feed.
  - Protected routes (`/add-post`, `/edit-post/:slug`, `/my-posts`) redirect unauthenticated visitors to `/login`.

### 3. Custom Rich Text Editor Workflow
- Unlike third-party editors that require cloud API keys and expire over time, Blogy uses an independent, native Rich Text Editor in [`src/components/RTE.jsx`](src/components/RTE.jsx).
- It hooks into React Hook Form via `<Controller />`:
  - Captures user input and selections.
  - Applies styling commands (`bold`, `italic`, `foreColor`, `formatBlock`, `createLink`, etc.) while preserving cursor focus.
  - Synchronizes HTML output in real time to the form state.
  - Provides a live word counter, character counter, reading time estimate, and a visual/HTML source toggle.

### 4. Publishing & Article Rendering
1. **Form Submission:** In [`PostForm.jsx`](src/components/post-form/PostForm.jsx), title, auto-slug, featured image, and rich HTML content are validated.
2. **Appwrite Storage:** The featured image is uploaded to the Appwrite Storage bucket via `appwriteService.uploadFile()`.
3. **Database Document:** The post is stored in the Appwrite Database collection.
4. **Article Reading:** In [`Post.jsx`](src/pages/Post.jsx), `html-react-parser` safely renders the stored HTML with typography styling (`.browser-css` in `src/index.css`), displaying headings, links, blockquotes, and lists.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Kiran-F/learn_react.git
cd learn_react/12_blogApp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the `12_blogApp` directory with your Appwrite project credentials:
```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_project_id"
VITE_APPWRITE_DATABASE_ID="your_database_id"
VITE_APPWRITE_COLLECTION_ID="your_collection_id"
VITE_APPWRITE_BUCKET_ID="your_bucket_id"
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Demo Account

To explore the platform without creating an account, use the following credentials on the login page:
- **Email:** `abc@gmail.com`
- **Password:** `12345678`

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
