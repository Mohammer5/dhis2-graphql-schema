const { getMissingEmbeddableTypes } = require('./getMissingEmbeddableTypes')

module.exports.logMissingEmbeddableTypes = schemas => {
  const embeddableTypes = getMissingEmbeddableTypes(schemas)
  console.log('> Missing embedded types:')
  embeddableTypes.forEach(embeddableType => console.log(embeddableType))
}
