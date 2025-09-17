const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["terri","whois"], 
    react: "💦",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━〔 𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄 〕━┈⊷*
*👋 HELLO _${pushname}_*
*╰────────────┈⊷*

> *╭━━〔 MY ABOUT 〕━┈⊷*
> *┃★╭──────────*
> *┃★│* *ᴄʀᴇᴀᴛᴇʀ : 𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑*
> *┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : SHAFANI*
> *┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ :𝙈𝘼𝙓𝙏𝙀𝘾𝙃 *
> *┃★│* *ᴀɢᴇ : 19 ʏᴇᴀʀ*
> *┃★│* *ᴄɪᴛʏ : 👣*

*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑*
*•────────────•⟢*
`

// Use the same approach as menu2.js for sending messages
await conn.sendMessage(from, {
    image: {url: `https://files.catbox.moe/0y0bgc.jpg`},
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363400964601488@newsletter',
            newsletterName: '𝙑𝙀𝙄𝙒 𝘾𝙃𝘼𝙉𝙉𝙀𝙇',
            serverMessageId: 999
        }
    }
}, { quoted: mek });

} catch (e) {
console.log(e)
reply(`${e}`)
}
})