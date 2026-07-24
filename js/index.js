<<<<<<< HEAD
function sendMail()
{
=======
function sendMail(event) {
  event.preventDefault(); // ✅ stops reload properly

>>>>>>> 7c717d3 (update projects)
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
<<<<<<< HEAD

  };


const serviceId = "service_rxg5t9r";
const templateId = "template_qnybxx9";

emailjs.send(serviceId, templateId, params)
  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);

    alert("your messsage sent successfully");

  })
  .catch((err) => console.log(err));



}
=======
  };

  const serviceId = "service_rxg5t9r";
  const templateId = "template_qnybxx9";

  emailjs.send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
>>>>>>> 7c717d3 (update projects)
