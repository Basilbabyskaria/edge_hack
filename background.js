chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.url.startsWith("https://basilbabyskaria.github.io/EdgeHackMobile")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const buttons = document.querySelectorAll("button");
        let button = null;
        buttons.forEach((button) => {
          if (button.textContent.trim() === "Start 2") {
            button.click();
          }
        });
      },
    });
  }
});
