import { ExtandedClient } from "./src/structures/client.js";

export const EXTANDED_CLIENT = new ExtandedClient(
    {
        eventDir: '../events/',
        commandDir: '../commands/',
        clientToken: '',
        clientOptions: { intents: 32767, presence: { activities: [{ type: 'COMPETING', name: 'Sodium Developpement' }] } }
    }
);