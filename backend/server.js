const yas = require('youtube-audio-server')

// Start listener (REST API).
const port = process.env.PORT || 8080
yas.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}.`)
})
