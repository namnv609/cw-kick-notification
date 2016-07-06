chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var accountInfoURL = null;
    var accountInfoURLRegEx = /^^https\:\/\/www\.chatwork\.com\/gateway\.php\?cmd=init_load.*$/gmi;

    if (details.type === "xmlhttprequest"
        && accountInfoURLRegEx.test(details.url)
    ) {
        console.log(details.url);
        getAccountInfo(details.url);
    }
}, {
    urls: ["<all_urls>"]
});

function getAccountInfo(accountInfoURL) {
    $.getJSON(accountInfoURL, function(response) {
        console.log(response);
    });
}
