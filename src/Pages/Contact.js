import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EnquiryForm from "../components/EnquiryForm";

const Contact = () => {
  const mapurl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111976.23348798063!2d77.00946440656284!3d28.7118557174737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0723bd6a7bbd%3A0x8ca33d2a7832cf6c!2sPinnacle%20home%20solutions!5e0!3m2!1sen!2sin!4v1739111824979!5m2!1sen!2sin";

  return (
    <Box sx={{ backgroundColor: "#000000", color: "white", py: 6 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Feel Free to Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Contact Information
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              📍 203, 2nd floor DDA tower, Plot No. 2, Sec-5, Rohini,
              Delhi-110085
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              📞 +91-9910553531, +91-8130760799
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              📧 pinnaclehomesolutions24@gmail.com
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: "0.35em",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Our Location
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                title="Google Map"
                src={mapurl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "8px",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Send us a Message
            </Typography>

            {/* Use the EnquiryForm component here */}
            <EnquiryForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
