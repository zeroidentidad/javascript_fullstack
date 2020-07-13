let textMuyLargo = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Praesent massa sem, interdum sed vulputate id, 
hendrerit eget erat. Fusce tincidunt vulputate vestibulum. 
Proin aliquet semper urna ac eleifend. In vel risus nec mauris 
porttitor aliquam sed vitae magna. Nam condimentum vel neque 
vitae pulvinar. Etiam tristique ligula eu urna finibus dapibus. 
Praesent ut ipsum id turpis varius porta non id tortor. 
Pellentesque malesuada imperdiet mi. Mauris ac mauris quis turpis 
lobortis luctus. Nulla non felis pretium, ullamcorper sem in, aliquam 
sapien. Nulla viverra lacus ac enim mollis laoreet. Nunc tincidunt justo 
diam, at convallis nunc tempus a. Duis porttitor ullamcorper leo vel 
elementum. Morbi ac nulla sem. Maecenas non ullamcorper lorem. Integer 
faucibus tincidunt tellus, sed tincidunt diam iaculis sit amet.

Nullam nec pellentesque arcu, a bibendum velit. Mauris efficitur 
in ligula ac facilisis. Pellentesque ut nisi purus. Ut semper quis 
eros at egestas. Etiam eu lectus vel eros placerat molestie. Integer 
placerat quam quis urna tincidunt ultrices. Etiam purus mauris, 
rhoncus non scelerisque id, egestas et tortor. Quisque eu tincidunt 
turpis. Pellentesque lacinia, turpis in dignissim volutpat, ex libero 
viverra massa, at varius tellus massa vitae ex. Phasellus in mi sed 
eros molestie mollis. Pellentesque non arcu at urna aliquam aliquam. 
Proin euismod ligula massa. Praesent sed enim a ex volutpat fermentum 
non blandit turpis. Morbi ut ante purus.

Aliquam nec justo eget libero convallis dapibus. Proin et tristique 
arcu, eu gravida sapien. Quisque venenatis sapien sed commodo posuere. 
Curabitur placerat velit in commodo volutpat. Etiam maximus leo non 
sagittis volutpat. Donec quis quam eu nunc pellentesque vulputate in 
non nisi. Donec odio massa, mattis ut faucibus quis, molestie eu magna.

Proin enim arcu, convallis eget magna eget, maximus malesuada massa. 
Sed bibendum, lorem eu molestie congue, metus ex tincidunt dui, ac 
euismod nibh ligula vitae ipsum. Nam posuere libero sit amet pretium 
mollis. Vivamus maximus eget neque quis condimentum. Ut eu lacinia diam. 
Fusce rutrum efficitur erat quis aliquam. Cras scelerisque at est ut 
tristique. Maecenas sollicitudin dui quis erat vulputate cursus. 
Praesent feugiat vel arcu vitae feugiat. Maecenas condimentum gravida 
ipsum non accumsan. Proin congue libero sem, a tempus tellus consectetur 
eu. Nullam id quam nec velit blandit euismod. Donec dui sem, sodales vitae 
odio quis, posuere mollis massa. Cras sed ornare ipsum, et congue sapien. 
Nam sed justo vestibulum, scelerisque sem at, hendrerit ligula. Morbi 
ullamcorper congue nisl.

Aliquam vestibulum, augue at fringilla scelerisque, libero lorem 
fringilla sapien, a rhoncus nunc massa vel erat. Nullam vitae purus 
ornare, luctus urna vitae, volutpat magna. Maecenas venenatis ligula in 
tortor fringilla accumsan. Vestibulum ante ipsum primis in faucibus orci 
luctus et ultrices posuere cubilia Curae; Mauris aliquam est arcu, eget 
consectetur sem gravida nec. Morbi tempor eget magna in vehicula. Nam 
ullamcorper porta turpis ac interdum. Praesent at odio rutrum, tincidunt 
augue feugiat, scelerisque quam. Nullam at est sapien. Curabitur rutrum 
mauris metus, eget facilisis ligula lobortis sed. Integer rhoncus ipsum 
purus, ut faucibus dolor auctor eget.`

// Como crear un worker
const miWorker = new Worker('./js/worker.js');

// Así se envia un mensaje al worker
miWorker.postMessage({tipo: "codificar", mensaje: textMuyLargo});

// Como recibir un mensaje desde el worker
miWorker.onmessage = function (e) {
    console.log(e.data.resultado);
}

