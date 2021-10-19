const { getAllMissingTypes } = require('./getAllMissingTypes')

module.exports.logMissingNonEmbeddableTypes = schemas => {
  const allMissingTypes = getAllMissingTypes(schemas)

  const nonEmbeddableTypes = allMissingTypes
    .filter(({ embeddedObject }) => !embeddedObject)
    .map(({ type }) => type)

  console.log(
    '> Missing non-embedded types:',
    JSON.stringify(nonEmbeddableTypes, null, 2)
  )
}
