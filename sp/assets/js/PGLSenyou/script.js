window.onload = function() {
  let text = document.getElementById('InstallButtonDiv').innerHTML;
  document.getElementById('InstallButtonDiv').innerHTML = "<input class='InstallButton' type='button' value='Install' onclick='InstallStart();'/>";
}

//C#側にインストール可能のメッセージを送る
function InstallStart() {
    //C#の関数の実行
    chrome.webview.hostObjects.class.MessageShow("InstallStart");
    document.title = 'https://onedrive.live.com/download?cid=4FC00FC9ECEFF2D7&resid=4FC00FC9ECEFF2D7%21112&authkey=AJrZYWWx8s2BLeo';
}
