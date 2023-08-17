# React-ChatApp

Talk-Hub is a real-time chat web application that allows users to engage in both group and one-on-one chats. The application is built using React.js, Node.js, Express, and MongoDB. It provides a seamless and user-friendly interface for users to sign up, log in, and start chatting with their friends and groups.

## Features

- **User Authentication**: Users can sign up and once registered, they can log in securely to access the chat features.

- **Group Chats**: Users can create and join group chats, allowing multiple participants to engage in conversations within a common chatroom.

- **One-on-One Chats**: Users can initiate private chats with their friends by selecting a contact from their list and starting a conversation.

- **Real-Time Communication**: The app features real-time messaging, ensuring that messages are delivered and displayed instantly to all participants in a chat.

- **Message History**: Users can view their chat history, allowing them to catch up on previous conversations whenever they log in.

- **User Profiles**: Each user has a profile that includes their display name and profile picture, enhancing personalization and user recognition.

## Tech Stack

- **Frontend**: The frontend is built using React.js, a popular JavaScript library for building user interfaces.

- **Backend**: The backend is developed using Node.js and Express, providing the server-side logic for handling user authentication, messaging, and chatroom management.

- **Database**: MongoDB is used as the database to store user information, chat messages, and other relevant data.

- **Real-Time Communication**: Socket.io is integrated into the application to facilitate real-time messaging and notifications.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/talk-hub.git
   ```

2. Navigate to the project directory:
   ```
   cd React-ChatApp
   ```

3. Install the dependencies for both the frontend and backend:
   ```
   first in React-ChatApp
   npm install
   cd frontend
   npm install
   ```

4. Set up your MongoDB database:
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

5. Start the backend server:
   ```
   cd backend
   npm start
   ```

6. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```

7. Access the application by opening your browser and navigating to `http://localhost:3000`.

## Usage

1. **Sign Up / Log In**: Create an account using your email and password or log in if you already have an account.

2. **Group Chats**: Create a new group chat or join an existing one by selecting the group chat option and inviting your friends.

3. **One-on-One Chats**: Start a private conversation by selecting a friend from your contacts and initiating a chat.

4. **Messaging**: Once in a chat, type your message in the input field and press Enter to send. Messages will be displayed in real-time to all participants.

5. **Profile**: You can edit your profile by uploading a profile picture and updating your display name.

## Acknowledgments

This project was made possible by the contributions of the open-source community and the following technologies:

- React.js
- Node.js
- Express
- MongoDB
- Socket.io

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this readme template according to your project's specific details and needs. Good luck with your Talk-Hub Chat Web App!
