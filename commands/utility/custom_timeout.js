const { SlashCommandBuilder, PermissionsBitField  } = require("discord.js");
const { PermissionFlagsBits } = require('discord-api-types/v10');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("custom_timeout")
    .setDescription("Times out a user for a customized duration")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("User to timeout")
        .setRequired(true),
    )
    .addNumberOption((option) =>
      option.setName("days").setDescription("Number of days to timeout"),
    )
    .addNumberOption((option) =>
      option.setName("hours").setDescription("Number of hours to timeout"),
    )
    .addNumberOption((option) =>
      option.setName("minutes").setDescription("Number of minutes to timeout"),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const user = await interaction.options.getUser("user");
    const days = interaction.options.getNumber("days") ? interaction.options.getNumber("days") : 0;
    const hours = interaction.options.getNumber("hours") ? interaction.options.getNumber("hours") : 0;
    const minutes = interaction.options.getNumber("minutes") ? interaction.options.getNumber("minutes") : 0;

    const member = await interaction.guild.members.fetch(user.id);
    if (!member)
      return await interaction.reply("This user is not within the server");

    const duration = ((days * 86400) + (hours * 3600 )+ (minutes * 60)) > 2419200 ? 2419200 : ((days * 86400) + (hours * 3600 ) + (minutes * 60)) * 1000;

    if (days < 0 || hours < 0 || minutes < 0) {
      return await interaction.reply(
        "Invalid timeout duration. Days, hours, or minutes cannot be negative values.",
      );
    }

    try {
      console.log(user);
      console.log(days);
      console.log(hours);
      console.log(minutes);

      console.log("duration:" + duration)
      await member.timeout(duration, "Bad behaviour >:(");
      if (duration != 2419200) {
      return await interaction.reply(`${user.tag} has been put in timeout for ${days} days, ${hours} hours, and ${minutes} minutes`)
      } else {
        return await interaction.reply(`${user.tag} has been put in timeout for the maximum possible time of 28 days!`)
      }
      
    } catch (error) {
      console.error(error);
    }
  },
};
