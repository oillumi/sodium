import { Client, Collection, CommandInteraction } from "discord.js";
import { Command } from "../structures/commands.js";

export default new Command(
    {
        name: 'clear',
        description: 'Clear an amount of messages',
        options: [
            {
                name: 'amount',
                description: 'Amount of messages you wanna clear.',
                type: 'INTEGER',
                required: true,
                min_value: 1,
                max_value: 100
            }
        ],
        userPermssions: 'MANAGE_MESSAGES',
        commandCategory: 'MODERATION',

        /**
         * @param { { commands: Collection, events: Collection } & Client } client
         * @param { CommandInteraction } interaction
        */
        
        async callback (client, interaction) 
        {
            
        }
    }
)