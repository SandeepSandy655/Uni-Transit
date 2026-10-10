"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full-Screen Subtle Isometric Background Grid */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.06,
        }}
      >
        <defs>
          <pattern
            id="iso-bg-grid"
            width="160"
            height="92.376"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 160 46.188 L 80 92.376 L 0 46.188 Z"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#iso-bg-grid)" />
      </Box>

      {/* Soft Ambient Radial Glows */}
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          width: 560,
          height: 560,
          borderRadius: "50%",
          bgcolor: "rgba(20, 184, 166, 0.1)",
          filter: "blur(130px)",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          bottom: 0,
          left: "10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          bgcolor: "rgba(245, 158, 11, 0.05)",
          filter: "blur(120px)",
        }}
      />

      {/* Full-Width Top Navigation Bar */}
      <Container
        maxWidth="xl"
        component="header"
        sx={{
          position: "relative",
          zIndex: 10,
          pt: 4,
          pb: 2,
          px: { xs: 3, sm: 6, lg: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2.5,
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: "-0.02em", color: "#fff" }}
          >
            Uni
            <Box component="span" sx={{ color: "primary.light" }}>
              Transit
            </Box>
          </Typography>
        </Stack>

        <Stack
          component="nav"
          direction="row"
          spacing={5}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {["Home", "Routes", "About", "Contact"].map((item, index) => (
            <Typography
              key={item}
              component="a"
              href={`#${item.toLowerCase()}`}
              sx={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: index === 0 ? "#fff" : "text.secondary",
                position: "relative",
                transition: "color 0.2s",
                "&:hover": { color: "#fff" },
                ...(index === 0 && {
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -6,
                    height: 2,
                    bgcolor: "primary.light",
                    borderRadius: 1,
                  },
                }),
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsLoginOpen(true)}
          sx={{
            px: 3.5,
            py: 1,
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          Login
        </Button>
      </Container>

      {/* Full-Screen Main Split Hero Section */}
      <Container
        maxWidth="xl"
        component="main"
        sx={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          px: { xs: 3, sm: 6, lg: 10 },
          py: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(12, 1fr)" },
          alignItems: "center",
          gap: { xs: 6, lg: 6 },
        }}
      >
        {/* Left Column: Full-Scale Typography & Unified Login Action */}
        <Box sx={{ gridColumn: { xs: "span 1", lg: "span 6" } }}>
          <Stack spacing={3.5} alignItems="flex-start">
            <Chip
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "primary.light",
                    }}
                  />
                  <span>Unified Campus Transit Portal</span>
                </Stack>
              }
              sx={{
                bgcolor: "rgba(30, 41, 59, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.7)",
                color: "#CBD5E1",
                fontWeight: 500,
                fontSize: "0.75rem",
                height: 32,
                px: 0.5,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", xl: "4rem" },
                color: "#fff",
              }}
            >
              College Bus Route &amp;{" "}
              <Box component="span" sx={{ color: "primary.light" }}>
                Seat Allotment
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.125rem" },
                lineHeight: 1.7,
                maxWidth: 560,
              }}
            >
              A unified platform to check campus shuttle routes and manage
              semester seat allotments. Students, drivers, and administrators
              sign in through the same portal.
            </Typography>

            <Box sx={{ pt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => setIsLoginOpen(true)}
                sx={{
                  px: 4.5,
                  py: 1.8,
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Get Started / Login
              </Button>
            </Box>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              flexWrap="wrap"
              sx={{ pt: 1.5 }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Single login for:
              </Typography>
              <Stack direction="row" spacing={1.2}>
                {["Student", "Driver", "Admin"].map((role) => (
                  <Chip
                    key={role}
                    label={role}
                    size="small"
                    sx={{
                      bgcolor: "rgba(30, 41, 59, 0.7)",
                      border: "1px solid rgba(51, 65, 85, 0.6)",
                      color: "#E2E8F0",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Right Column: Full-Bleed Frameless Isometric Route Screen & Shuttle Bus */}
        <Box
          sx={{
            gridColumn: { xs: "span 1", lg: "span 6" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 640 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Isometric Route Map and College Shuttle Bus"
            sx={{
              width: "100%",
              maxWidth: 640,
              height: "auto",
              overflow: "visible",
            }}
          >
            <defs>
              <linearGradient
                id="roadFade"
                x1="440"
                y1="275"
                x2="70"
                y2="485"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#1E293B" stopOpacity="1" />
                <stop offset="75%" stopColor="#1E293B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="screenSurface"
                x1="380"
                y1="50"
                x2="560"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              <linearGradient
                id="headlightGlow"
                x1="255"
                y1="380"
                x2="110"
                y2="465"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Isometric Street Grid Lines */}
            <g stroke="#1E293B" strokeWidth="2">
              <line x1="60" y1="340" x2="390" y2="150" />
              <line x1="130" y1="410" x2="510" y2="190" />
              <line x1="210" y1="470" x2="610" y2="240" />
              <line x1="160" y1="200" x2="500" y2="395" />
              <line x1="80" y1="265" x2="395" y2="445" />
            </g>

            {/* Isometric Roadway */}
            <polygon
              points="60,465 420,258 490,298 130,505"
              fill="url(#roadFade)"
            />
            <line
              x1="60"
              y1="465"
              x2="420"
              y2="258"
              stroke="#334155"
              strokeWidth="2"
            />
            <line
              x1="130"
              y1="505"
              x2="490"
              y2="298"
              stroke="#334155"
              strokeWidth="2"
            />
            <line
              x1="95"
              y1="485"
              x2="455"
              y2="278"
              stroke="#64748B"
              strokeWidth="2.5"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />

            {/* Isometric Upright Smartphone / Route Display */}
            <g>
              <path
                d="M548,124 L564,115 C572,111 578,117 578,128 L578,392 C578,402 572,408 564,412 L548,421 Z"
                fill="#090D16"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <path
                d="M376,42 C376,28 386,23 398,30 L544,114 C556,121 565,137 565,150 L565,405 C565,418 556,424 544,417 L398,333 C386,326 376,310 376,297 Z"
                fill="#090D16"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d="M386,55 C386,45 394,41 402,46 L538,124 C546,129 553,140 553,150 L553,392 C553,402 546,406 538,401 L402,323 C394,318 386,307 386,297 Z"
                fill="url(#screenSurface)"
              />

              <path
                d="M425,59 L445,122 L420,195 L422,334 L404,324 L402,185 L425,118 L406,50 Z"
                fill="#14B8A6"
                fillOpacity="0.16"
              />
              <line
                x1="386"
                y1="130"
                x2="553"
                y2="226"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="386"
                y1="195"
                x2="553"
                y2="291"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="386"
                y1="260"
                x2="553"
                y2="356"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="442"
                y1="68"
                x2="442"
                y2="346"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="496"
                y1="100"
                x2="496"
                y2="378"
                stroke="#334155"
                strokeWidth="1.5"
              />

              {/* Active Campus Shuttle Route Line & Stops */}
              <polyline
                points="524,152 524,222 470,192 470,268 490,296 490,348 446,322"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="524" cy="152" r="7" fill="#2DD4BF" />
              <circle cx="524" cy="222" r="7" fill="#2DD4BF" />
              <circle cx="470" cy="192" r="7" fill="#2DD4BF" />

              <ellipse
                cx="480"
                cy="282"
                rx="13"
                ry="16"
                transform="rotate(-25 480 282)"
                fill="#0F172A"
                stroke="#F8FAFC"
                strokeWidth="3"
              />
              <ellipse
                cx="480"
                cy="282"
                rx="6"
                ry="8"
                transform="rotate(-25 480 282)"
                fill="#2DD4BF"
              />

              <circle cx="490" cy="348" r="7" fill="#2DD4BF" />

              {/* Floating Circular Map Icons */}
              <g transform="translate(332, 105)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="16"
                  ry="20"
                  transform="rotate(-20)"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <path
                  d="M-5,0 L5,0 M1,-4 L5,0 L1,4"
                  stroke="#2DD4BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g transform="translate(332, 160)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="16"
                  ry="20"
                  transform="rotate(-20)"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <circle
                  cx="0"
                  cy="-2"
                  r="4"
                  stroke="#F8FAFC"
                  strokeWidth="1.8"
                />
                <path
                  d="M0,3 L0,7"
                  stroke="#F8FAFC"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </g>
              <g transform="translate(332, 215)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="16"
                  ry="20"
                  transform="rotate(-20)"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <rect x="-5" y="-5" width="4" height="4" rx="1" fill="#94A3B8" />
                <rect x="1" y="-5" width="4" height="4" rx="1" fill="#2DD4BF" />
                <rect x="-5" y="1" width="4" height="4" rx="1" fill="#2DD4BF" />
                <rect x="1" y="1" width="4" height="4" rx="1" fill="#94A3B8" />
              </g>
            </g>

            {/* Isometric College Shuttle Bus */}
            <g>
              <polygon
                points="242,388 110,464 145,484 262,400"
                fill="url(#headlightGlow)"
              />
              <polygon
                points="274,406 145,484 182,502 294,418"
                fill="url(#headlightGlow)"
              />

              <polygon
                points="232,396 385,306 442,340 288,430"
                fill="#020617"
                opacity="0.6"
              />

              <polygon
                points="238,328 296,362 296,412 238,378"
                fill="#F59E0B"
              />
              <polygon
                points="244,336 290,363 290,389 244,362"
                fill="#0F172A"
                stroke="#38BDF8"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <circle cx="247" cy="375" r="3.5" fill="#FEF08A" />
              <circle cx="286" cy="398" r="3.5" fill="#FEF08A" />

              <polygon
                points="296,362 430,284 430,334 296,412"
                fill="#D97706"
              />
              <polygon
                points="296,389 430,311 430,318 296,396"
                fill="#0F172A"
                opacity="0.8"
              />

              <polygon
                points="392,312 420,296 420,317 392,333"
                fill="#0F172A"
              />
              <polygon
                points="352,335 382,318 382,356 352,373"
                fill="#090D16"
                stroke="#FDE68A"
                strokeWidth="1"
              />
              <line
                x1="367"
                y1="326"
                x2="367"
                y2="364"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />
              <polygon
                points="306,362 342,341 342,362 306,383"
                fill="#0F172A"
              />

              <polygon
                points="238,328 372,250 430,284 296,362"
                fill="#FBBF24"
              />
              <polygon
                points="340,278 374,258 396,271 362,291"
                fill="#1E293B"
              />

              <ellipse
                cx="322"
                cy="397"
                rx="11"
                ry="14"
                transform="rotate(25 322 397)"
                fill="#090D16"
                stroke="#475569"
                strokeWidth="2.5"
              />
              <ellipse
                cx="322"
                cy="397"
                rx="5"
                ry="7"
                transform="rotate(25 322 397)"
                fill="#CBD5E1"
              />
              <ellipse
                cx="402"
                cy="350"
                rx="11"
                ry="14"
                transform="rotate(25 402 350)"
                fill="#090D16"
                stroke="#475569"
                strokeWidth="2.5"
              />
              <ellipse
                cx="402"
                cy="350"
                rx="5"
                ry="7"
                transform="rotate(25 402 350)"
                fill="#CBD5E1"
              />
            </g>
          </Box>
        </Box>
      </Container>

      {/* Subtle Bottom Footer */}
      <Container
        maxWidth="xl"
        component="footer"
        sx={{
          position: "relative",
          zIndex: 10,
          py: 2.5,
          px: { xs: 3, sm: 6, lg: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "text.secondary",
          fontSize: "0.75rem",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          UniTransit • College Bus Route &amp; Seat Allotment
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Unified Portal v1.0
        </Typography>
      </Container>

      {/* Material UI Unified Login Dialog (Same Login for Student, Driver, Admin) */}
      <Dialog
        open={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ p: { xs: 3.5, sm: 4 }, position: "relative" }}>
          <IconButton
            onClick={() => setIsLoginOpen(false)}
            aria-label="Close"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "text.secondary",
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Stack spacing={1} sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "primary.light", fontWeight: 600 }}
              >
                Unified Portal Access
              </Typography>
            </Stack>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Sign In
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Students, Drivers, and Admins use the same login below.
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleLoginSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label="Campus ID or Email"
                placeholder="Enter your ID or Email"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                fullWidth
                required
                size="medium"
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
                size="medium"
                slotProps={{ inputLabel: { shrink: true } }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ py: 1.4, mt: 1, borderRadius: 3 }}
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
