import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark theme background
        color: "#e0e0e0", // Light text color for contrast
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions (FAQ)
      </Typography>

      {/* uPVC FAQ Section */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        uPVC Doors and Windows
      </Typography>

      <Accordion sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px", marginBottom: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e0e0e0" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "#e0e0e0" }}>
            What are the advantages of uPVC doors and windows?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#e0e0e0" }}>
            uPVC doors and windows are energy-efficient, low-maintenance, durable, and offer great noise reduction. They are also available in a variety of colors and finishes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px", marginBottom: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e0e0e0" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ color: "#e0e0e0" }}>
            Are uPVC doors and windows weather-resistant?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#e0e0e0" }}>
            Yes, uPVC doors and windows are highly weather-resistant and can withstand rain, heat, and cold without losing their integrity. They are not prone to warping or corrosion.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px", marginBottom: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e0e0e0" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ color: "#e0e0e0" }}>
            How long do uPVC windows last?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#e0e0e0" }}>
            uPVC windows typically last between 20 to 40 years, depending on the quality of the material and installation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Aluminium FAQ Section */}
      <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
        Aluminium Doors and Windows
      </Typography>

      <Accordion sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px", marginBottom: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e0e0e0" }} />}
          aria-controls="panel1b-content"
          id="panel1b-header"
        >
          <Typography sx={{ color: "#e0e0e0" }}>
            What are the benefits of aluminium doors and windows?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#e0e0e0" }}>
            Aluminium doors and windows are known for their strength, durability, and slim frames. They offer a sleek, modern look and can hold large panes of glass for enhanced views.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px", marginBottom: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e0e0e0" }} />}
          aria-controls="panel2b-content"
          id="panel2b-header"
        >
          <Typography sx={{ color: "#e0e0e0" }}>
            Are aluminium windows energy-efficient?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#e0e0e0" }}>
            Yes, modern aluminium windows come with thermal breaks and insulation, which significantly improve energy efficiency and reduce heat transfer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px", marginBottom: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e0e0e0" }} />}
          aria-controls="panel3b-content"
          id="panel3b-header"
        >
          <Typography sx={{ color: "#e0e0e0" }}>
            How long do aluminium doors and windows last?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "#e0e0e0" }}>
            Aluminium doors and windows are highly durable and can last over 50 years with minimal maintenance, especially when protected from the elements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
