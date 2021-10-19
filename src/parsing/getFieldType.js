module.exports.getFieldType = property => {
  const {
    name,
    klass,
    propertyType,
    itemKlass,
    required,
    embeddedObject,
  } = property

  const createFieldType = ({ type }) => ({
    name,
    klass,
    type: required ? `${type}!` : type,
    embeddedObject,
  })

  const [klassName] = klass.match(/(?<=[.])[a-zA-Z0-9]+$/)

  if (klassName === 'DimensionalKeywords') {
    console.log('> klassName === DimensionalKeywords')
    console.log(property)
    process.exit()
  }

  const [itemKlassName] = itemKlass
    ? itemKlass.match(/(?<=[.])[a-zA-Z0-9]+$/)[0]
    : []

  if (itemKlassName === 'DimensionalKeywords') {
    console.log('> itemKlassName === DimensionalKeywords')
    console.log(property)
    process.exit()
  }

  if (propertyType === 'EMAIL') {
    if (klass.match(/[.]String$/)) {
      return createFieldType({ type: 'String' })
    }
  }

  if (propertyType === 'NUMBER') {
    // @TODO: Create union type `union Number = Int | Float`
    return createFieldType({ type: 'Number' })
  }

  if (propertyType === 'INTEGER') {
    return createFieldType({ type: 'Int' })
  }

  if (propertyType === 'CONSTANT') {
    return createFieldType({ type: `Constant` })
  }

  if (propertyType === 'REFERENCE') {
    return createFieldType({ type: klassName })
  }

  if (propertyType === 'URL') {
    if (klass.match(/[.]String$/)) {
      return createFieldType({ type: 'String' })
    }
  }

  if (propertyType === 'COLLECTION') {
    const { itemPropertyType } = property

    if (itemPropertyType === 'TEXT') {
      return createFieldType({ type: '[String!]' })
    }

    if (['COMPLEX', 'REFERENCE'].includes(itemPropertyType)) {
      const [itemKlassName] = itemKlass.match(/(?<=[.])[a-zA-Z0-9]+$/)
      return createFieldType({ type: `[${itemKlassName}!]` })
    }

    if (itemPropertyType === 'INTEGER') {
      return createFieldType({ type: `[Int!]` })
    }

    if (itemPropertyType === 'CONSTANT') {
      return createFieldType({ type: `[Constant!]` })
    }
  }

  if (propertyType === 'COMPLEX') {
    if (!['String', 'Integer', 'Number', 'Boolean'].includes(klassName))
    return createFieldType({ type: klassName })
  }

  if (propertyType === 'COLOR') {
    if (klassName === 'String') {
      return createFieldType({ type: 'String' })
    }
  }

  if (propertyType === 'PHONENUMBER') {
    if (klassName === 'String') {
      return createFieldType({ type: 'String' })
    }
  }

  if (propertyType === 'PASSWORD') {
    if (klassName === 'String') {
      return createFieldType({ type: 'String' })
    }
  }

  if (propertyType === 'IDENTIFIER') {
    if (klassName === 'String') {
      return createFieldType({ type: 'ID' })
    }
  }

  if (propertyType === 'TEXT') {
    if (klassName === 'String') {
      return createFieldType({ type: 'String' })
    }

    if (klassName === 'Integer') {
      return createFieldType({ type: 'Int' })
    }

    if (klassName === 'Long') {
      // @TODO: ??
      return createFieldType({ type: 'Long' })
    }

    if (klassName === 'PeriodType') {
      return createFieldType({ type: klassName })
    }
  }

  if (propertyType === 'BOOLEAN') {
    return createFieldType({ type: 'Boolean' })
  }

  if (propertyType === 'DATE') {
    if (klass.match(/[.]Date/)) {
      // TODO: requires custom scalar type
      return createFieldType({ type: 'Date' })
    }
  }

  console.log('> propertyType', propertyType)
  console.log('> property', property)
  process.exit(1)
}
