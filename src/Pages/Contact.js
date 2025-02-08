import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EnquiryForm from "../components/EnquiryForm";

const Contact = () => {
  const mapurl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.190593014791!2d77.320955!3d28.57583845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f97fb7b77%3A0x57e50ec90fd80e55!2sNoida%20Sector-%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1739003369453!5m2!1sen!2sin";

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

            {/* Use the ContactForm component here */}
            {/* <ContactForm /> */}
            <EnquiryForm/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
