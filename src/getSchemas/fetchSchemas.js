const { fetchUrl } = require('./fetchUrl.js')

const url = 'https://debug.dhis2.org/dev/api/schemas.json'

const fetchSchemas = async () => {
  const { schemas } = await fetchUrl(url)
  return schemas
}

module.exports.fetchSchemas = fetchSchemas
