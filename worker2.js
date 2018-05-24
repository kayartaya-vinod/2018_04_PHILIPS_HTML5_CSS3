// worker2.js

importScripts('utils.js');

for(var j=1; j<=50; j++){ 
    sleep(250);
    postMessage('value of j: ' + j);
}

