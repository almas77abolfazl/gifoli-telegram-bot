// Import the required packages
const TelegramBot = require('node-telegram-bot-api');
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const GIPHY_API_KEY = 'Rvo4liHDaw2Fri9wB2K32LaJOE1hybpa';
// Connect to MongoDB
const uri = "mongodb://localhost:27017/mybotdb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
    console.log('Connected to MongoDB');
    // Start the bot
    const bot = new TelegramBot('6359140235:AAFjXZc7FleF9W_Te_rYtNMvAc_jCm5l7B8', { polling: true });
    //  bot.onText(/\/start/, (msg) => {
    //   const chatId = msg.chat.id;
    //   const gifUrl = 'http://path-to-your-gif.com/your-gif.gif';
    //   bot.sendMessage(chatId, gifUrl);
    // });
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const query = msg.text;
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=1`)
            .then(response => {
            const gifUrl = response.data.data[0].images.original.url;
            bot.sendDocument(chatId, gifUrl);
        })
            .catch(error => {
            console.error(error);
            bot.sendMessage(chatId, 'Oops, something went wrong!');
        });
    });
});
