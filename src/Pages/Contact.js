import React from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "#000000", color: "white", py: 6 }}>
      <Container>
        {/* Feel Free to Contact Us Heading */}
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Feel Free to Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Left Side: Contact Information */}
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
          </Grid>

          {/* Right Side: Enquiry Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
              Send us a Message
            </Typography>
            <Box
              component="form"
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
                  placeholder: 'Enter your name',
                }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
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
                  placeholder: 'Enter your phone number',
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
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
                  placeholder: 'Enter your email',
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
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
                  placeholder: 'Enter your message',
                }}
              />
              <Button
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
