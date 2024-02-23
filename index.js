document.addEventListener("DOMContentLoaded", function() {
    if (screen.width <= 1000 ) {
        let discord_tekst = document.querySelector('.navigacija_dicsord_tekst')
        let discord_btn = document.querySelector('.tipka1')
        let dicsord_box_tekst = document.querySelector('.navigacija_discord_box_tekst')
        let dicsord_box = document.querySelector('#navigacija_discord_box')
        discord_tekst.innerHTML = ''
        discord_btn.style.width = "50px"
        discord_btn.style.right = "7px"
        dicsord_box_tekst.style.fontSize = "20px"
        dicsord_box.style.width = "150px"
        dicsord_box.style.height = "30px"
        dicsord_box.style.right = "65px"
        dicsord_box.style.top = "3px"
    }
});

function navigacija_discord_pokatiHelpBox() {
    var x = document.getElementById("navigacija_discord_box");
    x.style.display = "block";

    setTimeout(function() {
        x.style.display = "none";
    }, 2000);
}




function navigacija_discord_kopiraj() {
    navigator.clipboard.writeText("windows_10_");
    
}
