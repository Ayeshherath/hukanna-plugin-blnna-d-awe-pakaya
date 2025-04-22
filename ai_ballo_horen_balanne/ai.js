const config = require('../config')
const {cmd, commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    alias: ["sula6"], 
    react: "📑",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // Check if the user is asking who made it
        if (q.toLowerCase().includes("කවුද හැදුවේ") || q.toLowerCase().includes("who made this")) {
            return reply(`මාව හැදුවේ 𝐐𝚄𝙴𝙴𝙽  𝐃𝙸𝙽𝚄𝚉𝚉`)
        }

        // Normal AI response
        let data = await fetchJson(https://dark-shan-yt.koyeb.app/ai/gemini?q=${q})
        return reply(` ${data.data}`)
    } catch(e) {
        console.log(e)
        reply(පක් වෙලා😂\n${e})
    }
})
