# React Posts & Post Detail Project

This project is a simple React application built with **Tailwind CSS** that fetches posts from an API and displays them in a responsive, paginated grid. Clicking on a post opens a detailed view with a comments section. Users can add their own comments, which are saved in `localStorage`.


---

## Features

- **Display Posts Page**
  - Fetches posts from `https://jsonplaceholder.typicode.com/posts`.
  - Displays posts in a responsive grid using cards.
  - Pagination support (9 posts per page).
  - Search functionality to filter posts by title.
  - Click on a post to navigate to the Post Detail page.

- **Post Detail Page**
  - Fetches post details from `https://jsonplaceholder.typicode.com/posts/:id`.
  - Displays a comments section:
    - Default comments are included.
    - Fetches additional comments from `https://jsonplaceholder.typicode.com/comments?postId=:id`.
    - Users can add new comments from an input box.
    - New comments are saved to `localStorage` to persist on refresh.
    - Shows 4 comments by default, with a "Show More" button to reveal all comments.
  - Back button to navigate to the posts page.

- **Reusable Components**
  - `Card` for post display.
  - `SearchInput` for filtering posts.
  - `Pagination` component for navigation between pages.

---

## Installation

1. Clone the repository:

```bash
git clone <repository_url>


Navigate to the project folder:

cd <project_folder>


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser and go to:

http://localhost:5173

File Structure
src/
├─ component/
│  ├─ Card.jsx
│  ├─ PostDetail.jsx
│  ├─ SearchInput.jsx
│  └─ Pagination.jsx
├─ DisplayPosts.jsx
├─ main.jsx
└─ index.css

Usage

Open the app in your browser.

Browse the posts on the home page.

Use the search box to filter posts by title.

Click on a post card to open the Post Detail page.

View comments, add your own, and click "Show More" to see all comments.

Technologies Used

React 18

React Router DOM 6

Tailwind CSS

Fetch API

LocalStorage

React Icons

Notes

The app uses jsonplaceholder.typicode.com for fake posts and comments.

Comments persist on browser refresh using localStorage.

Default comments are always added to ensure at least some comments are shown.


