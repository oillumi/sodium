import { Client, Collection, Interaction } from "discord.js";
import { Evenement } from "../structures/evenements.js";

export default new Evenement(
    {
        eventName: { 'interactionCreate': 0 },

        /**
         * @param { Interaction } interaction
         * @param { { commands: Collection, events: Collection } & Client } client
        */

        async callback (client, interaction) 
        {
            if ( interaction.isCommand() && client.commands.get(interaction.commandName) )
            {
                if ( client.commands.get(interaction.commandName).userPermissions && !interaction.member.permissions.has(client.commands.get(interaction.commandName).userPermissions) ) 
                {
                    interaction.reply({ ephemeral: true, embeds: [{ title: 'Permission required  <:uncheck:941109969233788938>', description: 'This action or command require a specific permission, \nget the required role or ask a moderator for it.', color: 3092790 }] } )
                }
                else {
                    client.commands.get(interaction.commandName).callback(client, interaction);
                }
            }
        }
    }
)