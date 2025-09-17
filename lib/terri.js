const config = require('../config');
const anony = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        remoteJid: "status@broadcast"
    },
    message: {
        contactMessage: {
            displayName: "𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄",
            vcard: "BEGIN:VCARD\nVERSION:3.0\nFN: 𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄\nORG:𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑;\nTEL;type=CELL;type=VOICE;waid=254112192119:+256747122756\nEND:VCARD"
        }
    }
};
module.exports = {
    anony
};