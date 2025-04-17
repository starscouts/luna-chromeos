setInterval(() => {
    chrome.runtime.sendMessage({ keepAlive: true });
}, 10000);