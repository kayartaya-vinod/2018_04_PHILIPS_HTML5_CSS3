// utils.js

function sleep(duration) {
    var ms1 = Date.now();
    var ms2;
    while (true) {
        ms2 = Date.now();
        if ((ms2 - ms1) > duration) {
            break;
        }
    }
}