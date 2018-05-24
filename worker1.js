// worker1.js

importScripts('utils.js'); // works only then this file is loaded as a service worker

for(var i=1; i<=25; i++){ 
    sleep(500);
    postMessage('value of i: ' + i);
}

