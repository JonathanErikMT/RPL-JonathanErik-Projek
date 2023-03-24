const Helper = require('./Helper-JonathanErik');

class MyClass {
  constructor() {
    console.log('Hasil penjumlahan : ', Helper.tambah(4, 3));
    console.log('Hasil pengurangan : ', Helper.kurang(5, 9));
    console.log('Hasil perkalian   : ', Helper.kali(2, 3));
    console.log('Hasil pembagian   : ', Helper.bagi(12, 4))
  }
}

new MyClass();
