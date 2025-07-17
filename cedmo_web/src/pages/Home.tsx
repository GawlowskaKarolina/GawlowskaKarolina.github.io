import React from "react";
import { Box, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import mapImage from "../assets/eu.jpg";
import Ipsos from "../assets/Ipsos.jpg";
import LP from "../assets/LogoProjekt.jpg";

const Home: React.FC = () => {
  return (
    <Box p={4} sx={{ maxWidth: 1200, mx: 'auto', fontFamily: 'Roboto, sans-serif' }}>
      {/* Úvodní box */}
      <Box>
        <Box
          bgcolor="#ffffff"
          p={3}
          borderRadius={3}
          boxShadow={3}
          mb={4}
        >
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <InsertChartIcon sx={{ fontSize: 30, color: '#1b1c3a' }} />
            <Typography variant="h4" component="h2">
              <strong>Co je CEDMO?</strong>
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            gap={3}
          >
            <Box flex={1}>
              <Typography paragraph>
                <strong>
                  <a
                    href="https://cedmohub.eu/cs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#1b1c3a',
                      textDecoration: 'none',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#ffcd06')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#1b1c3a')}
                  >
                    CEDMO
                  </a>
                </strong>{' '}
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis justo ut augue efficitur, nec luctus mi feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis justo ut augue efficitur, nec luctus mi feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis justo ut augue efficitur, nec luctus mi feugiat.
              </Typography>
              <Typography paragraph>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis justo ut augue efficitur, nec luctus mi feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis justo ut augue efficitur, nec luctus mi feugiat.
              </Typography>
            </Box>

            
          </Box>
        </Box>
    

       {/* CEDMO Trends hlavní modrý box */}
<Box
  bgcolor="#1b1c3a"
  color="#ffffff"
  p={4}
  borderRadius={3}
  boxShadow={3}
  mb={4}
>
  {/* Nadpis a popis */}
  <Typography variant="h5" component="h3" gutterBottom>
    <strong>CEDMO Trends – Longitudinální výzkum</strong>
  </Typography>
  <Typography paragraph>
  je unikátní longitudinální panelový výzkum realizovaný po dobu 30 měsíců. Výzkum nabízí výjimečný vhled do vývoje chování populace v oblasti konzumace různých druhů mediálních obsahů se zaměřením na jednotlivé typy informačních poruch jako jsou misinformace či dezinformace. Ty nejen oslabují důvěru veřejnosti v instituce nezbytné pro fungování pluralitní demokracie, ale také mohou zesilovat jednotlivé infodemie, jak jsme ostatně mohli pozorovat při epidemii onemocnění COVID-19.
  </Typography>

  {/* Dva sloupce uvnitř */}
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    gap={3}
    mt={3}
  >
    {/* Sloupec 1 – CZ */}
    <Box
      flex={1}
      bgcolor="#ffffff"
      color="#000000"
      p={3}
      borderRadius={3}
      boxShadow={3}
    >
      <Typography variant="h6" gutterBottom>
        <strong>Trends CZ</strong>
      </Typography>
      <Typography paragraph>
        CEDMO Trends ČR je unikátní longitudinální panelový výzkum realizovaný po dobu 28 měsíců od března 2023 do října 2025.
      </Typography>
      <Typography paragraph>
        Odkaz na hlavní stránku Cedmo Trends CZ s dalšími výstupy:{" "}
        <strong>
          <a
            href="https://cedmohub.eu/cs/cedmo-trends/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1b1c3a',
              textDecoration: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#ffcd06')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#1b1c3a')}
          >
            ZDE
          </a>
        </strong>
      </Typography>
      <img src={LP} alt="LP" style={{ maxHeight: 60 }} />
    </Box>

    {/* Sloupec 2 – SK */}
    <Box
      flex={1}
      bgcolor="#ffffff"
      color="#000000"
      p={3}
      borderRadius={3}
      boxShadow={3}
    >
      <Typography variant="h6" gutterBottom>
        <strong>Trends SK</strong>
      </Typography>
      <Typography paragraph>
        CEDMO Trends SR je jedinečný panelový longitudinálny výskum, ktorý prebieha od septembra 2023 počas 24 mesiacov.
      </Typography>
      <Typography paragraph>
        Odkaz na hlavní stránku Cedmo Trends SK s dalšími výstupy:{" "}
        <strong>
          <a
            href="https://cedmohub.eu/sk/cedmo-trends-2/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1b1c3a',
              textDecoration: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#ffcd06')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#1b1c3a')}
          >
            ZDE
          </a>
        </strong>
      </Typography>
      <img src={Ipsos} alt="Ipsos logo" style={{ maxHeight: 60 }} />
    </Box>
  </Box>
</Box>





        {/* Cedmo Tracking zůstává */}
        <Box
          bgcolor="#eaeaea"
          borderRadius={3}
          p={4}
          mt={4}
          textAlign="center"
        >
          <Typography variant="h5" gutterBottom>
            Cedmo Tracking
          </Typography>
          <img
            src={mapImage}
            alt="Mapa Evropy"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 10 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
