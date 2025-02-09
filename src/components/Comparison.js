import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const Comparison = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 2,
        backgroundColor: "#121212",
        color: "#e0e0e0",
        gap: 2,
      }}
    >
      {/* uPVC Section */}
      <Box
        sx={{
          flex: 1,
          margin: 2,
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          boxShadow: 4,
          padding: 2,
          maxWidth: "45%",
          "@media (max-width:600px)": {
            maxWidth: "100%",
          },
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>
          Why uPVC?
        </Typography>
        <List>
          <ListItem>
            Energy-efficient: Provides excellent insulation, keeping your home
            cool in summer and warm in winter.
          </ListItem>
          <ListItem>
            Low Maintenance: Requires minimal upkeep, no painting or treatment
            required.
          </ListItem>
          <ListItem>
            Cost-effective: Affordable initial investment compared to aluminium
            or other materials.
          </ListItem>
          <ListItem>
            Durability: Resistant to moisture, rotting, and corrosion, ensuring
            long-lasting use.
          </ListItem>
          <ListItem>
            Noise Reduction: Great soundproofing qualities, ideal for noisy
            environments.
          </ListItem>
          <ListItem>
            Environmentally Friendly: Made from recyclable materials and
            eco-friendly manufacturing processes.
          </ListItem>
          <ListItem>
            Variety of Finishes: Available in different colors and textures to
            suit various aesthetic preferences.
          </ListItem>
          <ListItem>
            Weather Resistant: Handles extreme weather conditions well,
            including heavy rainfall and intense sun.
          </ListItem>
          <ListItem>
            Easy to Install: Lightweight and easier to handle during
            installation.
          </ListItem>
          <ListItem>
            Non-toxic: Does not release harmful chemicals, making it safe for
            both home and the environment.
          </ListItem>
        </List>
      </Box>

      {/* Aluminium Section */}
      <Box
        sx={{
          flex: 1,
          margin: 2,
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          boxShadow: 4,
          padding: 2,
          maxWidth: "45%",
          "@media (max-width:600px)": {
            maxWidth: "100%",
          },
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>
          Why Aluminium?
        </Typography>
        <List>
          <ListItem>
            Modern Aesthetic: Sleek, stylish, and perfect for contemporary
            designs.
          </ListItem>
          <ListItem>
            High Strength: Stronger and more robust, making it ideal for larger
            windows or structures.
          </ListItem>
          <ListItem>
            Durable: Resistant to rust and corrosion, even in coastal or
            industrial environments.
          </ListItem>
          <ListItem>
            Slim Frames: Allows for larger glass areas, creating a sleek and
            modern look.
          </ListItem>
          <ListItem>
            Long Life Span: Can last over 50 years with minimal maintenance.
          </ListItem>
          <ListItem>
            Eco-friendly: Recyclable and sustainable material, reducing
            environmental impact.
          </ListItem>
          <ListItem>
            Resistant to Fading: Does not warp or fade with prolonged exposure
            to the sun.
          </ListItem>
          <ListItem>
            Heat Transfer Control: Excellent thermal properties when combined
            with a thermal break.
          </ListItem>
          <ListItem>
            Low Maintenance: Requires less care compared to traditional
            materials like wood.
          </ListItem>
          <ListItem>
            Fire Resistant: Higher resistance to fire than many other materials,
            adding to the safety of your property.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Comparison;
