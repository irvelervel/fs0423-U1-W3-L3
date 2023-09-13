// un form di default fa cose all'invio: aggiorna la pagina, comincia una querystring con "?" nella address bar...
// noi vogliamo AZZERARE questi comportamenti di default!
// a quel punto potremo operare con i dati e eseguire la NOSTRA logica.

// come azzeriamo il comportamento di un form?
// SELEZIONIAMO il form dalla pagina:
const mainForm = document.getElementById('main-form')

// ora dobbiamo interagire con l'evento di "submit"
// come sovrascriviamo l'evento di "submit" nel form

mainForm.addEventListener('submit', function (e) {
  // adesso posso descrivere cosa succederà all'invio del form
  // e si riferisce all'evento scatenato dal "submit"
  // come PRIMA cosa dobbiamo fermare i comportamenti di default
  e.preventDefault()
  console.log('Ora dovremmo vedere questo consolelog', e)
  // cosa facciamo ora? :)
  // raccolgo i dati!
  // selezioniamo i campi del form
  const nameInputField = document.getElementById('name')
  const ageInputField = document.getElementById('age')
  const cityInputField = document.getElementById('city')
  const bioInputField = document.getElementById('bio')

  // questi sono gli elementi HTML del form, gli input (o le textarea)
  // il CONTENUTO del campo di testo si legge tramite la sua proprietà "value"

  console.log(nameInputField.value) // stringa
  console.log(ageInputField.value) // stringa
  console.log(cityInputField.value) // stringa
  console.log(bioInputField.value) // stringa

  const data = {
    name: nameInputField.value,
    age: ageInputField.value,
    city: cityInputField.value,
    bio: bioInputField.value,
  }

  console.log('dati raccolti dal form: ', data)

  // adesso che abbiamo raccolto i dati, informiamo l'utente!
  alert('Grazie! Dati inviati')

  // per azzerare i campi, utilizza sempre la proprietà "value", ma questa volta sovrascrivendo il valore corrente!
  nameInputField.value = ''
  ageInputField.value = ''
  cityInputField.value = ''
  bioInputField.value = ''

  const newH3 = document.createElement('h3')
  newH3.innerText = `Grazie, ${data.name}! I tuoi dati sono stati registrati.`
  // newH3.innerText = 'Grazie, ' + data.name + '! I tuoi dati sono stati registrati.'

  const main = document.getElementsByTagName('main')[0]
  main.appendChild(newH3)
})
