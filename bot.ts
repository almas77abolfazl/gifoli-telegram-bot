// Import the required packages
const TelegramBot = require("node-telegram-bot-api");
const mongoose = require("mongoose");
const axios = require("axios");
const GIPHY_API_KEY = "Rvo4liHDaw2Fri9wB2K32LaJOE1hybpa";

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mybotdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Connection failed...", err));

// Start the bot
const bot = new TelegramBot("6359140235:AAFjXZc7FleF9W_Te_rYtNMvAc_jCm5l7B8", {
  polling: true,
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const query = msg.text;

  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=1`
    )
    .then((response) => {
      const gifUrl = response.data.data[0].images.original.url;
      bot.sendDocument(chatId, gifUrl);
    })
    .catch((error) => {
      console.error(error);
      bot.sendMessage(chatId, "Oops, something went wrong!");
    });
});
