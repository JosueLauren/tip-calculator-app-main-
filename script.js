
  document.querySelector('#n-pessoas').addEventListener('blur',(e) => {
    let valorGorgeta = document.querySelector('.valor-total span').innerText
 
    if(valorGorgeta > 0 && e.target.value > 0) {
       let gorgetaPorPessoa = valorGorgeta / e.target.value
 
       renderValorPessoa(gorgetaPorPessoa)
       e.target.value = ''
    } else {

      document.querySelector('.msg-erroPessoas').classList.add('active')
      e.target.style.borderColor = 'red'

      setTimeout(()=> {
        document.querySelector('.msg-erroPessoas').classList.remove('active')
         e.target.style.borderColor = 'hsl(185, 41%, 84%)'
      },2000)
    }
    
   })
 
 
   document.querySelector('#valor-variado').addEventListener('blur', (e) => {
     let contaString = document.querySelector('#conta')
     let contaNum = Number(contaString.value)  
 
     if(contaNum > 0) {
       let valorGorgeta = Number(e.target.value);
       renderValorTotal(valorGorgeta)
       e.target.value = ''
 
     } else {

        document.querySelector('.msg-erroConta').classList.add('active')
        contaString.style.borderColor = 'red'

        setTimeout(()=> {
            document.querySelector('.msg-erroConta').classList.remove('active')
            contaString.style.borderColor = 'hsl(185, 41%, 84%)'
            },2000)
     }
   
       
   })
 
   document.querySelectorAll('.btns').forEach(btn => {
     btn.addEventListener('click', (e)=> {
       let contaString = document.querySelector('#conta')
       let contaNum = Number(contaString.value)
 
       if(contaNum > 0) {
        let gorgetaPorcento = e.target.value;
 
        let valorGorgeta = contaNum * gorgetaPorcento
 
        renderValorTotal(valorGorgeta)
 
       } else {
            document.querySelector('.msg-erroConta').classList.add('active')
            contaString.style.borderColor = 'red'
    
            setTimeout(()=> {
            document.querySelector('.msg-erroConta').classList.remove('active')
            contaString.style.borderColor = 'hsl(185, 41%, 84%)'
            },2000)
        }
       
     })
   })
 
   document.querySelector('.reset').addEventListener('click', () => {
     document.querySelector('.valor-total span').innerHTML = '0.00'
     document.querySelector('.valor-pessoa span').innerHTML = '0.00'
   })
 
   function renderValorTotal(gorgetaTotal){
     document.querySelector('.valor-total span').innerHTML = `${gorgetaTotal.toFixed(2)}`
   }
 
   function renderValorPessoa(gorgetaTotal) {
     document.querySelector('.valor-pessoa span').innerHTML = `${gorgetaTotal.toFixed(2)}`
   }
 