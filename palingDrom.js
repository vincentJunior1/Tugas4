const palingdrom = (text) =>{
    let textCase = text.toLowerCase()
    let textLength = text.length - 1
    let hasil = ''
    for(let i = 0; i <= textLength; i ++){
        hasil += textCase[i]
    }
    if(hasil == textCase){
        console.log('ini palngdrom teks')
    }else{
        console.log('ini bukan palingdrom')
    }
}

palingdrom('Hello')