// file Helper.test.js
const expect = require('chai').expect;
const Helper = require('./MyClass');

describe('Testing Helper Class', () => {
  it('Penambahan 1 + 1 harus sama dengan 2', () => {
    const hasilTambah = Helper.tambah(1, 1);
    expect(hasilTambah).to.equal(2);
  });

  it('Pengurangan 5 - 3 harus sama dengan 2', () => {
    const hasilKurang = Helper.kurang(5, 3);
    expect(hasilKurang).to.equal(2);
  });

  it('Perkalian 2 * 3 harus sama dengan 6', () => {
    const hasilKali = Helper.kali(2, 3);
    expect(hasilKali).to.equal(6);
  });

  it('Pembagian 6 / 3 harus sama dengan 2', () => {
    const hasilBagi = Helper.bagi(6, 3);
    expect(hasilBagi).to.equal(2);
  });

  it('Tidak dapat melakukan pembagian dengan nol', () => {
    expect(() => Helper.bagi(5, 0)).to.throw('Tidak dapat melakukan pembagian dengan nol');
  });
});
