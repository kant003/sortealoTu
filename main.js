import './style.css'
import { selectRandomFromArray } from './util'

document.getElementById('button')
      .addEventListener('click', onClick)


function onClick(){
      const product = document.getElementById('product')
      const participants = document.getElementById('participants')
      const winner = document.getElementById('winner')
      const nameList = participants.value.split('\n')
      const winnerName = selectRandomFromArray(nameList)
      let msg
      if(!product.value) msg='No estas sorteando nada'
      else if(!participants.value) msg = 'No hay participantes'
      else msg = `Enhorabuena ${winnerName} has ganado ${product.value}`
      
      winner.innerHTML = msg
}

