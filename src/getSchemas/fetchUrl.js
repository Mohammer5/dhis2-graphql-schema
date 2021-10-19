const { Buffer } = require('buffer')
const fetch = require('node-fetch')

const username = 'admin'
const password = 'district'

const fetchUrl = url => {
  const binary = Buffer.from(`${username}:${password}`, 'binary')
  const base64 = binary.toString('base64')
  const Authorization = `Basic ${base64}`
  const headers = { Authorization }
  const req = fetch(url, { headers })
  return req.then(r => r.json())
}

module.exports.fetchUrl = fetchUrl
