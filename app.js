let forminput = document.getElementById("form-name");
let submitbtn = document.getElementById("form-submit");
let formemail = document.getElementById("form-email");
let formdob = document.getElementById("form-dob");

submitbtn.addEventListener("click", () => {
  if (forminput.value == "" || formemail.value == "" || formdob.value == "") {
    alert("Please fill all the details");
  } else {
    alert(`Successfully submitted ${forminput.value}`);
  }
});
