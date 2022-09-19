import { EXTENDED_CLIENT } from "../../index.js";

export class Command {
    
    /** 
     * This class will handle all client commands, with in parameter
     * user's permissions, the category of the command, the command 
     * data, and the callback
     * 
     * Cette class va gérer toutes les commandes du client, avec en paramètre
     * les permissions d'utilisateur, la catégorie de la commande, les données de commandes
     * et l'exécutable (callback)
     * 
     * Esta class manejará todos los comandos del cliente, con parámetros 
     * como los permisos del usuario, la categoría del comando, los datos del comando y el ejecutable (callback)
     * 
     * @param { { ?userPermssions: import("discord.js").PermissionResolvable, callback: Function, commandCategory: 'CHAT' | 'MODERATION' | 'PROTECTION' } & import("discord.js").ChatInputApplicationCommandData} commandOptions
    */

    constructor(commandOptions = { userPermssions, commandCategory, callback } )
    {
        EXTENDED_CLIENT.commands.set(commandOptions.name, commandOptions);
    }
}
