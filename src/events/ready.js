import { Client, Collection, Interaction } from "discord.js";
import { EXTANDED_CLIENT } from "../../index.js";
import { Evenement } from "../structures/evenements.js";

export default new Evenement(
    {
        eventName: { 'ready': 0 },

        /**
         * @param { Interaction } interaction
         * @param { { commands: Collection, events: Collection } & Client } client
        */

        async callback (client, interaction) { 
            EXTANDED_CLIENT.commands.map(commandOptions => 
                {
                    EXTANDED_CLIENT.guilds.cache.map(async (guild) => { guild.commands.create(commandOptions)});
                }
            );
        }
    }
)
