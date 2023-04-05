// ====== section 2 - selecting elements
//contoh1 : Mengubah text mengunakan element by.id
document.getElementById('ubah').innerHTML='text baru';

//contoh 2 : Mengetahui jumlah element menggunakan elements by name
let num = document.getElementsByName("orang").length;
document.getElementById("sum").innerHTML = num;

//contoh 3 : Menambahkan warna background menggunakan query selector
document.querySelector("h4.warna").style.backgroundColor = "grey";



// ==== section 3 - Traversing elements
//contoh 1 : Mengambil node name dari parent element pada tag li 
function myFunction() {
    var x = document.getElementById("myLI").parentElement.nodeName;
    document.getElementById("drink").innerHTML = x;
  }

// contoh 2 : Mengambil tag name dari body menggunakan get child elements
const collection = document.body.children;
let text = "";
for (let i = 0; i < collection.length; i++) {
  text += collection[i].tagName + "<br>";
}
document.getElementById("body").innerHTML = text;

// contoh 3 : Melihat item dari daftar berikutnya menggunakan get siblings of an element
let uwu = document.getElementById("item1").nextElementSibling.innerHTML; 
document.getElementById("item").innerHTML = uwu;



// ==== section 4 - Manipulating elements
// Contoh 1 : Menambahkan text pada tag p menggunakan innerHTML
document.getElementById('tambah').innerHTML = 'tambah baru';
// Contoh 2 : Menghapus list nama menggunakan remove child
function hapus(){
    const lis = document.getElementById("list");
    lis.removeChild(lis.firstElementChild);
}



// ==== section 5 - Working with Attributes 
// Contoh 1 : Mengambil atribute menggunakan get atribute 
const element = document.getElementById("mine"); 
let asmodeus = element.getAttribute("class"); 
document.getElementById("your").innerHTML = asmodeus;
// Contoh 2 : Menghapus atribute a href menggunakan removeAttribute.
function myFunction() {
    document.getElementById("myWebsite").removeAttribute("href"); 
  }



// ==== section 6 - Manipulating Element’s Styles
// Contoh 1 : Mengganti warna menggunkan style property
document.getElementById("object").style.color = "grey";
// Contoh 2 : Memunculkan background menggunakan classlist property
function muncul() {
    const list = document.getElementById("mybackground").classList;
    list.add("myStyle");
  }



// ==== section 7 - Working with Events
// Contoh 1 : Menampilkan waktu secara realtime menggunakan handling events onclick
function jam(){
    document.getElementById("waktu").innerHTML=Date();
}
// Contoh 2 : Custom events
function tidak(id){
    var baik = document.getElementById("btn_baik");
    var i = Math.floor(Math.random() * 300) + 1;
    var j = Math.floor(Math.random() * 100) + baik.offsetHeight;
    id.style.left = i + "px";
    id.style.top = j + "px";
}


// ==== section 8 - Scripting Web Forms
// Contoh 1 : Menghapus list nama pada options
function apus() {
    var x = document.getElementById("myfriend");
    x.remove(x.selectedIndex);
  }
// Contoh 2 : Memunculkan value dari output yang telah dipilih
function mobile() {
    var x = document.getElementById("myMobil").value;
    document.getElementById("mobil").innerHTML = "Pilihan kamu: " + x;
  }


