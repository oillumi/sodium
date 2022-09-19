import { EXTENDED_CLIENT } from "../../index.js";

export class Evenement {

    /**
     * This class will handle all client evenements, with in parameter
     * the name of the event, and the callback
     * 
     * Cette class va gérer tout les évènements du client, avec en paramètre
     * le nom de l'évènement et son exécutable (callback)
     * 
     * Esta clase manejará todos los eventos del cliente, con los siguientes parámetros
     * el nombre del evento y su ejecutable (callback)
     * 
     * @param { { eventName: import("discord.js").ClientEvents, callback: Function } } evenementOptions
    */

    constructor(evenementOptions = { eventName, callback }) {
        EXTENDED_CLIENT.events.set(Object.keys(evenementOptions.eventName)[0], evenementOptions);
        EXTENDED_CLIENT.on(Object.keys(evenementOptions.eventName)[0], async (...args) => evenementOptions.callback(EXTENDED_CLIENT, ...args));
    }
}
