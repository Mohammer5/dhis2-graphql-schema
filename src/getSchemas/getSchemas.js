const { Buffer } = require('buffer')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

const SERVER = 'https://debug.dhis2.org/dev'
const USERNAME = 'admin'
const PASSWORD = 'district'
const LOCAL_SCHEMA_PATH = path.join(__dirname, '../../.schema.json')

module.exports.getSchemas = async () => {
  // saves a lot of time while debugging
  const forceLoadSchema = process.argv.includes('--force-load-schema')
  const hasLocalSchema = forceLoadSchema ? false : fs.existsSync(LOCAL_SCHEMA_PATH)
  return await (hasLocalSchema ? readSchemas() : fetchSchemas())
}

function fetchUrl(url) {
  const binary = Buffer.from(`${USERNAME}:${PASSWORD}`, 'binary')
  const base64 = binary.toString('base64')
  const Authorization = `Basic ${base64}`
  const headers = { Authorization }
  const req = fetch(url, { headers })
  return req.then(r => r.json())
}

async function fetchSchemas() {
  const { schemas } = await fetchUrl(`${SERVER}/api/schemas.json`)
  fs.writeFileSync(LOCAL_SCHEMA_PATH, JSON.stringify(schemas, null, 2))
  return schemas
}

async function readSchemas() {
  const schema = fs.readFileSync(LOCAL_SCHEMA_PATH, { encoding: 'utf8' })
  return JSON.parse(schema)
}
