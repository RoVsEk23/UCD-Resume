function sendMail(contactForm) {
  emailjs
    .send("gmail", "template_hrqoqoj", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      project_request: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert("THANK YOU FOR YOUR MESSAGE, I WILL GET BACK TO YOU SHORTLY");
      },
      function (error) {
        console.log("FAILED", error);
        alert("SORRY YOUR MESSAGE DID NOT GO THROUGH!");
      }
    );
  return false; // To block from loading a new page
}
