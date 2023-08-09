# Book Review App

**Description:**
Book Review is a React application developed to provide users with the ability to search for books, read and post reviews, and save their favorite books. The app offers a seamless user experience with client-side routing for updating, deleting, adding, and editing book reviews. Data is persistently stored through the use of a mock API and Json Server.

**Project Duration:**
June 2023 - July 2023

## Features

- **Book Search:** Users can search for books using the app's intuitive search functionality.

- **Review Management:** Users can read and post reviews for their favorite books.

- **Favorite Books:** Users have the option to save books as favorites for future reference.

- **Client Routing:** Smooth navigation with client-side routing for updating, deleting, adding, and editing book reviews.

- **Data Persistence:** Utilizes a mock API and Json Server to persistently store and manage user-submitted book reviews.

## Technologies Used

- **React:** The front-end of the application is built using the React library, ensuring a dynamic and responsive user interface.

- **CSS Styling:** Custom CSS styling is applied to enhance the visual appeal and user experience.

- **Client Routing:** The application employs client-side routing to enable seamless navigation and interaction.

- **Data Persistence:** Json Server is used to create a mock API with a db.json file, allowing data to be stored and retrieved.

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/book-review-app.git
   cd book-review-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the Json Server for data persistence:
   ```
   npx json-server --watch db.json --port 3001
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the Book Review App.

## Usage

1. Search for books using the search functionality.

2. Read and post reviews for books you've read.

3. Save your favorite books for future reference.

4. Edit or delete your book reviews using client-side routing.

## Future Enhancements

- Implement user authentication for personalized experiences.
  
- Expand the book database by integrating with external APIs.

- Enhance the user interface with additional styling and animations.

## Acknowledgments

The Book Review App was developed as part of a personal project, with inspiration drawn from a passion for reading and a desire to create an interactive platform for book enthusiasts.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute to the project or provide feedback. Happy reading and reviewing!
