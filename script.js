
var res = document.getElementById('res')
var aeronave = 'Airbus a340'
var tipo = 'Jato' 
var p = document.getElementById('txtp')
var q = document.getElementById('txta')
var g = document.getElementById('txtquer')
//Conversão Litros para Kilos





function enchertanque(q = 0){
    
 if (q.value == 0) {
        res.innerHTML += '<p>Não Abasteceu</p>'
            
        
        }else {
            res.innerHTML += '<p>Abasteceu</p>'
        }
        /*funcionando*/ 
      
        
}




function combustivelnaaeronave(g = 0){
    

    if (g.value == 0) {/*funcionando*/
        res.innerHTML += '<p>Sem combustível</p>'
            
        }else  {
            res.innerHTML += `<p>Combustível remanescente na aeronave: ${g.value} litros </p>`
        
        /*funcionando*/ 
}

}









//Formatações Numéricas




//Conversão Litros para Kilos





/*mensagem de peso*/function aeronavepesodojato(p = 0) {/*mensagem de peso*/
    
    
       
    /*parâmetros de comparação entre peso maximo permitido na pista*/
    if (parseFloat(p.value) + parseFloat(g.value) + parseFloat(q.value) / 1.28 >= 300000) {
        res.innerHTML += 'Este jato esta muito pesado, diminua o peso e volte para a pista.'
    } else {
        res.innerHTML += 'Apertem os cintos e tenham uma boa viagem, pilotos.'
    }
    
}




g.value= ''
q .value= ''
p.value = ''

function decolar() {//funcionando
    

    res.innerHTML = ''
   
   
    
        
    combustivelnaaeronave(g)//funcionando
        
    enchertanque(q)//funcionando
        
    res.innerHTML += `<p>${aeronave} agora está com ${parseFloat(q.value) + parseFloat(g.value)} litros de querosene de aviação</p>`/*funcionando*/

    res.innerHTML += `<p>O preço abastecido será de R$ ${(parseFloat(q.value)  * 5.49).toFixed(2)}</p>`

    res.innerHTML += `<p>Esta aeronave agora pesa ${(parseFloat(p.value)+ parseFloat(g.value) + parseFloat(q.value) / 1.28).toFixed(2)} kg</p>`

    aeronavepesodojato(p)

    g.value= ''
    q .value= ''
    p.value = ''
}
