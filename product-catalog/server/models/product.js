'use strict'

module.exports = function (Product) {
  // ^(https?://)?(?:[a-z0-9\\-]+\\.)+[a-z]{2,6}(?:/[^/#?]+)+\\.(?:jpe?g|gif|png)$
  //              |--------- domain ------------|---- path ----|--- extension ---|
  let imageUrlValidator = '^(https?://)?(?:[a-z0-9\\-]+\\.)+[a-z]{2,6}(?:/[^/#?]+)+\\.(?:jpe?g|gif|png)$'
  Product.validatesFormatOf('productImageUrl', {
    with: imageUrlValidator,
    message: 'Must be a valid URL with valid image file extension (jpg, jpeg, png, gif)'
  })
}
