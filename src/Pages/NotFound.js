import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container>
        <Typography variant="h1" sx={{ fontSize: { xs: "5rem", md: "8rem" } }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Oops! The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
