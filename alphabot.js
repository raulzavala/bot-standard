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
    mesg === "help" ||
    mesg === "support" ||
    mesg === "ticket" ||
    mesg === "i want support"  ||
    mesg === "need support"  
  ) {
    msg.reply("Hi, there!. \n\n Thank you for reaching us. Please open a new ticket on https://app.customersupportnetworks.com/ or send us an email to support@atari.com \n\n Atari Support");
  }
});
