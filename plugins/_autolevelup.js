let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.db.data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
	if (before !== user.level) {
            m.reply(`
Parabéns!Você subiu de nível!
*${before}* -> *${user.level}*
digite *.profile* para ver mais informações
	`.trim())
        }
}

module.exports = handler
