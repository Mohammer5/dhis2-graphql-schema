const {
  logExistingTypes,
  logMissingEmbeddableTypes,
  logMissingNonEmbeddableTypes,
} = require('./debug/index')
const { getSchemas } = require('./getSchemas/index')
const { getFieldType } = require('./parsing/index')

const main = async () => {
  const schemaList = await getSchemas()
  const schemas = {}

  for (const data of schemaList) {
    const { singular } = data
    const { properties, ...metaInfo } = data
    const fields = properties.map(property => getFieldType(property))

    const name = `${singular[0].toUpperCase()}${singular.slice(1)}`
    schemas[name] = {
      fields,
      metaInfo,
    }
  }

  logMissingEmbeddableTypes(schemas)
  // console.log('')
  // logMissingNonEmbeddableTypes(schemas)
  // logExistingTypes(schemas)
}

main().catch(console.error)
