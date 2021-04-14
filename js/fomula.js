// giving variables values- declaration
function getAkanName() {
  let yearOfBirth = parseInt(document.getElementById("year-input").value);
  let monthOfBirth = parseInt(document.getElementById("month-input").value);
  let dayOfBirth = parseInt(document.getElementById("day-input").value);

  let genders = document.getElementsByName("gender");

  //the gender function
  function getGender() {
    for (let gender of genders) {
      if (gender.checked) {
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();

  console.log(myGenderValue);

  // function validator
  function monthValidator() {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }
  // validating the day
  function dayValidator() {
    if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31) {
      return false;
    } else {
      return true;
    }
  }

  //variables validator
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //how to determine the date of birth

  if (monthOfBirth < 3) {
    monthOfBirth += 12;
    yearOfBirth--;
  }
  let dayOfWeekNumber = (dayOfBirth + parseInt(((monthOfBirth + 1) * 26) / 10) + yearOfBirth + parseInt(yearOfBirth / 4) + 6 * parseInt(yearOfBirth / 100) + parseInt(yearOfBirth / 400) - 1) % 7;

  //introducing the male and the female name arrays
  let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


  let femaleAkanNames = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  //making sure that the input is valid
  if (myGenderValue == "male" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {

      //male...
      case 0:
        document.getElementById('result').textContent = "Your birthday was on a Sunday and your Akan name is " + maleAkanNames[0];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 1:
        document.getElementById('result').textContent = "Your birthday was on a Monday and your Akan name is " + maleAkanNames[1];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "Your birthday was on a Tuesday and your Akan name is " + maleAkanNames[2];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "Your birthday was on a Wednesday and your Akan name is " + maleAkanNames[3];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "Your birthday was on a Thursday and your Akan name is " + maleAkanNames[4];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "Your birthday was on a Friday and your Akan name is " + maleAkanNames[5];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "Your birthday was on a Saturday and your Akan name is " + maleAkanNames[6];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      default:
        alert("no Akan name found for you!(");

    }

    //female..

  } else if (myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {
      case 0:
        document.getElementById('result').textContent = "Your birthday was on a Sunday and your Akan name is " + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 1:
        document.getElementById('result').textContent = "Your birthday was on a Monday and your Akan name is " + femaleAkanNames[1];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        alert("Kwadwo");
        break;
      case 2:
        document.getElementById('result').textContent = "Your birthday was on a Tuesday and your Akan name is " + femaleAkanNames[2];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "Your birthday was on a Wednesday and your Akan name is " + femaleAkanNames[3];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "Your birthday was on a Thursday and your Akan name is " + femaleAkanNames[4];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "Your birthday was on a Friday and your Akan name is " + femaleAkanNames[5];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "Your birthday was on a: your Akan name is " + femaleAkanNames[6];
        document.getElementById('display-name').textContent = "here is your Akan name: ";
        return false;
        break;
      default:
        alert("No akan name found for you:(");
    }
  } else {
    alert("You entered invalid month or day");
  }
}