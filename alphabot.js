require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.DISCORD_TOKEN);
client.on("ready", function (e) {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", function (msg) {
  let mesg = msg.content.toLowerCase();
  if (
    msg.content === "help" ||
    msg.content === "support" ||
    msg.content === "ticket" ||
    msg.content === "i want support"  ||
    msg.content === "need support"  
  ) {
    msg.reply("Hi, there!. \n Thank you for reaching us. Please open a new ticket on https://app.customersupportnetworks.com/ \n Atari Support");
  }
});
