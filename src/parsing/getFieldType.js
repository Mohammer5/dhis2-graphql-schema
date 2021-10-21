const { createFieldType: _createFieldType } = require('./createFieldType')
const { throwUnhandled } = require('./throwUnhandled')

const getKlassName = klass => {
  const matches = klass?.match(/(?<=[.])[a-zA-Z0-9]+$/)
  if (!matches?.length) return ''
  return matches[0]
}

module.exports.getFieldType = property => {
  const {
    name,
    klass,
    propertyType,
    itemPropertyType,
    itemKlass,
    required,
    embeddedObject,
    simple,
  } = property

  const createFieldType = ({ type }) => _createFieldType({ property, type })
  const klassName = getKlassName(klass)
  const itemKlassName = getKlassName(itemKlass)

  let nextConfig

  if ([propertyType, itemPropertyType].includes('CONSTANT')) {
    nextConfig = createFieldType({ type: `Enum` })
  }

  else if ([propertyType, itemPropertyType].includes('REFERENCE')) {
    nextConfig = createFieldType({ type: klassName })
  }

  else if ([propertyType, itemPropertyType].includes('COMPLEX')) {
    nextConfig = createFieldType({ type: klassName })
  }

  else if ([klassName, itemKlassName].includes('PeriodType')) {
    nextConfig = createFieldType({ type: klassName })
  }

  else if ([klassName, itemKlassName].includes('DimensionalKeywords')) {
    throwUnhandled(property)
  }

  else if ([propertyType, itemPropertyType].includes('DATE')) {
    // TODO: requires custom scalar type
    nextConfig = createFieldType({ type: 'Date' })
  }

  else if ([propertyType, itemPropertyType].includes('NUMBER')) {
    // @TODO: Create union type `union Number = Int | Float`
    nextConfig = createFieldType({ type: 'Number' })
  }

  else if ([klassName, itemKlassName].includes('String')) {
    nextConfig = createFieldType({ type: 'String' })
  }

  else if ([klassName, itemKlassName].includes('Boolean')) {
    nextConfig = createFieldType({ type: 'Boolean' })
  }

  else if ([klassName, itemKlassName].includes('Integer')) {
    nextConfig = createFieldType({ type: 'Int' })
  }

  else if ([klassName, itemKlassName].includes('Long')) {
    // TODO: requires custom scalar type
    nextConfig = createFieldType({ type: 'Long' })
  }

  if (nextConfig) {
    return nextConfig
  }

  throwUnhandled(property)
}
