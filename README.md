# Gifoli Telegram Bot

Gifoli is a Telegram bot designed to fetch and share GIFs from GIPHY API. The bot uses the user's chat input as query parameter to search relevant GIFs from GIPHY.

## Tech Stack

This bot is built using the following technologies:

- Node.js: JavaScript runtime environment that executes JavaScript code outside a web browser.
- TelegramBot API: To interact with Telegram's bot API.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- axios: A promise-based HTTP client for the browser and node.js.
- MongoDB: A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

## Current Status

The bot now successfully connects to MongoDB using Mongoose, fetches random GIFs through the '/random' button handler and fixes the Mongoose connection type error.

## Contributing

Contributions to this project are welcomed. Whether it's improving the documentation, adding new features, reporting bugs or spreading the word. Any kind of help is appreciated!

## Getting Started

1. Clone the repository:

    ```
    git clone https://github.com/your-github-username/gifoli-telegram-bot.git
    ```

2. Install the dependencies:

    ```
    npm install
    ```

3. Start MongoDB service on your machine.

4. Run the bot:

    ```
    npm start
    ```

## Contact

If you have any questions, feel free to reach out to me at bahadorifar.farzad@gmail.com
