const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "script",
    alias: ["repo", "sc", "info", "source"],
    desc: "Get SHIRAH-AI bot repository information",
    react: "📦",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply, pushName, prefix }) => {
    const githubRepoURL = 'https://github.com/Maxtech24/SHIRAH-AI';
    const repoImage = 'https://files.catbox.moe/0y0bgc.jpg'; // Replace with SHIRAH-AI specific image
    const repoAudio = 'https://files.catbox.moe/eqfc2j.mp3'; // Replace with SHIRAH-AI specific audio

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/) || [];

        if (!username || !repoName) {
            throw new Error("Invalid GitHub URL format");
        }

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `
*👋 Hello ${pushName || 'User'}! Welcome to SHIRAH-AI* 🎀

> *An elegant, feature-rich WhatsApp bot with amazing capabilities*

*Thank you for using SHIRAH-AI!* 💖

> *Don't forget to star ⭐ and fork 🍴 the repository*

${githubRepoURL}
──────────────────
${readMore}
*📦 Repository Info:*
\`Name:\` ${repoData.name || 'SHIRAH-AI'}
\`Owner:\` ${repoData.owner?.login || 'Maxtech24'} 👨‍💻
\`Description:\` ${repoData.description || 'A sophisticated WhatsApp bot with advanced features'}
\`Stars:\` ${repoData.stargazers_count || 0} ⭐
\`Forks:\` ${repoData.forks_count || 0} 🍴
\`Watchers:\` ${repoData.watchers_count || 0} 👀
\`Open Issues:\` ${repoData.open_issues_count || 0} 🐛
\`Language:\` ${repoData.language || 'JavaScript'} 
\`Last Updated:\` ${new Date(repoData.updated_at).toLocaleDateString()}
──────────────────
*💫 Bot Features:*
• Advanced AI capabilities
• Media processing tools
• Group management
• Fun commands & games
• Download utilities
• Sticker creation
• And much more!

*🔧 Setup Guide:*
1. Fork the repository
2. Deploy to your preferred hosting
3. Configure environment variables
4. Scan QR code to connect

Use *${prefix}help* to see all commands!

> *Powered by Maxtech24* 🎐`;
  
        // Contact message for context
        const contactContext = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "SHIRAH-AI BOT",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:SHIRAH-AI\nORG:SHIRAH-AI Bot;\nTEL;type=CELL;type=VOICE;waid=unknown:0000000000\nEND:VCARD`
                }
            }
        };

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363400964601488@newsletter',
                newsletterName: '☇ SHIRAH-AI Support ⚡',
                serverMessageId: 143
            }
        };

        // Send an image with the formatted info as caption
        await conn.sendMessage(from, {
            image: { url: repoImage },
            caption: formattedInfo,
            contextInfo: contextInfo
        }, { quoted: contactContext });

        // Send the audio file
        await conn.sendMessage(from, {
            audio: { url: repoAudio },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: contextInfo
        }, { quoted: contactContext });

    } catch (error) {
        console.error("Error in script command:", error);
        
        // Fallback message if GitHub API fails
        const fallbackInfo = `
*SHIRAH-AI Repository Information* 📦

*Repository:* https://github.com/Maxtech24/SHIRAH-AI
*Owner:* Maxtech24 👨‍💻

*About:* A sophisticated WhatsApp bot with advanced features including AI capabilities, media processing, group management, and more!

*⭐ Star the repo to show your support!*
*🍴 Fork it to create your own version!*

*🔧 Setup Instructions:*
1. Visit the GitHub repository
2. Follow the setup guide in README.md
3. Configure your environment variables
4. Deploy and enjoy!

Use *${prefix}help* to see all available commands.

> *Powered by Maxtech24* 🎐`;

        try {
            await conn.sendMessage(from, { 
                image: { url: repoImage },
                caption: fallbackInfo
            }, { quoted: mek });
        } catch (sendError) {
            console.error("Failed to send fallback message:", sendError);
            await conn.sendMessage(from, { 
                text: "Sorry, I couldn't fetch the repository details. Please visit https://github.com/Maxtech24/SHIRAH-AI for more information." 
            }, { quoted: mek });
        }
    }
});