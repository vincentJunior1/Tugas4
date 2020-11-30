const reverseText = (teks) => {
    let teksSplit = teks.split(' ');
    let teksLength = teksSplit.length - 1;
    let hasil = '';
    for(let i = teksLength; i >= 0; i--){
        if( i == 0){
            hasil += teksSplit[i]
        }else{
            hasil += teksSplit[i] + ' '
        }
    }
    console.log(hasil)
}


reverseText('saya belajar javascript')