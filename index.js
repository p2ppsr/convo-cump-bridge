module.exports = {
  bridgeport: '0.0.1',
  name: 'Convo User Messages Protocol',
  description: 'Find messages from the Convo Messenger application',
  version: '0.1.0',
  routes: [],
  requestTransformer: x => x,
  responseTransformer: x => x,
  defaultQuery: JSON.stringify({
    v: 3,
    q: {
      collection: 'messages',
      find: {},
      project: { sender: 1 },
      limit: 10
    }
  }, null, 2),
  defaultSocket: JSON.stringify({
    v: 3,
    q: {
      find: {}
    }
  }, null, 2),
  readme: `
# Convo Messages

> A collection of all Convo messages registered on the Bitcoin SV blockchain`
}
