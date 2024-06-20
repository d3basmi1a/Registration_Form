# Registration Form Project

This is a simple registration form project that uses HTML, CSS, Bootstrap, and Node.js with Express and MongoDB. The project allows users to submit their details through a form, which are then saved in a MongoDB database.

## Project Structure

- `index.html`: The main HTML file containing the registration form.
- `index.js`: The server-side code written in Node.js with Express to handle form submissions and interact with MongoDB.
- `public/signup_successful.html`: A static HTML file displayed after a successful registration.
- `.env`: A file for environment variables (not included in the repository for security reasons).
- `style.css`: Custom CSS for styling the form.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/registration-form.git
    cd Registration_Form
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    ```

4. Start the server:

    ```bash
    node index.js
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the registration form.

## Usage

1. Fill out the registration form with your details.
2. Click the "Submit" button.
3. If the registration is successful, you will be redirected to the `signup_successful.html` page.

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [MongoDB](https://www.mongodb.com/) for the database
- [Express](https://expressjs.com/) for the web framework
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
