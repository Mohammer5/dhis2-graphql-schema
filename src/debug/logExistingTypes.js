module.exports.logExistingTypes = schemas => {
  const existingTypes = Object
    .keys(schemas)
    .sort((left, right) => left.localeCompare(right))

  console.log('> Existing types:', existingTypes)
}
