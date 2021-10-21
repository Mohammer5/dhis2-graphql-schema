module.exports.throwUnhandled = field => {
  console.info(`The following field cannot be parsed as it is not handled yet:`);
  console.info(JSON.stringify(field, null, 2))
  throw new Error(`Unhandled field`)
}
