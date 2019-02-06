var btnAdd = document.querySelector('#btnAdd');
var txtCity = document.querySelector('#txtCity');
var storage = localStorage;

btnAdd.onclick = function(){
    var city = txtCity.value;
    if(city!='') {
        var cities = storage['cities'];
        if(!cities) {
            cities = [];
        }
        else {
            cities = JSON.parse(cities);
        }
        cities.push(txtCity.value);
        storage.setItem('cities', JSON.stringify(cities));
        txtCity.value = '';
        txtCity.focus();
        populateCities();
    }
};

function populateCities() {
    var cities = storage.getItem('cities');
    var listItems= '';
    if(cities) {
        cities = JSON.parse(cities);
        cities.forEach(function(city){
            listItems += '<li>' + city + '</li>';
        });
        document.querySelector('#cityList').innerHTML = listItems;
    }
}
populateCities();