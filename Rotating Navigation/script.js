const open=document.getElementById('open')
const close=document.getElementById('close')
const container=document.querySelector('.container')

open.addEventListener('submit',()=>container.classList('show-nav'))

close.addEventListener('submit',()=>container.remove('show-nav'))