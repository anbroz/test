function navigacija_discord_pokatiHelpBox() {
    var x = document.getElementById("box-kopirano");
    x.style.display = "block";

    setTimeout(function() {
        x.style.display = "none";
    }, 2000);
}




function navigacija_discord_kopiraj() {
    navigator.clipboard.writeText("windows_10_");
    
}