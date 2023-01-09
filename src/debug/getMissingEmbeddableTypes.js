const { getAllMissingTypes } = require('./getAllMissingTypes')

module.exports.getMissingEmbeddableTypes = schemas => {
  const allMissingTypes = getAllMissingTypes(schemas)

  return allMissingTypes
    .filter(({ embeddedObject }) => embeddedObject)
    .map(({ klass }) => klass)
}
