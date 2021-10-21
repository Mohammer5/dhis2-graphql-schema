const { getAllMissingTypes } = require('./getAllMissingTypes')

module.exports.logMissingEmbeddableTypes = schemas => {
  const allMissingTypes = getAllMissingTypes(schemas)

  const embeddableTypes = allMissingTypes
    .filter(({ embeddedObject }) => embeddedObject)
    .map(({ klass }) => klass)

  console.log('> Missing embedded types:')
  embeddableTypes.forEach(embeddableType => console.log(embeddableType))
}
