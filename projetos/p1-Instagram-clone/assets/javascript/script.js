
window.onload = ()=>{

    document.querySelector('#user').addEventListener('keyup',({})=>{
        if(document.querySelector('#user').value &&  document.querySelector('#pass').value.length >= 6){
            document.querySelector('.enter').disabled = false
        }
        else{
            document.querySelector('.enter').disabled = true
        }
    })
    
    document.querySelector('#pass').addEventListener('keyup',()=>{
        if(document.querySelector('#user').value &&  document.querySelector('#pass').value.length >= 6){
            document.querySelector('.enter').disabled = false
        }
        else{
            document.querySelector('.enter').disabled = true
        }
    })

    let ATUAL_IMG = 0
    const SLIDER = document.querySelector('.slide')
    
    setInterval(()=>{
        if(ATUAL_IMG < 4){
            SLIDER.children[ATUAL_IMG].classList.toggle('show')
            SLIDER.children[ATUAL_IMG+1].classList.toggle('show')
            ATUAL_IMG++

        }else{
            SLIDER.children[ATUAL_IMG].classList.toggle('show')
            SLIDER.children[0].classList.toggle('show')
            ATUAL_IMG = 0
        }

    },5000)

}

let DARKMODE = false

function darkmode(){
    if(DARKMODE){
        document.querySelector('#darkmode').src = 'https://www.flaticon.com/svg/static/icons/svg/42/42011.svg'
        DARKMODE = false
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    }else{
        document.querySelector('#darkmode').src = './assets/images/sun.svg'
        DARKMODE = true
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }

}


function labelChange(span,input){
    
    let SPAN = document.querySelector('#'+span)
    let INPUT = document.querySelector('#'+input)

    if(input === 'user'){
        SPAN.classList.add('fill_user')
    }
    else{
        SPAN.classList.add('fill_pass')
    }
    
    if(INPUT.value === ""){
        SPAN.classList.remove('fill_user')
        SPAN.classList.remove('fill_pass')
    }
}