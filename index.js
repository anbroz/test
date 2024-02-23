function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function kopiraj() {
    $('#box-kopirano').hide();
    navigator.clipboard.writeText("windows_10_");
    $('#box-kopirano').show();
    sleep(2000).then(() => { $('#box-kopirano').hide();; });
    
}