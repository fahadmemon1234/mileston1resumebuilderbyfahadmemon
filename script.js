var checkbox = document.getElementById("toggleSkillsButton");
checkbox.addEventListener("change", function () {
    toggleSectionVisibility(this.checked ? true : false);
});
function toggleSectionVisibility(isVisible) {
    var section = document.getElementById("skillsSection");
    if (section) {
        if (isVisible == true) {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}
