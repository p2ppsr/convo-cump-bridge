module.exports = async (state, txid) => {
  try {
    console.log(`[-] ${txid}`)
    await state.delete({
        collection: 'messages',
        find: { _id: txid }
      })
  } catch (e) {
    console.error(`[!] ${txid}`)
    console.error(e)
  }
}
