//luas persegi
function luasPersegi() {
	return angka1 * angka1
}

let angka1 = 3;

let hasilLuasPersegi = luasPersegi(angka1)
console.log(hasilLuasPersegi);


//volum kubus
function volumeKubus() {
	return angka2 * angka2 * angka2
}

let angka2 = 5;

let hasilVolumeKubus = volumeKubus(angka2)
console.log(hasilVolumeKubus);


//luasSegitiga
function luasSegitiga() {
	return 0.5 * angka3 * angka4 
}

let angka3 = 5;
let angka4 = 6;

let hasilLuasSegitiga = luasSegitiga(angka3,angka4)
console.log(hasilLuasSegitiga);


//luasjajargenjang
function luasJajargenjang() {
	return angka5 * angka6
}

let angka5 = 4;
let angka6 = 8;

let hasilLuasJajargenjang = luasJajargenjang(angka5,angka6)
console.log(hasilLuasJajargenjang);


//volumetabung
function volumeTabung() {
	return Pi * angka7 * angka7 * angka8
}

let Pi = 22/7;
let angka7 = 7;
let angka8 = 5;

let hasilVolumeTabung = volumeTabung(Pi,angka7,angka8)
console.log(hasilVolumeTabung);