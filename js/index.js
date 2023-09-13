const firstButtonClick = function (e) {
  console.log('bottone cliccato!')
  console.log('evento scatenato', e)
}

const secondButtonClick = function (e) {
  console.log('secondo bottone cliccato!', e)
}

// seleziono il bottone "CLICCAMI 2" grazie al suo id "js-button"
const jsButton = document.getElementById('js-button')
// addEventListener richiede 2 parametri: COSA ascoltare (ad es. "click"), e COSA fare allo scatenarsi dell'evento
jsButton.addEventListener('click', secondButtonClick)
// notare come secondButtonClick, dentro l'event listener, NON ha le parentesi tonde! NON È secondButtonClick()!
// questo perchè secondButtonClick() ESEGUIREBBE IMMEDIATAMENTE la funzione! io non voglio eseguirla immediatamente,
// io voglio solamente collegarla al CLICK del bottone, quindi passo come reference il NOME della funzione, non la sue esecuzione!

// oppure potete creare una cosiddetta "funzione anonima" e scriverla direttamente
// jsButton.addEventListener('click', function (e) {
//   console.log('secondo click con funzione anonima', e)
// })

// 3) metodologia, utilizzando il metodo "onclick", non mi interessa che la ricordiate...
// jsButton.onclick = secondButtonClick

jsButton.addEventListener('mouseover', function (e) {
  // quanto il mouse passa sopra il bottone
  console.log('ho passato il mouse sopra il bottone 2', e)
})
jsButton.addEventListener('mouseleave', function (e) {
  // quanto il mouse esce dall'area del bottone
  console.log("sono uscito dall'area del bottone 2", e)
})

// creiamo un bottone da zero
// qua devo usare addEventListener per forza, perchè questo bottone nell'HTML non esiste!

const newH3 = document.createElement('h3')
newH3.innerText = 'TITOLO CREATO DA JS'

const newButton = document.createElement('button')
newButton.innerText = 'BOTTONE NUOVO' // <button>BOTTONE NUOVO</button>
newButton.addEventListener('click', function (e) {
  console.log("questo bottone inizialmente non c'era!!")
})
newButton.style.backgroundColor = 'orange'
newButton.style.padding = '1em'

// ora li appendo al main
const main = document.getElementsByTagName('main')[0]
main.appendChild(newH3)
main.appendChild(newButton)
