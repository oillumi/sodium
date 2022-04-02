import { Client, Collection, Interaction } from "discord.js";
import { Evenement } from "../structures/evenements.js";

export default new Evenement(
    {
        eventName: { 'ready': 0 },

        /**
         * @param { Interaction } interaction
         * @param { { commands: Collection, events: Collection } & Client } client
        */

        async callback (client, interaction) { return console.log(`\n\x1b[36mEvent \x1b[37m➥  \x1b[32mClient is now ready !\n\x1b[0m`); }
    }
)