import emailjs from "emailjs-com";

// Initialize EmailJS with your user ID (No need for script tag here)
emailjs.init("vnhT7ebP_0T6LTqH2"); 

export const sendEmail = (formData) => {
  return new Promise((resolve, reject) => {
    emailjs.send(
      "service_681jsly", 
      "template_74pfbsq",
      {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
      },
      "Bharti Pawar" 
    )
    .then((response) => {
      resolve(response);
      console.log(response);
    })
    .catch((error) => {
      reject(error);
      console.log(error);
    });
  });
};
