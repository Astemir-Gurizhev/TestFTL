//Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = function (callback, thisArg) {
       thisArg = thisArg || window;
       for (var i = 0; i < this.length; i++) {
           callback.call(thisArg, this[i], i, this);
       }
   };
}

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {

   const btn = dropDownWrapper.querySelector('.dropdown__button')
   const list = dropDownWrapper.querySelector('.dropdown__list')
   const item = list.querySelectorAll('.dropdown__list-item')
   const inputHidden = dropDownWrapper.querySelector('.dropdown__input-hidden')


   btn.addEventListener('click', function(e) {
      e.preventDefault()
      list.classList.toggle('dropdown__list--visible')
   })
   
   item.forEach(function(listItem) {
      listItem.addEventListener('click', function(e) {
         e.stopPropagation()
         btn.innerText = this.innerText
         btn.style.color = 'black'
         inputHidden.value = this.dataset.value
         list.classList.remove('dropdown__list--visible')
      })
   })
   
   //клик снаружи = закрыть дропдаун
   document.addEventListener('click', function(e) {
      if (e.target !== btn) {
         list.classList.remove('dropdown__list--visible')
      }
   })
   //клик escape = закрыть дропдаун
   document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
         list.classList.remove('dropdown__list--visible')
      }
   })
   
}) 

let tempCheck = document.getElementById('tempCheck')
let tempActive = document.querySelector('.temp-active')
tempCheck.addEventListener('click', function() {
   if (tempCheck.checked == true) {
      tempActive.style.display = 'flex'
   }
   else {
      tempActive.style.display = 'none'
   }
})


let li1 = document.querySelector('.dropdown__list-item-var-zad')
li1.click()
   


let inputAddress = document.querySelector('#input-required')
let buttonAddress = document.querySelector('#btn-disabled')
let button1Address = document.querySelector('.form__section4__before-where__link')

inputAddress.oninput = function () {
   buttonAddress.disabled = false
}