// cominciamo selezionando il form, facendo il preventDefault() e selezionando i campi e trovando i valori

const contactForm = document.getElementById('new-contact') // salvo un riferimento al form in una variabile

contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  // ora cominciamo a scrivere la NOSTRA logica :)
  const firstNameInputField = document.getElementById('firstname')
  const lastNameInputField = document.getElementById('lastname')
  const phoneInputField = document.getElementById('phone')
  const emailInputField = document.getElementById('email')

  // sappiamo che i valori dei field saranno firstNameInputField.value, lastNameInputField.value etc.

  const newContact = {
    firstName: firstNameInputField.value,
    lastName: lastNameInputField.value,
    phone: phoneInputField.value,
    email: emailInputField.value,
  }

  console.log('CONTATTO SALVATO', newContact)
  // recupero dati completato :)
  // ora creiamo una card in JS e la appendiamo alla pagina
  const newContactCard = document.createElement('div') // <div></div>
  newContactCard.classList.add('contact-card')
  // <div class="contact-card"></div>
  // dentro questo div vuoto io vorrei metterci i dati di newContact
  // però vorrei magari creare un paio di <p> al suo interno, e poi
  // anche un bottone per eliminare la card
  newContactCard.innerHTML = `
    <p>${newContact.firstName} ${newContact.lastName}</p>
    <p>${newContact.phone}</p>
    <p>${newContact.email}</p>
    <button onclick="deleteCard(event)">ELIMINA</button>
  `

  // ora dobbiamo appendere newContactCard al DOM, o più specificamente
  const sectionForCards = document.getElementById('saved-contacts')
  sectionForCards.appendChild(newContactCard)

  // resetto il form
  //   firstNameInputField.value = ''
  //   lastNameInputField.value = ''
  //   phoneInputField.value = ''
  //   emailInputField.value = ''
})

const deleteCard = function (e) {
  const clickedButton = e.target
  console.log(clickedButton.parentElement)
  const reallyRemove = confirm('Vuoi davvero eliminare?')
  if (reallyRemove) {
    clickedButton.parentElement.remove() // ho rimosso dal DOM esattamente la card di cui ho cliccato il bottone elimina
  }
}
