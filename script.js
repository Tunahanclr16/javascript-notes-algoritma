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
// const alıncakMarka=pc.filter((marka)=>marka.name =="huawei")
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
