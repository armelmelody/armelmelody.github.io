/* =========================================================
   SECTION NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(".view");
const buttons = document.querySelectorAll("[data-section]");


function showSection(sectionId) {

    sections.forEach((section) => {

        section.classList.remove("active");

    });


    const target = document.getElementById(sectionId);

    if (!target) {
        return;
    }


    target.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const sectionId = button.dataset.section;

        showSection(sectionId);

    });

});