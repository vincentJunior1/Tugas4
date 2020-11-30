const arkFood = (harga, voucher, jarak, pajak) => {
    //data sudah bersih
    let newHarga 
    let hargaPromo = 0
    let ongkir = 5000
    let ppn = 0
    if (voucher == 'ARKFOOD5') {
        if (harga >= 50000) {
            let newHarga = harga * 0.5
            if (newHarga > 50000) {
                hargaPromo = harga - 50000
            } else {
                hargaPromo = harga - newHarga
            }
            if (jarak <= 2) {
                ongkir
            } else {
                for (let i = 2; i <= jarak; i++) {
                    ongkir += 3000
                }
            }
            if (pajak == true) {
                ppn = harga * 0.05
            } else {
                ppn = 0
            }
            let hargaTotal = hargaPromo + ongkir + ppn
    let outPut =
        `Harga       :${harga}
Potongan    :${newHarga}
Biaya Antar :${ongkir}
Pajak       :${ppn}
Sub Total   :${hargaTotal}
    `
    console.log(outPut)
        } else {
            console.log('Minimal Pmebelian 50000 Untuk Kode Promo' + voucher)
        }
    } else if (voucher == 'DITRAKTIRDEMY') {
        if(harga >=30000){

            newHarga = harga * 0.6
            if (newHarga > 30000) {
                hargaPromo = harga - 30000
            } else {
                hargaPromo = harga - newHarga
            }
            if (jarak <= 2) {
                ongkir
            } else {
                for (let i = 2; i <= jarak; i++) {
                    ongkir += 3000
                }
            }
            if (pajak == true) {
                ppn = harga * 0.05
            } else {
                ppn = 0
            }
            let hargaTotal = hargaPromo + ongkir + ppn
        let outPut =
            `Harga       :${harga}
    Potongan    :${newHarga}
    Biaya Antar :${ongkir}
    Pajak       :${ppn}
    Sub Total   :${hargaTotal}
        `
        console.log(outPut)
        }else{
            console.log('Minimal Pembelian 25000 untuk voucher'+ voucher)
        }
    } else if (voucher == '') {
        hargaPromo = 'Tidak ada'
        if (jarak <= 2) {
            ongkir = 5000
        } else {
            for (let i = 2; i <= jarak; i++) {
                ongkir += 3000
            }
        }
        if (pajak == true) {
            ppn = harga * 0.05
        } else {
            ppn = 0
        }
        let hargaTotal =harga + ongkir + ppn
    let outPut =
        `Harga       :${harga}
Potongan    :${newHarga}
Biaya Antar :${ongkir}
Pajak       :${ppn}
Sub Total   :${hargaTotal}
    `
    console.log(outPut)
    } else {
        console.log('Promo Tidak Ada')
    }

}


arkFood(75000, 'ARKFOOD5', 2, true)