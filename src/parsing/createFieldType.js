module.exports.createFieldType = ({ property, type }) => {
  if (false) {
    console.log('> property:', property)
    process.exit()
  }

  const {
    name,
    klass,
    simple,
    required,
    propertyType,
    embeddedObject,
  } = property

  const gqlType =
    `${(propertyType === 'COLLECTION' ? `[${type}]` : type)}${required ? '!' : ''}`

  return ({
    gqlType, 
    type,
    name,
    klass,
    simple,
    required,
    embeddedObject,
  })
}
