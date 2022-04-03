### Sodium Client

![discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white) ![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## ➥ English
Sodium is an advanced open-source client template for 13.0.6 version of Discord. It's a strict typed client like TypeScript but only made with NodeJs. Sodium has multiple advanced handlers and classes for: Events, Commands, and fully customable in the client index.

## ➥ Français
Sodium est un template open-source de client pour la version 13.0.6 de Discord. C'est un client strictement typée comme TypeScript mais fait uniquement avec NodeJs. Sodium a plusieurs gestionnaires avancés et des classes pour: évènements, commands et est entièrement personnalisable dans l'index du client.

## ➥ Espagñol

Sodium es una plantilla de cliente avanzada de código abierto para la versión 13.0.6 de discord. Es de tipo estricto como TypeScript pero hecho con NodeJs. Sodium tiene múltiples manejadores avanzados y clases para: Eventos, Comandos, y totalmente personalizable en el índice del cliente.

### How to use it
```js
import { ExtandedClient } from "./src/structures/client.js";

export const EXTANDED_CLIENT = new ExtandedClient(
    {
        eventDir: '../events/', // Events file
        commandDir: '../commands/', // Command file
        clientToken: '', // You're client token
        clientOptions: { intents: 32767, presence: { activities: [{ type: 'COMPETING', name: 'Sodium Developpement' }] } } // Options you want (32767 intents to get all intents)
    }
);
```
