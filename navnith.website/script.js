const editor = document.getElementById("editor");

const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", function() {

    editor.style.display = "block";

    document.getElementById("nameInput").value =
        localStorage.getItem("name") || "Navanitha";

    document.getElementById("aboutInput").value =
        localStorage.getItem("about") ||
        "I am a Computer Science Engineering graduate.";

    document.getElementById("skillsInput").value =
        localStorage.getItem("skills") ||
        "HTML, CSS, JavaScript, SQL, Java";

});

function saveProfile() {

    const name = document.getElementById("nameInput").value;
    const about = document.getElementById("aboutInput").value;
    const skills = document.getElementById("skillsInput").value;

    localStorage.setItem("name", name);
    localStorage.setItem("about", about);
    localStorage.setItem("skills", skills);

    document.querySelector(".home h1 span").textContent = name;

    document.querySelector(".about-box p").textContent = about;

    const skillContainer =
        document.querySelector(".skills-container");

    skillContainer.innerHTML = "";

    skills.split(",").forEach(item => {

        if (item.trim()) {
            const div = document.createElement("div");
            div.className = "skill";
            div.textContent = item.trim();
            skillContainer.appendChild(div);
        }

    });

    editor.style.display = "none";

    alert("Profile Updated Successfully!");
}

function closeEditor() {
    editor.style.display = "none";
}