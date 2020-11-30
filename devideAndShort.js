const devideAndShort = (angka) => {
    let data = angka.toString()
    let angkaLength = data.length - 1
    let hasil = []
    let final =''
    let temp = ''
    let number = 0
    for (let i = 0; i < angkaLength; i++) {
        if (data[i] == 0) {
            temp = data.slice(i + 1)
            let z = temp.indexOf(0)
            if (z != -1) {
                let realData = temp.slice(0, z)
                temp = realData.split('')
                hasil += temp.sort()
            }else{
                let realData = temp.split('')
                hasil += ',' +realData.sort()
            }
        }
    }
    let newData = hasil.split(',')
    let realData = data.indexOf(0)
    temp = data.slice(0,realData)
    let f = temp.split('')
    let fSort = f.sort()
    for(let i = 0; i < angkaLength ; i++){
        if(i < fSort.length ){
            final += fSort[i]
        }else{
            final += newData[number]
            number++
        }
    }

    console.log(parseInt(final))
}
devideAndShort(59560560159466056)