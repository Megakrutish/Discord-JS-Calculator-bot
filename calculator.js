const mathjs = require("mathjs")
const config = require("./config.json")
const { Client, GatewayIntentBits, Partials, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require('discord.js');

 // intents
 const client = new Client({
   intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ],  partials: [Partials.Channel] 

  });


  //embeds

  var screenEmbed = new EmbedBuilder()
  .setColor(1146986)
  .setTitle('Calculator')
  .setDescription('=>')

  var buttonRow1 = new ActionRowBuilder()
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR1")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("1")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR2")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("2")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR3")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("3")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("MULTIPLY")
          .setDisabled(false)
          .setStyle(ButtonStyle.Primary)
          .setLabel("*")
  )






  var buttonRow2 = new ActionRowBuilder()
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR4")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("4")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR5")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("5")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR6")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("6")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("DIVIDE")
          .setDisabled(false)
          .setStyle(ButtonStyle.Primary)
          .setLabel("/")
  )



  

  var buttonRow3 = new ActionRowBuilder()
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR7")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("7")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR8")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("8")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR9")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("9")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("PLUS")
          .setDisabled(false)
          .setStyle(ButtonStyle.Primary)
          .setLabel("+")
  )





  var buttonRow4 = new ActionRowBuilder()
  .addComponents(
      new ButtonBuilder()
          .setCustomId("HOOKOPEN")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("(")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("HOOKCLOSE")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel(")")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("NR0")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("0")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("MIN")
          .setDisabled(false)
          .setStyle(ButtonStyle.Primary)
          .setLabel("-")
  )









  var buttonRow5 = new ActionRowBuilder()
  .addComponents(
      new ButtonBuilder()
          .setCustomId("SQUARECARROT")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("√")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("EXPONENT")
          .setDisabled(false)
          .setStyle(ButtonStyle.Secondary)
          .setLabel("^")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("RESET")
          .setDisabled(false)
          .setStyle(ButtonStyle.Danger)
          .setLabel("reset")
  )
  .addComponents(
      new ButtonBuilder()
          .setCustomId("IS")
          .setDisabled(false)
          .setStyle(ButtonStyle.Success)
          .setLabel("=")
  )





client.on('ready',() => { //executes code when bot is finished loading
    console.log("Calculator Ready!") 
})




client.on("messageCreate", async (message) => {  //event handler
    if (message.content.startsWith("&calculator")) {
      message.channel.send({embeds:[screenEmbed],components:[buttonRow1,buttonRow2,buttonRow3,buttonRow4,buttonRow5]});
    }
})




client.on("interactionCreate",interaction => {
    if (interaction.isButton() == false){
        return
    }

    
    if (interaction.message.author.id == client.user.id && interaction.message.embeds[0].title == "Calculator"){
        
        var input = ""
        input = interaction.message.embeds[0].description
        var splittedInput = input.split("=>")
        input = splittedInput.join("")
        var currentDisplay = input
        
        var screenEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Calculator')
        .setDescription('=>')

        if (interaction.customId == "MULTIPLY"){
            var newDisplay = currentDisplay + "*"
        }
        if (interaction.customId == "DIVIDE"){
            var newDisplay = currentDisplay + "/"
        }
        if (interaction.customId == "PLUS"){
            var newDisplay = currentDisplay + "+"
        }
        if (interaction.customId == "MIN"){
            var newDisplay = currentDisplay + "-"
        }

        if (interaction.customId == "SQUARECARROT"){
            var newDisplay = currentDisplay + "sqrt("
        }
        if (interaction.customId == "EXPONENT"){
            var newDisplay = currentDisplay + "^"
        }
        if (interaction.customId == "HOOKOPEN"){
            var newDisplay = currentDisplay + "("
        }
        if (interaction.customId == "HOOKCLOSE"){
            var newDisplay = currentDisplay + ")"
        }


        if (interaction.customId == "NR0"){
            var newDisplay = currentDisplay + "0"
        }
        if (interaction.customId == "NR1"){
            var newDisplay = currentDisplay + "1"
        }
        if (interaction.customId == "NR2"){
            var newDisplay = currentDisplay + "2"
        }
        if (interaction.customId == "NR3"){
            var newDisplay = currentDisplay + "3"
        }
        if (interaction.customId == "NR4"){
            var newDisplay = currentDisplay + "4"
        }
        if (interaction.customId == "NR5"){
            var newDisplay = currentDisplay + "5"
        }
        if (interaction.customId == "NR6"){
            var newDisplay = currentDisplay + "6"
        }
        if (interaction.customId == "NR7"){
            var newDisplay = currentDisplay + "7"
        }
        if (interaction.customId == "NR8"){
            var newDisplay = currentDisplay + "8"
        }
        if (interaction.customId == "NR9"){
            var newDisplay = currentDisplay + "9"
        }
        


        if (interaction.customId == "RESET"){
            var newDisplay = ""
        }

        if (interaction.customId == "IS"){
            try{
            var output = mathjs.evaluate(currentDisplay)
            }catch{var output = "Syntax Error (Click RESET please!)"}
            
            var newDisplay = output
        }



        //setScreen
        var editedScreenEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Calculator')
            .setDescription('=> '+newDisplay)

        interaction.message.edit({embeds:[editedScreenEmbed]})
        interaction.deferUpdate()

    }
})


client.login(config.token) //Obvious