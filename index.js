'use strict'

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://tfk-fh-stempling01/MinTid/Start.aspx')
  .wait('#AutoTest_lblOverskrift')
  .click('#AutoTest_btnInnUt')
  .end()
  .then(result => {
    console.log(result)
    console.log('Inn/Ut er registrert')
  })
  .catch(error => {
    console.error('Klarte ikke registrere:', error)
  })
