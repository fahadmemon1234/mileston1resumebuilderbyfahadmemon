const checkbox = document.getElementById(
  "toggleSkillsButton"
) as HTMLInputElement;

checkbox.addEventListener("change", function () {
  toggleSectionVisibility(this.checked ? true : false);
});

function toggleSectionVisibility(isVisible: boolean): void {
  const section = document.getElementById("skillsSection");

  if (section) {
    if (isVisible == true) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
}


