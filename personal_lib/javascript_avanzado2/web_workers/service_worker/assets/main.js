navigator.serviceWorker.register('worker.js').then(() => {
    console.log("servide worker registrado");
})

document.getElementById("btn").addEventListener("click", ()=>{

    let urls = [
        "assets/images/img1.jpeg",
        "assets/images/img2.jpeg",
        "assets/images/img3.jpeg",
        "assets/images/img4.jpeg",
        "assets/images/img5.jpeg"
    ];
    
    let aleatorio = Math.round(Math.random()*4);

    fetch(urls[aleatorio]).then(response => {
        return response.blob();
    }).then(blob => {
        let url = URL.createObjectURL(blob);
        let imgTag = document.createElement("img");
        imgTag.src = url;
        document.body.appendChild(imgTag);
    })
})