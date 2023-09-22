
function setTitle(title) {
    document.getElementById('tabTitle').textContent = title;
  }

document.getElementById('button').addEventListener("click",function(){
    
    chrome.tabs.query({
        active : true,
        currentWindow : true
    },
    function(tabs){
    
        if (tabs && tabs.length > 0) {
        var tab = tabs[0];
        var title = tab.title;
    
        setTitle(title);
        }
        else{
            setTitle(title);
        }
    
    }
    )

})