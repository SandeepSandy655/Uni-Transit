"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 4,
          bgcolor: "background.paper",
          border: "1px solid rgba(148, 163, 184, 0.16)",
        }}
      >
        <Button
          component={Link}
          href="/"
          startIcon={<ArrowBackIcon fontSize="small" />}
          sx={{
            color: "text.secondary",
            p: 0,
            mb: 3,
            minWidth: 0,
            "&:hover": { color: "#fff", bgcolor: "transparent" },
          }}
        >
          Back to Home
        </Button>

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              bgcolor: "rgba(20, 184, 166, 0.15)",
              border: "1px solid rgba(20, 184, 166, 0.3)",
              color: "primary.light",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DirectionsBusIcon fontSize="small" />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff" }}>
            Uni
            <Box component="span" sx={{ color: "primary.light" }}>
              Transit
            </Box>
          </Typography>
        </Stack>

        <Typography variant="h5" sx={{ color: "#fff", mb: 0.5 }}>
          Sign In
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Unified login for Students, Drivers, and Admins.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField
              label="Campus ID or Email"
              placeholder="Enter your ID or Email"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true } }}
            />

            <TextField
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true } }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ py: 1.4, borderRadius: 3 }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
