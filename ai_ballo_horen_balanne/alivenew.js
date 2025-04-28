//========= alive command ===========

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

| *අනි සුදු මන් ඉන්නවා මොකද ඔයා කරන්නේ 🌝💗* *ඇයි ඔයා මාව හෙව්වේ කියන්නකෝ පැටියෝ 😌* *මම තමා අපේ අයේෂ් අයියා හදපු ලස්සනම සුටි  බබා 🌝💗*

> 𝐐𝚄𝙴𝙴𝙽  𝐃𝙸𝙽𝚄𝚉𝚉  𝐌𝙳
`
return await conn.sendMessage(from,{image: {url: "https://i.ibb.co/C5CyjYNg/1234.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

