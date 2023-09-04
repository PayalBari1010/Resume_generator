function generateCV() {
    // Get the values of the form fields.
    let name = document.getElementById("nameField").value;
    let contact = document.getElementById("contactField").value;
    let address = document.getElementById("addressField").value;
    let linkedIn = document.getElementById("linkedField").value;
    let facebook = document.getElementById("fbField").value;
    let instagram = document.getElementById("instaField").value;
    let objective = document.getElementById("objectiveField").value;

    // Get the values of the work experience and academic qualification textareas.
    let workExperiences = [];
    let academicQualifications = [];
    const wes = document.getElementsByClassName("weField");
    for (let we of wes) {
        workExperiences.push(we.value);
    }
    const aqs = document.getElementsByClassName("eqField");
    for (let aq of aqs) {
        academicQualifications.push(aq.value);
    }

    // Set the values of the corresponding elements in the template.
    document.getElementById("nameT1").innerHTML = name;
    document.getElementById("nameT2").innerHTML = name;
    document.getElementById("contactT").innerHTML = contact;
    document.getElementById("addressT").innerHTML = address;
    document.getElementById("linkedT").innerHTML = linkedIn;
    document.getElementById("fbT").innerHTML = facebook;
    document.getElementById("instaT").innerHTML = instagram;
    document.getElementById("objectiveT").innerHTML = objective;
    document.getElementById("weT").innerHTML = workExperiences.join("</li><li>");
    document.getElementById("aqT").innerHTML = academicQualifications.join("</li><li>");

    // Get the image file from the form.
    let file = document.getElementById("photoField").files[0];

    // If the file is not empty, set the image in the template.
    if (file) {
        let reader = new FileReader();
        reader.onload = function() {
            document.getElementById("imgTemplate").src = reader.result;
        };
        reader.readAsDataURL(file);
    }

    // Hide the form and show the template.
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    // Remove the "Generate CV" button from the template.
    document.getElementById("generateCV").remove();
}
