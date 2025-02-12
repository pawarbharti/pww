import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Container, Box } from "@mui/material";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_n8ak95o";
    const templateId = "template_f5bnfrp";
    const publicKey = "QTFflwixvQgkxxBRh";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Pinnacle Window",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Your Name"
            variant="outlined"
            required
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              backgroundColor: "#121212",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#121212",
                "& fieldset": {
                  borderColor: "#cccccc",
                },
                "&:hover fieldset": {
                  borderColor: "#999999",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#007bff",
                },
                "& input": {
                  color: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Your Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "#121212",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#121212",
                "& fieldset": {
                  borderColor: "#cccccc",
                },
                "&:hover fieldset": {
                  borderColor: "#999999",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#007bff",
                },
                "& input": {
                  color: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              backgroundColor: "#121212",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#121212",
                "& fieldset": {
                  borderColor: "#cccccc",
                },
                "&:hover fieldset": {
                  borderColor: "#999999",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#007bff",
                },
                "& input": {
                  color: "white",
                },
                "& textarea": {
                  color: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Email
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EnquiryForm;
