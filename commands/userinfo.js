module.exports = {
  name: 'userinfo',
  description: 'Получение информации о пользователе.',
  options: [
    {
      name: 'user',
      type: 6, //USER TYPE
      description: 'Пользователь, о котором вы хотите получить информацию',
      required: true,
    },
  ],
  execute(interaction, client) {
    const member = interaction.options.get('пользователь').value;
    const user = client.users.cache.get(member);

    interaction.reply({
      content: `имя: ${user.username}, ID: ${user.id},  аватар: ${user.displayAvatarURL({dynamic: true})}`,
      ephemeral: true,
    });
  },
};
