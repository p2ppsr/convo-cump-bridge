module.exports = {
  query: JSON.stringify({
    v: 3,
    q: {
      collection: 'messages',
      find: {},
      project: { sender: 1 },
      limit: 10
    }
  }, null, 2),
  socket: JSON.stringify({
    v: 3,
    q: {
      find: {}
    }
  }, null, 2)
}
