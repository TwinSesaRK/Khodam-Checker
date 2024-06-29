const khodamList = [
    "Kucing Oyen",
    "Ular Sendok",
    "Sendal Jepit",
    "Beras Bulog",
    "Lia Amalia",
    "Agus Warmin",
    "Ikan Tongkol",
    "Cumi-Cumi",
    "Kosong"
];

function pilihkhodam(event) {
    event.preventDefault();
    const nama = document.getElementById("name").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
    if (nama) {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamTerpilih = khodamList[randomIndex];
        resultDiv.textContent = `Nama ${nama} Khodam ${khodamTerpilih}.`;

        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
    } else {
        resultDiv.textContent = "Nama Tidak Boleh Kosong.";
    }
}

document.getElementById("khodamform").addEventListener("submit", pilihkhodam);