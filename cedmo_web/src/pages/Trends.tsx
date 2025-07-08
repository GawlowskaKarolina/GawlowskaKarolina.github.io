import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import D01 from '../otazkytrends/D01';
import DEM02 from '../otazkytrends/DEM02';
import logoProjekt from '../assets/LogoProjekt.jpg';

const Trends = () => {
  const [visibleCharts, setVisibleCharts] = useState({
    d01: true,
    dem02: true,
  });

  const handleToggle = (chart: keyof typeof visibleCharts) => {
    setVisibleCharts((prev) => ({
      ...prev,
      [chart]: !prev[chart],
    }));
  };

  return (
    <Box p={4}>
      {/* Úvodní box včetně nadpisu */}
      <Box
        bgcolor="#ffffff"
        p={3}
        borderRadius={3}
        boxShadow={3}
        mb={4}
      >
        {/* Nadpis */}
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          <strong>Přehled trendů – průzkumy veřejného mínění</strong>
        </Typography>

        {/* Úvodní text + logo */}
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
                  CEDMO Trends ČR
                </a>
              </strong>{' '}
              je unikátní longitudinální panelový výzkum realizovaný po dobu 30 měsíců. Výzkum nabízí výjimečný vhled do
              vývoje chování populace v oblasti konzumace různých druhů mediálních obsahů se zaměřením na jednotlivé typy
              informačních poruch jako jsou misinformace či dezinformace. Ty nejen oslabují důvěru veřejnosti v instituce
              nezbytné pro fungování pluralitní demokracie, ale také mohou zesilovat jednotlivé infodemie, jak jsme
              ostatně mohli pozorovat při epidemii onemocnění COVID-19.
            </Typography>
            <Typography paragraph>
              Získané poznatky mohou zefektivnit stávající strategie mediálního vzdělávání a pre-bunkingu. Díky tomu bude
              posílena odolnost zranitelných komunit i okrajových částí společnosti.
            </Typography>
          </Box>

          <Box mb={4} display="flex" gap={2} alignItems="center" mt={{ xs: 2, md: 0 }}>
              <img src={logoProjekt} alt="Logo Projektu" style={{ maxHeight: 60 }} />
          </Box>
        </Box>
      </Box>

      <Typography variant="h5" gutterBottom>
            Jednotlivé zkoumané otázky ve výzkumu:
          </Typography>
      {/* Ovládací panel - stylované checkboxy */}
      <FormGroup row sx={{ mb: 4 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={visibleCharts.d01}
              onChange={() => handleToggle('d01')}
              sx={{
                color: '#1b1c3a',
                '&.Mui-checked': {
                  color: '#ffcd06',
                },
                '&:hover': {
                  backgroundColor: 'rgba(27, 28, 58, 0.04)',
                },
              }}
            />
          }
          label="Zobrazit: Konec konfliktu na Ukrajině"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={visibleCharts.dem02}
              onChange={() => handleToggle('dem02')}
              sx={{
                color: '#1b1c3a',
                '&.Mui-checked': {
                  color: '#ffcd06',
                },
                '&:hover': {
                  backgroundColor: 'rgba(27, 28, 58, 0.04)',
                },
              }}
            />
          }
          label="Zobrazit: Vnímání situace v ČR"
        />
      </FormGroup>

      {/* Grafy */}
      {visibleCharts.d01 && (
        <Box

        
        bgcolor='#1b1c3a'
        color='#ffffff'
        p={3}
        borderRadius={3}
        boxShadow={3}
        mb={4}
      >
        {/* Nadpis */}
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Přehled trendů – průzkumy veřejného mínění
        </Typography>
          <Typography variant="h5" gutterBottom>
            Téma: Konec konfliktu na Ukrajině
          </Typography>
          <Typography paragraph>
            Tento graf zkoumá, jak různé demografické skupiny (např. pohlaví, věk nebo vzdělání) vnímají možné scénáře
            konce války na Ukrajině.
          </Typography>
          <D01 />
        </Box>
      )}

      {visibleCharts.dem02 && (
        <Box 

        bgcolor="#f5f5f5"
       
        p={3}
        borderRadius={3}
        boxShadow={3}
        mb={4}
      >
          <Typography variant="h5" gutterBottom>
            Téma: Vnímání situace v České republice
          </Typography>
          <Typography paragraph>
            Tento graf umožňuje sledovat postoje veřejnosti k různým společenským tématům, jako je důvěra v instituce,
            pocit bezpečí, korupce nebo víra v demokratický proces.
          </Typography>
          <DEM02 />
        </Box>
      )}
    </Box>
  );
};

export default Trends;
