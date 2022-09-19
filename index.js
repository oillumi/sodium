import { ExtendedClient } from "./src/structures/client.js";

export const EXTENDED_CLIENT = new ExtendedClient(
    {
        eventDir: '../events/',
        commandDir: '../commands/',
        clientToken: '',
        clientOptions: { intents: 32767, presence: { activities: [{ type: 'COMPETING', name: 'Sodium Developpement' }] } }
    }
);
