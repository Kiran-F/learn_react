# Blogy 🚀

Blogy is a modern, fully-functional blog web application built with React, Redux Toolkit, and Appwrite. It features a bold and trendy **Neo-Brutalism UI** design, offering a unique and engaging user experience for writing, reading, and managing blog posts.

## ✨ Features

- **User Authentication:** Secure signup, login, and logout functionalities.
- **CRUD Operations:** Create, Read, Update, and Delete blog posts.
- **Rich Text Editor:** Integrated TinyMCE editor for writing beautifully formatted posts.
- **Image Uploads:** Seamless image uploading and management for post covers.
- **State Management:** Efficient global state management using Redux Toolkit.
- **Form Validation:** Robust form handling and validation using React Hook Form.
- **Neo-Brutalism UI:** A striking, high-contrast, and colorful design language using Tailwind CSS.
- **Responsive Design:** Fully responsive layout that looks great on mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Frontend Framework:** [React.js](https://react.dev/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & React-Redux
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Backend as a Service (BaaS):** [Appwrite](https://appwrite.io/) (Authentication, Databases, Storage)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/)
- **Rich Text Editor:** [TinyMCE](https://www.tiny.cloud/)
- **HTML Parsing:** `html-react-parser`

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have Node.js installed on your machine. You will also need an [Appwrite](https://appwrite.io/) account and a configured Appwrite project (with a Database, Collection, and Storage Bucket).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/blogy.git
   cd blogy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root of the project and add your Appwrite configuration details:
   ```env
   VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
   VITE_APPWRITE_PROJECT_ID="your-project-id"
   VITE_APPWRITE_DATABASE_ID="your-database-id"
   VITE_APPWRITE_COLLECTION_ID="your-collection-id"
   VITE_APPWRITE_BUCKET_ID="your-bucket-id"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Visit `http://localhost:5173` in your browser.

## 🎨 Design System

Blogy embraces the **Neo-Brutalism** design trend. This includes:
- High-contrast elements with stark `#000000` borders.
- Vibrant, flat background colors (Cyan, Yellow, Pink).
- Hard, unblurred drop shadows (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`).
- Bold, uppercase typography for headers and buttons.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
