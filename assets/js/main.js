document.getElementById("all-cards").addEventListener("click", show_cards);
document.getElementById("profile").addEventListener("click", show_profile);
document.getElementById("graphics").addEventListener("click", show_graphics);

profileContainer = document.getElementById("container-profile");
allCardsContainer = document.getElementById("container-all-cards");
allGraphics = document.getElementById("container-graphic-design");

function show_profile(){
    profileContainer.style.display = "block";
    allCardsContainer.style.display = "none";
    allGraphics.style.display = "none";
}
function show_cards() {
    allCardsContainer.style.display = "block";
    profileContainer.style.display = "none";
    allGraphics.style.display = "none";
}
function show_graphics() {
    allGraphics.style.display = "block";
    allCardsContainer.style.display = "none";
    profileContainer.style.display = "none";
}