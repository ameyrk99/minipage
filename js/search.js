var formEl = document.querySelector('.js-form');
var inputEl = formEl.elements[0];

//dateTime
/*window.setInterval(function () {
    var d = new Date();
    document.getElementById("dateTime").innerHTML = d;
}, 1000);*/


formEl.addEventListener('submit', evt => {
    evt.preventDefault()

    var searchTerm = inputEl.value;

    if (searchTerm.includes('.')) {
        window.open(
            protocolPrefixUrl(searchTerm),
            '_blank'
        );
    } else {
        var searchPrefix = "https://duckduckgo.com/?q=";
        var final = searchPrefix + searchTerm;
        
        window.open(
            final,
            '_blank',
        );
    }

    formEl.reset()
})

var protocolPrefixUrl = function (str) {
    str = str.substr(0, 7) === 'http://' || str.substr(0, 8) === 'https://' ? str : `http://${str}`;
    return str;
}
