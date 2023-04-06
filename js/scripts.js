const bleeckerimage = '<img src="https://thepizzasnob.files.wordpress.com/2013/06/bleecker-street-pizza-resize.jpg" />'

const lindustrieimage = '<img src="https://media.onebite.app/ac/45/20/67/ac452067-b27e-4650-bd90-bcc4bdd9cf86.jpg" />'

const luigiimage = '<img src="https://1.bp.blogspot.com/-PUl4teYwVfQ/XCTfGDlpnpI/AAAAAAAANJE/iS6ReFJ37TYYfcqv1MlcAQorKvZyYkShACLcBGAs/s1600/LUIGISPIZZA100900.jpg" />'

const scarrsimage = '<img src="https://media-cdn.tripadvisor.com/media/photo-s/17/83/e6/55/exterior.jpg" />'

function setImage(imageHtml) {
  $('#bottom').empty().prepend(imageHtml)
}

$('.bleecker').on('click', function () {
  setImage(bleeckerimage)
})

$('.lindustrie').on('click', function () {
  setImage(lindustrieimage)
})

$('.luigi').on('click', function () {
  setImage(luigiimage)
})

$('.scarrs').on('click', function () {
  setImage(scarrsimage)
})
