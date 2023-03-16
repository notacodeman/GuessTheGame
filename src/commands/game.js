const { ChatInputCommand } = require('../classes/Commands');
const { EmbedBuilder } = require('discord.js');
module.exports = new ChatInputCommand({
  global: true,
  cooldown: {
    // Use channel cooldown type instead of default member
    type: 'channel',
    usages: 1,
    duration: 30
  },
  clientPerms: [ 'EmbedLinks' ],
  alias: [ 'playgtg' ],
  data: { 
    name: 'game',
    description: 'Creates an embed for today\'s game' 
  },

  run: async (client, interaction) => {
    interaction.reply({ embeds:[gameembed] });
      const gameembed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Guess The Game #')
      .setURL('https://guessthe.game/?fpg=')
      .setAuthor({ name: 'Sam Stiles', url: 'https://twitter.com/SamMakesGames/' })
      .setDescription('Creates Embed for Guess The Game')
      .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
      .setImage('https://guessthe.game/games/../1.webp')
    }
  });

/*
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 1,
          "label": `1 :POGGERS:`,
          "custom_id": `row_0_button_0`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 1,
          "label": `2`,
          "custom_id": `row_0_button_1`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 1,
          "label": `3`,
          "custom_id": `row_0_button_2`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 1,
          "label": `4`,
          "custom_id": `row_0_button_3`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 1,
          "label": `5`,
          "custom_id": `row_0_button_4`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 1,
          "label": `6`,
          "custom_id": `row_0_button_5`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Guess The Game #305`,
      "description": "",
      "color": 0x00FFFF,
      "image": {
        "url": `https://guessthe.game/games/306/1.webp`,
        "height": 0,
        "width": 0
      },
      "author": {
        "name": `Sam Stiles`,
        "url": `https://twitter.com/SamMakesGames/`,
        "icon_url": `https://twitter.com/SamMakesGames/photo`
      },
      "url": `https://guessthe.game/?fpg=305`
    }
  ]
});
*/