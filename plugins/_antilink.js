let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('Não toleramos link de outros grupos aqui.Apague o link.\n\n')
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      conn.groupRemove(m.chat, [m.sender])
    }
  }
  return true


}

module.exports = handler
