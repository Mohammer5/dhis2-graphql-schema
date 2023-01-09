const { getAllMissingTypes } = require('./getAllMissingTypes')

const logMissingTypes = (types, simples) => {
  const toLog = types
    .filter(({ simple }) => simples ? simple : !simple)
    .map(({ klass }) => {
      const [klassName] = klass.match(/[^.]*$/)
      return klassName
    })

  console.log(JSON.stringify(toLog, null, 2))
}

module.exports.logMissingNonEmbeddableTypes = schemas => {
  const allMissingTypes = getAllMissingTypes(schemas)

  const fieldsWithMissingNonEmbeddableGenericType = Object.entries(schemas).reduce(
    (acc, [, cur]) => {
      const nextFields = cur.fields
        .filter(field => ['Set', 'List', 'Object'].includes(field.type))
        .filter(field => (
          allMissingTypes.find(({ type }) => type === field.type)
          && !field.embeddedObject
        ))

      nextFields.forEach(field => {
        if (!acc[field.type]) acc[field.type] = {}

        if (!acc[field.type][cur.metaInfo.name]) {
          acc[field.type][cur.metaInfo.name] = []
        }

        if (!acc[field.type][cur.metaInfo.name].includes(field.name)) {
          acc[field.type][cur.metaInfo.name].push(field.name)
        }
      })

      return acc
    },
    {}
  )

  const allMissingGenericTypes = Object.values(fieldsWithMissingNonEmbeddableGenericType).reduce(
    (acc, cur) => {
      const allFields = Object.values(cur).reduce(
        (accFields, curFields) => [...accFields, ...curFields]
      )

      return [...acc, ...allFields]
    },
    []
  )
  const uniqueMissingGenericTypes = [...new Set(allMissingGenericTypes)].sort(
    (left, right) => left.localeCompare(right)
  )

  const nonEmbeddableTypes = allMissingTypes
    .filter(({ embeddedObject, type }) => (
      !embeddedObject &&
      !['Set', 'List', 'Object'].includes(type)
    ))

  console.log('> Missing non-embedded types (simple):')
  logMissingTypes(nonEmbeddableTypes, true)
  console.log('')
  console.log('> Missing non-embedded types (non-simple):')
  logMissingTypes(nonEmbeddableTypes, false)

  console.log('')
  console.log('> uniqueMissingGenericTypes', uniqueMissingGenericTypes)

  console.log('')
  console.log('> Missing non-embedded generic types');
  Object.entries(fieldsWithMissingNonEmbeddableGenericType).forEach(
    ([type, schemasWithType], index) => {
      index > 0 && console.log('')
      console.log(`> The type ${type} is present in the following schemas/fields:`)
      Object.entries(schemasWithType).forEach(
        ([schemaWithType, properties]) => {
          console.log(`  > Schema: ${schemaWithType}`)
          console.log(
            `    > Properties:`,
            JSON.stringify(properties, null, 2)
              .replace(/"/g, '')
              .replace(/,/g, ', ')
              .replace(/\n\s+([a-zA-Z])/g, '\n        $1')
              .replace(']', '      ]')
          )
        }
      )
    }
  )
}
