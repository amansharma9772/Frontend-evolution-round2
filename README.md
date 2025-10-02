
## React Posts & User Data Project


This project is a React application built with Tailwind CSS that contains two main modules:

- **Posts & Post Detail Page** – fetches posts from an API, supports search, pagination, and a comments system with localStorage.
- **User Data Table with Modal** – fetches user data, displays it in a table, highlights the selected row, and shows user details inside a modal.

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

  - **User Data Table with Modal**
    - Fetch users from `https://jsonplaceholder.typicode.com/users`.
    - Show data in a responsive table.
    - Click row → highlight selected row in red.
    - Open modal with detailed user info:
      - Basic Info (name, username, email, phone, website)
      - Company Info (name, catchPhrase, bs)
      - Full Address (street, suite, city, zipcode, geo)
  - When modal is closed → last selected row stays highlighted.

- **Reusable Components**
  - `Card` for post display.
  - `SearchInput` for filtering posts.
  - `Pagination` component for navigation between pages.
  -  `DataTable` – reusable table for user data.
  -  `UserModal` – modal to show full user details.

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
│  ├─ DataTable.jsx
│  ├─ Pagination.jsx
│  └─ PostDetail.jsx
│  ├─ SearchInput.jsx
│  ├─ UserModal.jsx  
├─ DisplayPosts.jsx
├─ UserData.jsx
├─ main.jsx
└─ index.css

# for usertabale

Open your browser and go to:

http://localhost:5173/userdata 

🛠 Technologies Used
React 18
React Router DOM 6
Tailwind CSS
Fetch API
LocalStorage
React Icons
📝 Notes
Posts and Users data are from JSONPlaceholder.
Comments persist on refresh using localStorage.
Selected row in the User Table stays highlighted after modal close.
Default comments ensure at least some comments always appear.
🎯 Future Improvements
Add search & filter for users.
Add pagination in User Table.
Enhance modal with two-column layout (Company & Address).
Replace fake API with a real backend.


