
function win(){
window.open('http://localhost/new-tab/jj.html','_self', 'windowName', "height=400,width=600");
}
try{
chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    console.log(tablink);
    if(tablink=='chrome://newtab/'){
        win();
    }
});
document.getElementById("rec").addEventListener("click", win);
}
catch(e){

}
function OpenTabs(cases) {
    switch(cases){
    case 'history':
    chrome.tabs.create({url: 'chrome://history/'});
    break;
    case 'download':
    chrome.tabs.create({url: 'chrome://downloads/'});
    break;
    case 'settings':
    chrome.tabs.create({url: 'chrome://settings/'});
    break;
    case 'flags':
    chrome.tabs.create({url: 'chrome://flags/'});
    break;
    case 'version':
    chrome.tabs.create({url: 'chrome://version/'});
    break;
    case 'help':
    chrome.tabs.create({url: 'chrome://help/'});
    break;
    }
}

window.setInterval(function(){
httpGet();
}, 500);
function httpGet()
{
        
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost/new-tab/text.php', false ); // false for synchronous request
    xmlHttp.send( null );
    var funct=xmlHttp.responseText;
    console.log(funct);
    switch(funct){
        case 'history':OpenTabs(funct);
    httpClear();
        break;
        case 'download':OpenTabs(funct);
    httpClear();
        break;
        case 'settings':OpenTabs(funct);
    httpClear();
        break;
        case 'version' :OpenTabs(funct);
    httpClear();
        break;
         case 'flags':OpenTabs(funct);
    httpClear();
        break;
        case 'help':OpenTabs(funct);
    httpClear();
        break; 
    }
}

function httpClear(){
    var clearHttp = new XMLHttpRequest();
    clearHttp.open( "GET", 'http://localhost/new-tab/text.php?data', false ); // false for synchronous request
    clearHttp.send( null );
}

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
function reco(){
console.log('Recognition Function Called');
recognition.lang = 'en-US';
recognition.continuous     = false;
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();
    recognition.onresult = function(event) {
        console.log('You said: ','.'+event.results[0][0].transcript+'.');
        var str = event.results[0][0].transcript;
        if(str.includes('search')){
            console.log('Google Called');
                var value=str.replace('search', '');
                window.open('https://www.google.co.in/search?q='+value,'_self');
        }
        if(str.includes('open Facebook')){
            console.log('Facebook Called');
                window.open('https://www.facebook.com','_self');
        }
        if(str.includes('open Gmail')){
            console.log('Gmail Called');
                window.open('https://mail.google.com','_self');
        }
        if(str.includes('open YouTube')){
            console.log('YouTube Called');
                window.open('https://youtube.com','_self');
        }
        if(str.includes('open Twitter')){
            console.log('Twitter Called');
                window.open('https://twitter.com','_self');
        }
        if(str.includes('history')==true){
            console.log('History Called');
            httpGet('history');
            str="";
        }
        if(str.includes('download')==true){
            console.log('Downloads Called');
            httpGet('download');
            str="";
        }
        if(str.includes('settings')==true){
            console.log('Settings Called');
            httpGet('settings');
            str="";
        }
       if(str.includes('help')==true){
            console.log('help Called');
            httpGet('help');
            str="";
        }
       if(str.includes('flags')==true){
            console.log('Flags Called');
            httpGet('flags');
            str="";
        }
       if(str.includes('version')==true){
            console.log('version Called');
            httpGet('version');
            str="";
       }
}


    function httpGet(val)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", 'http://localhost/new-tab/text.php?data='+val, false ); // false for synchronous request
        xmlHttp.send( null );
        console.log(xmlHttp.responseText);
    }
}