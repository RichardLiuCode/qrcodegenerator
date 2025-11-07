document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("display").src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(document.getElementById("input").value) + "&size=150x150"
    document.getElementById("DisplayBLock").style.display = "revert"
});
document.getElementById("downloadBTN").addEventListener("click", function () {
    let imageURL = document.getElementById("display").src;
    fetch(imageURL)
        .then(function (response) {
            return response.blob();
        })
        .then(function (image) {
            let downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(image)
            downloadLink.download = "QRCode.png";
            downloadLink.click();
        });

});
document.getElementById("copyBTN").addEventListener("click", function () {
    let imageURL = document.getElementById("display").src;
    fetch(imageURL)
        .then(function (response) {
            return response.blob();
        })
        .then(function (image) {
            navigator.clipboard.write([
                new ClipboardItem({
                    [image.type]: image
                })
            ])
        });
});