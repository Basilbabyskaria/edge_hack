// for(let i=0;i<=2;i++){
// let BS=localStorage.getItem('buttonStatus');
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      // if(BS==true){
        chrome.scripting.executeScript({
          files: ['contentscript.js'],
          target: { tabId: tab.id }
        })
      // }
      
    

  
    }
  });
// }