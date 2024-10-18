function addnumber(){
    var onenum = parseInt(document.getElementById('numone').value)
    var twonum = parseInt(document.getElementById('numtwo').value)

    var tot = onenum + twonum 
    var output = `The Output is: ${tot}`
    document.getElementById('result').innerHTML = output
}

function subnumber(){
    var onenum = parseInt(document.getElementById('numone').value)
    var twonum = parseInt(document.getElementById('numtwo').value)

    var tot = onenum - twonum 
    var output = `The Output is: ${tot}` 
    document.getElementById('result').innerHTML = output
}

function mulnumber(){
    var onenum = parseInt(document.getElementById('numone').value)
    var twonum = parseInt(document.getElementById('numtwo').value)

    var tot = onenum * twonum 
    var output = `The Output is: ${tot}` 
    document.getElementById('result').innerHTML = output
}

function divnumber(){
    var onenum = parseInt(document.getElementById('numone').value)
    var twonum = parseInt(document.getElementById('numtwo').value)

    var tot = onenum / twonum 
    var output = `The Output is: ${tot}` 
    document.getElementById('result').innerHTML = output
}

