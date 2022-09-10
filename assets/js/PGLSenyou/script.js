window.onload = function() {
  let text = document.getElementById('installDialogContainer').innerHTML;
  document.getElementById('installDialogContainer').innerHTML = "<div class='SeihinName'> <h2>____のダウンロードとインストールを開始しますか？</h2> </div> <input class='InstallButton' type='button' value='Install' onclick='InstallStart();'/>";
}

//C#側にインストール可能のメッセージを送る
function InstallStart() {
    //C#の関数の実行
    document.title = 'https://onedrive.live.com/download?cid=4FC00FC9ECEFF2D7&resid=4FC00FC9ECEFF2D7%21112&authkey=AJrZYWWx8s2BLeo';
    $('.installDialog').removeClass("installDialogShow");
    $('.NotinstallDialog').addClass("installDialogShow");
    chrome.webview.hostObjects.class.MessageShow("InstallStart");
}

$(window).on('load', function(){
  let title = document.title;
  var result = title.replace("(PescadoGamesLauncher)", "");
  $('.SeihinName').html('<h2>' + (result) + 'のダウンロードとインストールを開始しますか？</h2>');
});
