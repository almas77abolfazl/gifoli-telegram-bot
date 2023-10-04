// Import the required packages
import TelegramBot from "node-telegram-bot-api";
import mongoose from "mongoose";
import axios from "axios";


const GIPHY_API_KEY = "Rvo4liHDaw2Fri9wB2K32LaJOE1hybpa";

// Connect to MongoDB
const dbUri = "mongodb://localhost/test";

mongoose
  .connect(dbUri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

interface MongooseConnectOptions {
  dbName: string;
}

const options: MongooseConnectOptions = {
  dbName: "test",
};

mongoose.connect(dbUri, options);

// Start the bot
const bot = new TelegramBot("6359140235:AAFjXZc7FleF9W_Te_rYtNMvAc_jCm5l7B8", {
  polling: true,
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "/random") {
    getRandomGif(chatId);
  } else {
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
  }
});

function getRandomGif(chatId) {
  axios
    .get(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`)
    .then((response) => {
      const randomGif = response.data.data;
      bot.sendDocument(chatId, randomGif.images.original.url);
    });
}
