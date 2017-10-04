'use strict'

module.exports = function (Product) {
  // ^(https?://)?(?:[a-z0-9\\-]+\\.)+[a-z]{2,6}(?:/[^/#?]+)+\\.(?:jpe?g|gif|png)$
  // |- protocol -|--------- domain ------------|---- path ----|--- extension ---|
  let imageUrlValidator = '^(https?://)?(?:[a-z0-9\\-]+\\.)+[a-z]{2,6}(?:/[^/#?]+)+\\.(?:jpe?g|gif|png)$'
  Product.validatesFormatOf('product_image_url', {
    with: imageUrlValidator,
    message: 'Must be a valid URL with valid image file extension (jpg, jpeg, png, gif)'
  })

  function sizeValidator (err) {
    let isString = (variable) => typeof (variable) === 'string'
    let isArray = variable => Array.isArray(variable)
    if (!isString(this.size) && !isArray(this.size)) err()
  }

  Product.validate('size', sizeValidator, {message: 'Size must be either a string or an array'})
}
