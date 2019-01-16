const Discord = require('discord.js');

const config = require('./config/config.json');

const handleMemberJoin = require('./events/member-join');

const client = new Discord.Client();

client.on('guildMemberAdd', (member) => handleMemberJoin(member, config.welcome));

client.login(config.token);
