Discord Timeout Bot

This Discord bot allows users with permissions to moderate members to timeout users with more specific and custom times, instead of the predefined ones offered by Discord.

### Motivation
The motivation behind this project stems from the limitations of the predefined timeout durations provided by Discord moderation tools. The default options of 60 seconds, 5 minutes, 10 minutes, 1 hour, 1 day, and 1 week might not always suit the needs of every server moderator. This bot provides the flexibility to set custom timeout durations, catering to the specific requirements of each server.
Technologies Used

    discord.js: A powerful JavaScript library for interacting with the Discord API.
    Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.

### Getting Started
To use this bot, you'll need to set it up yourself and create your own config.json file in the root folder.

### Command list
/custom_timeout 'user' 'days' 'hours' 'minutes'
  Timeout an user by a specific time. (28 days max set by Discord)
/ping
  Check if bot is active

Contributions are welcome! Feel free to fork the repository, make improvements, and submit pull requests.
License

This project is licensed under the MIT License.
