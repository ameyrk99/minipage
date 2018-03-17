var formEl = document.querySelector('.js-form');
var inputEl = formEl.elements[0];


formEl.addEventListener('submit', evt => {
    evt.preventDefault()

    var searchTerm = inputEl.value;
    var isUrl = isValidUrl(searchTerm);

    if (isUrl) {
        window.location.href = protocolPrefixUrl(searchTerm);
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
        "twitter", "https://www.twitter.com/"
    ];
    check = 0;
    var searchPrefix;
    var final;
    switch (command) {
        //Don't forget to break if you add something to this :)
        case ':g ':
            searchPrefix = "http://www.google.com/search?q=";
            break;
        case ':d ':
            searchPrefix = "http://www.duckduckgo.com/?q=";
            break;
        case ':w ':
            searchPrefix = "https://en.wikipedia.org/wiki/Special:Search/";
            break;
        case ':y ':
            searchPrefix = "http://www.youtube.com/search?q=";
            break;
        case ':r ':
            searchPrefix = "https://www.reddit.com/search?q=";
            break;
        case ':ya':
            searchPrefix = "https://search.yahoo.com/search?p=";
            break;
        case ':t ':
            searchPrefix = "https://www.twitter.com/search?q=";
            break;
        default:
            searchPrefix = "https://www.google.com/search?q=";
            check = 1;
            break;
    }
    if (check != 1) {
        searchTerm = searchTerm.substring(3, );
        final = searchPrefix + searchTerm;
    } else if (check == 1) {
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

var isValidUrl = function (str) {
    return str.includes('.');
}


//time
var d = new Date();
var date = d.toString().split(" ");
for (i = 0; i < 2; i++) {
    date.pop();
}
document.getElementById("dateTime").innerHTML = date.join(" ");

