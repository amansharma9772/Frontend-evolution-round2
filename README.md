
## React Posts & User Data Project


This project is a React application built with Tailwind CSS that contains two main modules:

- **Posts & Post Detail Page** – fetches posts from an API, supports search, pagination, and a comments system with localStorage.
- **User Data Table with Modal** – fetches user data, displays it in a table, highlights the selected row, and shows user details inside a modal.
- **Show Images Gallery** - fetches images from an API, supports infinite scroll, lazy loading, filtering by album or images, toggling between grid and list views, lightbox with keyboard navigation, and favorites saved in localStorage with notifications.

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

  ## 2️⃣ Show Images Gallery Project

### Features

- **Dynamic Image Gallery**
  - Fetches images from `https://picsum.photos/v2/list`.
  - Infinite scroll with lazy loading.
  - Filter options:
    - **All** – show all images
    - **Album** – show images grouped by album
    - **Images** – show individual images
  - Toggle view mode: **Grid** or **List**
    - List view shows author name and current date.
  - Click on an image → open **Lightbox**
    - Keyboard navigation (← → keys)
    - Custom aesthetic arrows
    - Responsive on mobile and desktop
  - Favorite images with heart icon
    - Saves favorite images in `localStorage`
    - Notification at top of page (green background)

- **Performance Optimizations**
  - Lazy image loading (`loading="lazy"`)
  - Minimal re-renders using `React.memo`
  - Responsive design using Tailwind CSS

- **Reusable Components**
  - `Card` for post display.
  - `SearchInput` for filtering posts.
  - `Pagination` component for navigation between pages.
  -  `DataTable` – reusable table for user data.
  -  `UserModal` – modal to show full user details.

---

## Tech Stack Used

- **Frontend**
  - React 18
  - Tailwind CSS
  - React Router DOM 6
  - React Icons

- **APIs**
  - JSONPlaceholder for posts & users
  - Picsum Photos for images

- **Storage & State**
  - `localStorage` for comments and favorites
  - React Hooks (`useState`, `useEffect`, `useRef`, `useCallback`)

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
│  ├─ PostDetail.jsx
│  ├─ SearchInput.jsx
│  ├─ UserModal.jsx
│  ├─ ImageCard.jsx
│  ├─ FilterDropdown.jsx
│  ├─ ViewToggle.jsx
│  └─ Lightbox.jsx
├─ DisplayPosts.jsx
├─ UserData.jsx
├─ ShowImages.jsx
├─ main.jsx
└─ index.css

# for usertabale

Open your browser and go to:

http://localhost:5173/userdata 

# Show Images Gallery Project:

Open your browser and go to:

http://localhost:5173/showimages 


Notes

Data is fetched from external APIs.

LocalStorage persists comments and favorite images.

Fully responsive design for mobile and desktop.

Infinite scroll optimized for performance.


Future Improvements

Add search & filter for users.

Pagination in User Table.

Replace fake APIs with a real backend.

Add fade animations in Lightbox and toast notifications.

Enhance modal layout for better UX.


