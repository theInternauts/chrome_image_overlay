chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		file: 'myscript.js'
  });

  chrome.tabs.insertCSS({
		file: 'mystyles.css'
  });
});

// chrome.tabs.onSelectionChanged.addListener(function(tabId) {
//   lastTabId = tabId;
//   chrome.pageAction.show(lastTabId);
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  lastTabId = tabId;
  chrome.pageAction.show(lastTabId);
});