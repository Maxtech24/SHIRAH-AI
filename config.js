const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {


 // ===== BOT CORE SETTINGS =====
SESSION_ID: process.env.SESSION_ID || "Veronica;;;PsByXA5J#fYHokFdBDYM0E8GjoMwg9ieHrc3UAe0HKyvpIbSx80c",
    
PREFIX: getConfig("PREFIX") || ".",

CHATBOT: getConfig("CHATBOT") || "off",

BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄",

MODE: getConfig("MODE") || process.env.MODE || "public",// Bot mode: public/private/group/inbox

BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",


// = OWNER & DEVELOPER SETTINGS =


OWNER_NUMBER: process.env.OWNER_NUMBER || "256747122756",

OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑",
         
DEV: process.env.DEV || "256747122756",
DEVELOPER_NUMBER: '256747122756@s.whatsapp.net',


// === AUTO-RESPONSE SETTINGS ===


AUTO_REPLY: process.env.AUTO_REPLY || "false",

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑*",

READ_MESSAGE: process.env.READ_MESSAGE || "false",

REJECT_MSG: process.env.REJECT_MSG || "𝗔𝗠 *𝗦𝗛𝗜𝗥𝗔𝗛_𝗔𝗜*  📵 𝗦𝗧𝗢𝗣 𝗖𝗔𝗟𝗟𝗜𝗡𝗚 𝗠𝗬 𝗢𝗪𝗡𝗘𝗥 𝗜𝗦 𝗦𝗧𝗜𝗟𝗟 𝗕𝗨𝗦𝗬 𝗜𝗙 𝗬𝗢𝗨𝗥 𝗡𝗘𝗘𝗗 𝗛𝗘𝗟𝗣 𝗧𝗬𝗣𝗘 𝗗𝗢𝗡'𝗧 𝗖𝗔𝗟𝗟  🚨 𝗜𝗙 𝗬𝗢𝗨 𝗧𝗥𝗬 𝗔𝗚𝗜𝗡 𝗬𝗢𝗨 𝗪𝗘𝗟𝗟 𝗕𝗘 𝗕𝗟𝗢𝗖𝗞𝗘𝗗 🚫*",


// = REACTION & STICKER SETTINGS =


AUTO_REACT: process.env.AUTO_REACT || "false",

OWNER_REACT: process.env.OWNER_REACT || "false",
              
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",

CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",

STICKER_NAME: process.env.STICKER_NAME || "𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄",

AUTO_STICKER: process.env.AUTO_STICKER || "false",


// ===== MEDIA & AUTOMATION =====


AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

AUTO_TYPING: process.env.AUTO_TYPING || "false",

MENTION_REPLY: process.env.MENTION_REPLY || "false",

MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/mn9fgn.jpg",


// == SECURITY & ANTI-FEATURES ==


ANTI_DELETE: process.env.ANTI_DELETE || "true",

ANTI_CALL: process.env.ANTI_CALL || "true",

ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

ANTI_LINK: process.env.ANTI_LINK || "false",

ANTI_VV: process.env.ANTI_VV || "true",

DELETE_LINKS: process.env.DELETE_LINKS || "false",

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)

ANTI_BOT: process.env.ANTI_BOT || "false",

PM_BLOCKER: process.env.PM_BLOCKER || "true",


// == BOT BEHAVIOR & APPEARANCE ==


DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑*",

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
              
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",

AUTO_BIO: process.env.AUTO_BIO || "false",

WELCOME: process.env.WELCOME || "false",

GOODBYE: process.env.GOODBYE || "false",

ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
};
        
