# Getting Started with Page Layout and Next.js 14

## Level 2 Project Overview:

I have successfully completed my project using Next.js 14. The application utilizes MongoDB for user management and performing operations on blog posts. Here are some key features I implemented in the project:

### 1. User Management:

- Users can create accounts, log in, and log out of the application.
- User information is securely stored in MongoDB.

### 2. Blog Posts:

- Users have the ability to create, update, and delete blog posts.
- Blog posts are stored in MongoDB collections.

### 3. Roles and Authorization:

- Users are categorized into "user" and "admin" roles.
- The `middleware.js` file manages access control to pages based on user roles.
- For example, "admin" users have access to the admin panel, while "user" users can only access blog posts.

### 4. Authorization with Middleware.js:

- The `middleware.js` file handles general authorization processes such as user login, role checks, and page redirections.
- This middleware is used to control page access and permissions between users.

### 5. Page Redirections:

- Users are redirected based on their roles, ensuring they land on pages appropriate to their permissions.
- For instance, "admin" users are directed to the admin panel, while "user" users may be redirected to the main page.

## How to Use:

To get started with the project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/enesbilen/nextjs14-full-web/tree/nextjs14-full-completed
   ```

### Install Dependencies:

bash
Copy code
npm install
Set Up MongoDB:

Create a MongoDB database and update the connection details in the project.
Run the Application:

bash
Copy code
npm run dev
Open in Your Browser:
Open http://localhost:3000 in your browser to access the application.

### Contributions and Issues:

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

Happy coding!
