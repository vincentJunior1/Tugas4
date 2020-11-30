const reverseText = (teks) => {
    if (typeof teks === 'string') {
        let teksSplit = teks.split(' ');
        let teksLength = teksSplit.length - 1;
        let hasil = '';
        for (let i = teksLength; i >= 0; i--) {
            hasil += teksSplit[i] + ' '
        }
        console.log(hasil)
    } else {
        console.log('input harus number')
    }
}


reverseText('saya belajar javascript')