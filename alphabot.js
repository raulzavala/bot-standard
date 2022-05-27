require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.login(process.env.DISCORD_TOKEN);
// Notify successful connection via console
client.on("ready", function (e) {
  console.log(`Logged in as ${client.user.tag}!`);
});
// Wait for message events, check content for match,
// respond cordially to user via reply.
client.on("message", function (msg) {
  if (msg.content === "!Help") {
    msg.reply("Howdy!");
  }
});
