const { getAllMissingTypes } = require('./getAllMissingTypes')

const logMissingTypes = (types, simples) => {
  types
    .filter(({ simple }) => simples ? simple : !simple)
    .forEach(({ klass }) => {
      const [klassName] = klass.match(/[^.]*$/)
      console.log(klassName)
    })
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

  console.log('> uniqueMissingGenericTypes', uniqueMissingGenericTypes)

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
  console.log('> Missing non-embedded generic types');
  Object.entries(fieldsWithMissingNonEmbeddableGenericType).forEach(
    ([type, schemasWithType], index) => {
      index > 0 && console.log('')
      console.log(`> The type ${type} is present in the following schemas/fields:`)
      Object.entries(schemasWithType).forEach(
        ([schemaWithType, types]) => {
          console.log(`  > Schema: ${schemaWithType}`)
          console.log(`    > Types:`, JSON.stringify(types).replace(/"/g, '').replace(/,/g, ', '))
        }
      )
    }
  )
}
