chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            cancel: details.url.indexOf("hagrid") != -1
        };
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);
