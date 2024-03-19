//! 1- kullanıcı huawei marka ürün alcak 10 bin tl üstünde olucak ve toplam fiyatlarını öğren
const pc = [
    {
        id: 1,
        name: "hp",
        model: "pavillion",
        price: 12400,
    },
    {
        id: 2,
        name: "huawei",
        model: "matebook",
        price: 14500,
    },
    {
        id: 3,
        name: "lenovo",
        model: "thinkpad",
        price: 11000,
    },
    {
        id: 4,
        name: "dell",
        model: "inspiron",
        price: 13500,
    },
    {
        id: 5,
        name: "asus",
        model: "rog",
        price: 15500,
    },
    {
        id: 6,
        name: "acer",
        model: "swift",
        price: 12000,
    },
    {
        id: 7,
        name: "apple",
        model: "macbook air",
        price: 18500,
    },
    {
        id: 8,
        name: "samsung",
        model: "galaxy book",
        price: 16500,
    },
    {
        id: 9,
        name: "msi",
        model: "gs65",
        price: 16000,
    },
    {
        id: 10,
        name: "huawei",
        model: "matebook x pro",
        price: 15500,
    },
    {
        id: 11,
        name: "huawei",
        model: "matebook xk",
        price: 10000,
    },
];
// const alıncakMarka=pclt.fier((marka)=>marka.name =="huawei")
// const alıncakUrun=alıncakMarka.filter((fiyat)=>fiyat.price > "10000")
// console.log(alıncakUrun)
// const toplamFiyat=alıncakUrun.reduce((pv,acc)=>{
//     return pv+acc.price
// },0)
// console.log("alıncak ürün",alıncakUrun)
// console.log("ürünlerin toplam fiyatı",toplamFiyat)
//!2- dataların fiyatı azalan ve artan olarak yap
// const artanFiyat=pc.sort((a,b)=> a.price - b.price)
// const azalanFiyat=pc.sort((a,b)=> b.price - a.price)
// console.log("Artan Fiyat",artanFiyat,"Azalan fiyat",azalanFiyat)
//? js dizi methodları
//push metodu dizinin sonuna elaman ekler
// pc.push({
//     id:12,
//     name:"samsung",
//     mode:"galaxy",
//     price:2000,    
// })
// console.log(pc)
//? for döngüsü 
//!2 1 den 10a kadar sayı yazdır 
// for(let i=1; i<=10 ; i++){
//     console.log(i)
// }
//!2 1 den 20ye kadar çift sayı yazdır 
// for(let i=0 ; i<=20 ; i+=2  ){
//     console.log(i)
// }
//
//! tek sayıda baska çift sayıda baska bisi yazsın
// for (let i=1 ; i<=10 ; i++){
//     if(i%2==1){
//         console.log("bu sayı tek")
//     }else{
//             console.log("çifttir")
//     }
//     console.log(i)
// }
//! 50 den 1 e kadar git
// const total=0
// for(let i=50 ; i>=1 ; i--){
//  total +=i
// }
// console.log("toplam")

//! asal sayı bul
// const number=Number(prompt("Lütfen bir sayı giriniz"))
// let result =true

// 2 ile basla kullanıcının bana verdiği sayıya kadar  böl ve her seferinde 1  1 arttır
// for(let i=2 ; i<=Math.floor(number/2); i++){
//     if(number%i==0){
//         result = false
//         break;
//     }
// }
// if(number<=1){
//     alert("2 altı asal kabul edelmez")
// }else if(result){
//     alert(result +" Asal Sayıdır")
// }else{
//     alert(result +" Asal değildir")
// }

//! faktroiyel hesabı çöz
// bir sayının kendisinden öncekileri çarpımı ile bulunur örnek sayı 5 bulmak için 5*4*3-2-1 diye gider
let carpim=1
const number=Number(prompt("lütfen bir sayı giriniz"))
for(let i=1; i<= number; i++){
        carpim=carpim*i
}
alert(carpim ,"faktöriyel")



