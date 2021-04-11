let dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Female = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let Male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


function results() {
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("date").value);
    let date = outputDate(year + "/" + month + "/" + day);
    let gender = print();
    let outputDay = date.getDay();
    let akanName;

    if (year < 1900 || year > 2050) {
        alert("Opps something wasn't right. Please try again.");
        return false;

    }
    if (month < 1 || month > 12) {
        alert("Unexpected error has occured .Please input the correct month.");
        return false;
    }

    if (day < 1 || day > 31) {
        alert("Opps something wasn't right. Please input the correct day again.");
        return false;

    }
    if (gender === "male") {
        akanName = Male[outputDay];

    } else {
        akanName = Female[outputDay];
    }

    alert("You were born on "+ dayOfTheWeek[outputDay] + " and your akan name is" + akanName);
}

function print() {
    let gender = document.getElementByName("gender");
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return (gender[i].value)
        }
    }
}

function reset() {
    document.getElementById("buttons").reset();
}

