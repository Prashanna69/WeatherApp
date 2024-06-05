import { Box, TextField, Typography } from "@mui/material";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirIcon from "@mui/icons-material/Air";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Home() {
  return (
    <>
      <Box
        minHeight="100vh"
        bgcolor="#EEEEEE"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box minHeight="auto" p="2rem">
          <Box
            minHeight="auto"
            p="1rem"
            display="flex"
            gap="6px"
            textAlign="center"
          >
            <Typography
              variant="h6"
              fontWeight="500" // Setting fontWeight to 900 for very bold
              color="#76ABAE"
              mt="4px"
              sx={{ flexGrow: 1, fontFamily: "Poppins" }}
            >
              Right now in
            </Typography>

            <TextField
              id="standard-basic"
              variant="standard"
              sx={{
                minWidth: "10rem",
                "& .MuiInputBase-input": {
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  fontFamily: "Poppins",
                },
              }}
            />
            <Typography
              variant="h6"
              fontWeight="500" // Setting fontWeight to 900 for very bold
              color="#76ABAE"
              mt="4px"
              sx={{ flexGrow: 1, fontFamily: "Poppins" }}
            >
              , there's Sunny.
            </Typography>
          </Box>
          <Box minHeight="auto" display="flex" p="1rem">
            <Box
              minHeight="10vh"
              bgcolor="red"
              flexGrow="1"
              p="1rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              Icon
            </Box>
            <Box
              minHeight="10vh"
              flexGrow="1"
              p="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography
                variant="h1"
                fontWeight="500"
                color="#2d2e32"
                sx={{ fontFamily: "Poppins" }}
              >
                16°
              </Typography>
              <Typography
                variant="h6"
                fontWeight="300"
                flexGrow="1"
                color="gray"
                sx={{ fontFamily: "Poppins" }}
              >
                16°/29°
              </Typography>
            </Box>
            <Box
              minHeight="10vh"
              flexGrow="1"
              display="flex"
              flexDirection="column"
              p="1rem"
            >
              <Box display="flex" alignItems="center" flexGrow="1" gap="2px">
                <AirIcon sx={{ color: "grey" }} />
                <Typography
                  variant="h6"
                  color="gray"
                  sx={{ fontFamily: "Poppins" }}
                >
                  12mph
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" flexGrow="1" gap="2px">
                <BeachAccessIcon sx={{ color: "grey" }} />
                <Typography
                  variant="h6"
                  flexGrow="1"
                  color="gray"
                  sx={{ fontFamily: "Poppins" }}
                >
                  79%
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" flexGrow="1" gap="2px">
                <WaterDropOutlinedIcon sx={{ color: "grey" }} />
                <Typography
                  variant="h6"
                  flexGrow="1"
                  color="gray"
                  sx={{ fontFamily: "Poppins" }}
                >
                  20%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            minHeight="10vh"
            p="1rem"
            display="flex"
            justifyContent="space-around"
            gap="1rem"
          >
            <Box
              minHeight="10vh"
              flexGrow="1"
              display="flex"
              p="1rem"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap="2px"
            >
              <WbSunnyIcon sx={{ color: "gray" }} />
              <Typography
                variant="h6"
                fontWeight="500"
                flexGrow="1"
                color="gray"
                sx={{ fontFamily: "Poppins" }}
              >
                25°/100°
              </Typography>
              <Typography
                fontWeight="500"
                flexGrow="1"
                color="gray"
                sx={{ fontFamily: "Poppins" }}
              >
                Sun
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
