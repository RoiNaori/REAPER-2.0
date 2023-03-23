module.exports = {
    name: "ping",
    description: "Check the bot's ping to Discord",
    execute(message, args) {
      message.channel.send(`Pong! Latency: ${Date.now() - message.createdTimestamp}ms`);
    }
  }
  