# React Fiber Architecture

[GitHub Reference](https://github.com/acdlite/react-fiber-architecture)

## Virtual DOM

* The real DOM is like the actual web page you see in the browser.
* Changing the real DOM is **slow**.
* React uses a **Virtual DOM**, which is just a lightweight copy of the real DOM kept in memory.
* When something changes (like text, color, or data):

  1. React updates the Virtual DOM first
  2. Then it compares it with the previous version
  3. Finally, it updates **only the changed parts** in the real DOM (not the whole page).

✅ This makes React apps **fast** and avoids unnecessary reloading.

---

## Reconciliation

* Reconciliation is the process of finding out what changed between the **old Virtual DOM** and the **new Virtual DOM**.
* React uses a **diffing algorithm** to quickly figure out:

  * Which elements stayed the same
  * Which elements need to be updated
  * Which elements need to be added or removed

**Example:**
If you change just one word in a paragraph, React will update **only that word**, not reload the entire paragraph.

---

## Fiber

* **Fiber** is the engine behind React (introduced in React 16).
* It makes rendering **smoother and faster** by breaking work into small chunks instead of doing it all at once.

Think of it like this:

* **Without Fiber** → React would update everything in one go (could make the app freeze for a second if updates are heavy).
* **With Fiber** → React does updates in **steps** and can **pause and resume** when needed, so your app stays responsive.
