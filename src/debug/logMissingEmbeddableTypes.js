const { getAllMissingTypes } = require('./getAllMissingTypes')

module.exports.logMissingEmbeddableTypes = schemas => {
  const allMissingTypes = getAllMissingTypes(schemas)

  const embeddableTypes = allMissingTypes
    .filter(({ embeddedObject }) => embeddedObject)
    .map(({ type }) => type)

  console.log(
    '> Missing embedded types:',
    JSON.stringify(embeddableTypes, null, 2)
  )
}
