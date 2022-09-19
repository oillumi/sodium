import { Client, Collection } from "discord.js";
import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export class ExtendedClient extends Client {
    
    constructor({ clientOptions, clientToken, eventDir, commandDir }){

        super(clientOptions);

        this.events = new Collection();
        this.commands = new Collection();
        
        void this.#init({ token: clientToken, commandDir: commandDir, eventDir: eventDir });

    }

    async #init({ token, commandDir, eventDir }) {

        await this.#eventsInit(eventDir);
        await this.#commandsInit(commandDir);
        await this.login(token);

    }

    async #commandsInit (commandDir) {
        const _COMMANDS = readdirSync( join(dirname(fileURLToPath(import.meta.url)), commandDir) ).filter( async file => 
            {
                file ? file.endsWith('.js') ? (await import(commandDir + file))?.default : null : null;
            }
        )
    }

    async #eventsInit(eventDir) {
        const _EVENTS = readdirSync( join(dirname(fileURLToPath(import.meta.url)), eventDir) ).filter( async file => 
            {
                file ? file.endsWith('.js') ? (await import(eventDir + file))?.default : null : null;
            }
        )
    }

}
