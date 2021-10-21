const primitiveTypes = ['Enum', 'String', 'Int', 'Boolean', 'ID', 'Long', 'Date', 'Number']

module.exports.getAllMissingTypes = schemas => {
  return Object
    .values(schemas)
    .reduce(
      (all, schema) => {
        return [
          ...all,
          ...schema.fields.map(({ type, ...rest }) => ({
            ...rest,
            type: type.replace(/[\[\]!]/g, ''),
          })),
        ]
      },
      []
    )
    .filter(({ type }) => !schemas[type])
    .filter(({ type }) => !primitiveTypes.includes(type))
    .filter(onlyUniqueProp('type'))
}

function onlyUniqueProp(prop) {
  return (value, index, self) => {
    const curIndex = self.findIndex(cur => cur[prop] === value[prop])
    return curIndex === index
  }
}
