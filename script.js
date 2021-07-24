
  document.querySelector('#n-pessoas').addEventListener('input',(e) => {
    let contaMaisGorgeta = document.querySelector('.valor-total span').innerText
    let valorGorgeta = document.querySelector('.valor-pessoa span').innerText
 
    if(contaMaisGorgeta > 0 && e.target.value > 0) {
        let gorgetaDividida = valorGorgeta / e.target.value
        let contaDividida = contaMaisGorgeta / e.target.value

        renderValorGorgeta(gorgetaDividida)
        renderValorTotal(contaDividida)
    } else {

      document.querySelector('.msg-erroPessoas').classList.add('active')
      e.target.style.borderColor = 'red'

      setTimeout(()=> {
        document.querySelector('.msg-erroPessoas').classList.remove('active')
         e.target.style.borderColor = 'hsl(185, 41%, 84%)'
      },2000)
    }
    
   })
 
 
   document.querySelector('#valor-variado').addEventListener('input', (e) => {
     let contaString = document.querySelector('#conta')
     let contaNum = Number(contaString.value)  
 
     if(contaNum > 0) {
       let gorgetaVariada = Number(e.target.value);
       let contaMaisGorgeta = contaNum + gorgetaVariada

       renderValorGorgeta(gorgetaVariada)
       renderValorTotal(contaMaisGorgeta)
 
     } else {

        document.querySelector('.msg-erroConta').classList.add('active')
        contaString.style.borderColor = 'red'

        setTimeout(()=> {
            document.querySelector('.msg-erroConta').classList.remove('active')
            contaString.style.borderColor = 'hsl(185, 41%, 84%)'
            },2000)
     }
   
       
   })

   document.querySelector('#conta').addEventListener('input', (e)=> {
      let valorConta = Number(e.target.value)

      if(valorConta > 0){
        renderValorTotal(valorConta)
      } else {
        document.querySelector('.msg-erroConta').classList.add('active')
        e.target.style.outlineColor = 'red'

        setTimeout(()=> {
        document.querySelector('.msg-erroConta').classList.remove('active')
        e.target.style.outlineColor = 'hsl(185, 41%, 84%)'
        },2000)
      }
   })
 
   document.querySelectorAll('.btns').forEach(btn => {
     btn.addEventListener('click', (e)=> {
       let valorConta = Number(document.querySelector('#conta').value)
 
       if(valorConta > 0) {
        let gorgetaPorcento = Number( e.target.value)
        
        let porPessoas = valorConta * gorgetaPorcento

        let contaMaisGorgeta = valorConta += valorConta * gorgetaPorcento

        
        
        renderValorGorgeta(porPessoas)
        renderValorTotal(contaMaisGorgeta)
        
 
       } else {
            document.querySelector('.msg-erroConta').classList.add('active')
            document.querySelector('#conta').style.borderColor = 'red'
    
            setTimeout(()=> {
            document.querySelector('.msg-erroConta').classList.remove('active')
            document.querySelector('#conta').style.borderColor = 'hsl(185, 41%, 84%)'
            },2000)
        }
       
     })
   })
 
   document.querySelector('.reset').addEventListener('click', () => {
     document.querySelector('.valor-total span').innerHTML = '0.00'
     document.querySelector('.valor-pessoa span').innerHTML = '0.00'
     document.querySelector('#n-pessoas').value = ''
     document.querySelector('#conta').value = ''
     document.querySelector('#valor-variado').value = ''
   })
 
   function renderValorTotal(gorgetaTotal){
     document.querySelector('.valor-total span').innerHTML = `${gorgetaTotal.toFixed(2)}`
   }
 
   function renderValorGorgeta(gorgetaTotal) {
     document.querySelector('.valor-pessoa span').innerHTML = `${gorgetaTotal.toFixed(2)}`
   }
 