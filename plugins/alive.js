const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["av", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Get system info
        const platform = "Heroku Platform"; // Fixed deployment platform
        const release = os.release(); // OS version
        const cpuModel = os.cpus()[0].model; // CPU info
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2); // Total RAM in MB
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB

        // Stylish and detailed system status message
        const status = `🌟 *Good ${
  new Date().getHours() < 12 ? 'Morning' : 
  (new Date().getHours() < 18 ? 'Afternoon' : 'Evening')
}, ${pushname}!* 💫
╭─❰ *𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄* ❱─┈⊷
┃ *✨𝖴ᴘᴛɪᴍᴇ* : *${runtime(process.uptime())}*
┃ *💾 𝖱ᴀᴍ ᴜsᴀɢᴇ* : *${usedMem}MB / ${totalMem}MB*
┃ *🧑‍💻𝖣ᴇᴘʟᴏʏᴇᴅ ᴏɴ* : *${platform}*
┃ *👨‍💻𝖮ᴡɴᴇʀ* : *𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑*
┃ *🧬𝖵ᴇʀsɪᴏɴ* : *1.𝟢.𝟢*
╰───────────┈⊷
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑`;
          
        // Contact message for verified context
        const verifiedContact = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄",
                    vcard: "BEGIN:VCARD\nVERSION:3.0\nFN: 𝙎𝙃𝙄𝙍𝘼𝙃_𝘼𝙄\nORG:𝙈𝘼𝙓𝙏𝙀𝘾𝙃 𝘿𝙀𝙑;\nTEL;type=CELL;type=VOICE;waid=256747122756:+256747122756\nEND:VCARD"
                }
            }
        };
        
        // Send image with caption first
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/0y0bgc.jpg` },  
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400964601488@newsletter',
                    newsletterName: '𝙑𝙀𝙄𝙒 𝘾𝙃𝘼𝙉𝙉𝙀𝙇',
                    serverMessageId: 143
                }
            }
        }, { quoted: verifiedContact });

        // Then send audio separately
        await conn.sendMessage(from, { 
            audio: { url: 'https://files.catbox.moe/eqfc2j.mp3' },
            mimetype: 'audio/mp4',
            ptt: true 
        }, { quoted: verifiedContact });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`🚨 *An error occurred:* ${e.message}`);
    }
});