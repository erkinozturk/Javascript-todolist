const WHITESPACE = new RegExp(/^\s+$/);
let ulDOM = document.querySelector("ul")
let liDOM = document.getElementsByTagName("li")
let span = document.createElement("span")
let silSembolu = document.createTextNode("\uD83D\uDDF4")
let metniSil = document.getElementsByClassName("delete")


for (let i = 0; i < liDOM.length; i++) {    // Proje geregi html dosyasina ekli gelen To Do List elemanlarina silinebilmeleri icin "x" eklenir
    span = document.createElement("span")
    silSembolu = document.createTextNode("\uD83D\uDDF4")
    span.className = "delete"
    span.appendChild(silSembolu)
    liDOM[i].appendChild(span)
}

function deleteElement() { // Yanindaki X e tiklandiginda ekrandan silinecek
    for (let i = 0; i < metniSil.length; i++) {
        metniSil[i].onclick = function deleteElement() {
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}
deleteElement()

function newElement() {
    let girilenVeri = document.getElementById("task")

    if (girilenVeri.value != '' && !WHITESPACE.test(girilenVeri.value)) { // Girilen metnin gecerli olup olmadigi kontrol edilir
        // Girilen metin yeni li olusturulup ona aktarilir
        let liOlustur = document.createElement("li")
        let metinTextNode = document.createTextNode(girilenVeri.value)
        liOlustur.appendChild(metinTextNode)
        ulDOM.appendChild(liOlustur)

        for (let i = 0; i < liDOM.length; i++) { // To Do List elemanina silinebilmesi icin "x" eklenir
            if (i == liDOM.length - 1) {
                span = document.createElement("span")
                silSembolu = document.createTextNode("\uD83D\uDDF4")
                span.className = "delete"
                span.appendChild(silSembolu)
                liDOM[i].appendChild(span)
            }
        }

        deleteElement()
        girilenVeri.value = ""
        $('.success').toast('show'); // Toast bildirimi
    } else {
        task.value = ""
        $('.error').toast('show'); // Toast bildirimi
    }
}

ulDOM.addEventListener('click', function tickElement(e) { //Tiklandiginda yazinin ustu cizilecek ve yanina bir tik gelecek
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('ticked')
    }
})