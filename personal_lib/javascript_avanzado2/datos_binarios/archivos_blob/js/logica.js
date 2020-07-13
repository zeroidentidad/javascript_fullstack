function blancoNegro(data) {
  for (var i = 0; i < data.length; i+= 4) {
    let gris = data[i] * .3 + data[i+1] * .59 + data[i+2] * .11;
    data[i] = gris; 
    data[i+1] = gris; 
    data[i+2] = gris; 
  }
  return data;
}


async function transformarDescargar(image){

  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  contexto.drawImage(image, 0, 0);
  let imgData = contexto.getImageData(0, 0, canvas.width, canvas.height);
  blancoNegro(imgData.data);
  contexto.putImageData(imgData, 0, 0);

  let url = canvas.toDataURL("image/png")
  .replace("image/png", "image/octet-stream");
  const descarga = document.getElementById("descarga");
  descarga.setAttribute("href", url);
}


fetch("../img/img1.jpg")
.then(response => response.blob())
.then(blob => {
    let url = URL.createObjectURL(blob);
    let imgTag = document.createElement("img");
    imgTag.onload = ()=>{
      transformarDescargar(imgTag);
    };
    imgTag.src = url;
    document.body.appendChild(imgTag);
});