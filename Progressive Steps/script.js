const progress =document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')

let cAc=1
prev.addEventListener('click', () => {
    cAc--;
    if(cAc < 1){
        cAc= 1
    }
    update()
})
next.addEventListener('click', () => {
    cAc++;
    if(cAc > circles.length){
        cAc= circles.length
    }
    update()
})
function update(){
    circles.forEach((circle,idx)=>{
        if(idx<cAc){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    })
    const actives=document.querySelectorAll('.active')
    progress.style.width=((actives.length-1)/(circles.length-1))
    *100+'%'
    if(cAc==1){
        prev.disabled = true
    } else if(cAc == circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}