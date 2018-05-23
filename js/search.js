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
        elseDo(searchTerm);
    }

    formEl.reset()
})

var elseDo = function (searchTerm) {
    var command = searchTerm.substring(0, 3);
    var keys = [
        "netflix", "https://www.netflix.com/",
        "facebook", "https://www.facebook.com",
        "reddit", "https://www.reddit.com/",
        "youtube", "https://www.youtube.com/",
        "gmail", "https://mail.google.com/",
        "amazon", "https://www.amazon.com/",
        "twitter", "https://www.twitter.com/",
        "git", "https://www.github.com/",
        "code", "https://www.codecademy.com/"
    ];

    var srchEn = [
        ':g ', "http://www.google.com/search?q=",
        ':b ', "http://www.bing.com/search?q=",
        ':d ', "http://www.duckduckgo.com/?q=",
        ':w ', "https://en.wikipedia.org/wiki/Special:Search/",
        ':y ', "http://www.youtube.com/search?q=",
        ':r ', "https://www.reddit.com/search?q=",
        ':ya', "https://search.yahoo.com/search?p=",
        ':t ', "https://www.twitter.com/search?q="
    ];
    var searchPrefix = "https://www.google.com/search?q=";  //default
    var final;
    var target = searchTerm.substring(0, 3);

    if(srchEn.includes(target)){
        searchTerm = searchTerm.substring(3, );
        searchPrefix = srchEn[srchEn.indexOf(target)+1];
        final = searchPrefix + searchTerm;
    } else {
        if (keys.includes(searchTerm)) {
            final = keys[keys.indexOf(searchTerm) + 1]
        } else {
            final = searchPrefix + searchTerm;
        }
    }

    window.open(
        final,
        '_blank'
    );
}

var protocolPrefixUrl = function (str) {
    str = str.substr(0, 7) === 'http://' || str.substr(0, 8) === 'https://' ? str : `http://${str}`;
    return str;
}
