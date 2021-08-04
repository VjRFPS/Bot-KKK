let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('Não toleramos link aqui.Apague o link.\n\n')
    ${listAdmin}
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      conn.groupRemove(m.chat, [user])
    }
  }
  return true
}

module.exports = handler
