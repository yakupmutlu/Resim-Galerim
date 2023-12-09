// Sayfayı yenilemek için bir fonksiyon
function sayfayiYenile() {
    location.reload();
}

// Yenileme butonunu bulma
var yenileButton = document.getElementById("yenileButton");

// Butona tıklanınca sayfayı yenileme fonksiyonunu çağırma
yenileButton.addEventListener("click", sayfayiYenile);


document.addEventListener("DOMContentLoaded", function () {

    addRandomImages();
});

function addRandomImages() {
    var imageContainer = document.getElementById("imageContainer");


    for (var i = 0; i < 7; i++) {
        var row = document.createElement("div");
        row.className = "row mb-4";


        for (var j = 0; j < 3; j++) {
            var col = document.createElement("div");
            col.className = "col-md-4";

            var img = document.createElement("img");
            img.src = "https://source.unsplash.com/random/450x150" + Math.random();
            img.alt = "Random Resim " + (i * 3 + j + 1);
            img.className = "img-fluid";

            col.appendChild(img);
            row.appendChild(col);
        }

        imageContainer.appendChild(row);
    }
}