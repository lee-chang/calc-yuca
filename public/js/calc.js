const tableEconomic = document.getElementById('tableEconomic')
const tableFinance = document.getElementById('tableFinance')
const tablePE = document.getElementById('tablePE')
const tdBCE = document.getElementById('td-BCE')
const tdVANE = document.getElementById('td-VANE')
const tdTIRE = document.getElementById('td-TIRE')
const tdBCF = document.getElementById('td-BCF')
const tdVANF = document.getElementById('td-VANF')
const tdTIRF = document.getElementById('td-TIRF')
const tdCF = document.getElementById('td-CF')
const tdCV = document.getElementById('td-CV')
const tdCT = document.getElementById('td-CT')
const tdIT = document.getElementById('td-IT')
const tdPE = document.getElementById('td-PE')

    
const obtener_indicadores = async (Q) => {
try {
    const result = await axios ({
        method: 'get',
        url:`/updateQ/${Q}`,
        responseType: 'json'
    })
    .then ((resp) => {

        const indicadores = resp.data         

        //ocultar span loading de la tabla
        tableEconomic.getElementsByTagName('span')[0].classList.add('d-none')
        tableFinance.getElementsByTagName('span')[0].classList.add('d-none')
        tablePE.getElementsByTagName('span')[0].classList.add('d-none')
        
        //mostrar tabla
        tableEconomic.getElementsByTagName('table')[0].classList.remove('d-none')
        tableFinance.getElementsByTagName('table')[0].classList.remove('d-none')
        tablePE.getElementsByTagName('table')[0].classList.remove('d-none')

        //cargar datos en la tabla
        tdBCE.innerHTML = (indicadores.BCE).toFixed(2)
        tdVANE.innerHTML = `S/ ${(indicadores.VANE).toFixed(2)}`
        tdTIRE.innerHTML = `${(indicadores.TIRE*100).toFixed(2)} %`
        tdBCF.innerHTML = (indicadores.BCF).toFixed(2)
        tdVANF.innerHTML = `S/ ${(indicadores.VANF).toFixed(2)}`
        tdTIRF.innerHTML = `${(indicadores.TIRF*100).toFixed(2)} %`
        tdCF.innerHTML = `S/ ${(indicadores.CF).toFixed(2)}`
        tdCV.innerHTML = `S/ ${(indicadores.CV).toFixed(2)}`
        tdCT.innerHTML = `S/ ${(indicadores.CT).toFixed(2)}`
        tdIT.innerHTML = `S/ ${(indicadores.IT).toFixed(2)}`
        tdPE.innerHTML = `${(indicadores.PE).toFixed(2)}`
    })


} catch (error) {
    console.log(error)
}
}

//cuando el formulario se envie
const input = document.getElementById('input')
const button = document.getElementById('button')

// se haga click en el boton o precione enter en el input

function cargarData () {
    //seleccionar la tabla que esta dentro de la clase table-responsive
    tableEconomic.getElementsByTagName('table')[0].classList.add('d-none')
    tableFinance.getElementsByTagName('table')[0].classList.add('d-none')
    tablePE.getElementsByTagName('table')[0].classList.add('d-none')


    //mostrar span de carga
    tableEconomic.getElementsByTagName('span')[0].classList.remove('d-none')
    tableFinance.getElementsByTagName('span')[0].classList.remove('d-none')
    tablePE.getElementsByTagName('span')[0].classList.remove('d-none')

    

    //obtener el valor del input
    const Q = input.value
    obtener_indicadores(Q)
    calcDatos(Q)    
}

button.addEventListener('click', (e) => {
    cargarData()
})
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        cargarData()
    }

})

function calcDatos(Q) {

    const O = (Q/0.9001).toFixed(2);
    const N = O;
    const M = (N/0.5995).toFixed(2);
    const K = (M/0.5998).toFixed(2);
    const I = (K/1.4832).toFixed(2);
    const A = (I/0.9414).toFixed(2);
    const B = (1.2128*I).toFixed(2);
    const D = (0.9925*A).toFixed(2);
    const F = (0.9713*D).toFixed(2);
    const H = (0.9766*F).toFixed(2);

    document.getElementById("value-A").innerHTML = A + " kg/h";
    document.getElementById("td-A").innerHTML = A + " kg/h"; 
    document.getElementById("value-B").innerHTML = B+ " kg/h";
    document.getElementById("td-B").innerHTML = B+ " kg/h";
    document.getElementById("value-D").innerHTML = D+ " kg/h";
    document.getElementById("td-D").innerHTML = D+ " kg/h";
    document.getElementById("value-F").innerHTML = F+ " kg/h";
    document.getElementById("td-F").innerHTML = F+ " kg/h";
    document.getElementById("value-H").innerHTML = H+ " kg/h";
    document.getElementById("td-H").innerHTML = H+ " kg/h";
    document.getElementById("value-I").innerHTML = I+ " kg/h";
    document.getElementById("td-I").innerHTML = I+ " kg/h";
    document.getElementById("value-K").innerHTML = K+ " kg/h";
    document.getElementById("td-K").innerHTML = K+ " kg/h";
    document.getElementById("value-M").innerHTML = M+ " kg/h";
    document.getElementById("td-M").innerHTML = M+ " kg/h";
    document.getElementById("value-N").innerHTML = N+ " kg/h";
    document.getElementById("td-N").innerHTML = N+ " kg/h";
    document.getElementById("value-O").innerHTML = O+ " kg/h";
    document.getElementById("td-O").innerHTML = O+ " kg/h";

}
