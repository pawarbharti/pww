import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import { sendEmail } from "../Utils";

const Contact = () => {
  const mapurl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.190593014791!2d77.320955!3d28.57583845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f97fb7b77%3A0x57e50ec90fd80e55!2sNoida%20Sector-%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1739003369453!5m2!1sen!2sin";

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the sendEmail service
      await sendEmail(formData);
      alert("Message sent successfully!");
      
      // Optionally, reset the form after submission
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#000000", color: "white", py: 6 }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Feel Free to Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              📍 203, 2nd floor DDA tower, Plot No. 2, Sec-5, Rohini, Delhi-110085
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              📞 +91-9910553531, +91-8130760799
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              📧 pinnaclehomesolutions24@gmail.com
            </Typography>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: "0.35em" }}>
                Our Location
              </Typography>
              <iframe
                title="Google Map"
                src={mapurl}
                width="500px"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
              Send us a Message
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                backgroundColor: "#1e1e1e",
                padding: 3,
                borderRadius: 2,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={{
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": { color: "white" },
                  "& .MuiInputBase-input::placeholder": { color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputProps={{
                  placeholder: "Enter your name",
                }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                sx={{
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": { color: "white" },
                  "& .MuiInputBase-input::placeholder": { color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputProps={{
                  placeholder: "Enter your phone number",
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": { color: "white" },
                  "& .MuiInputBase-input::placeholder": { color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputProps={{
                  placeholder: "Enter your email",
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                sx={{
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": { color: "white" },
                  "& .MuiInputBase-input::placeholder": { color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputProps={{
                  placeholder: "Enter your message",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#1877f2",
                  "&:hover": { backgroundColor: "#166fe5" },
                  color: "white",
                  mt: 2,
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
