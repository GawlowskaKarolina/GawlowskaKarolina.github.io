import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const publications = [
  {
    title: 'Zpráva o stavu informační gramotnosti v ČR (2024)',
    description: 'Výzkumná zpráva z dat CEDMO Trends – mediální gramotnost a její vývoj.',
    year: '2024',
    url: '/brief.pdf',
  },
  {
    title: 'Akademická studie: Dopady dezinformací na rozhodování voličů (2023)',
    description: 'Studie publikovaná ve spolupráci s Univerzitou Karlovou.',
    year: '2023',
    url: '/brief.pdf',
  },
  {
    title: 'Shrnutí poznatků z období pandemie COVID-19 (2023)',
    description: 'Analytická zpráva o šíření misinformací v letech 2020–2023.',
    year: '2023',
    url: '/brief.pdf',
  },
];

const groupedByYear = publications.reduce((acc: Record<string, typeof publications>, pub) => {
  acc[pub.year] = acc[pub.year] || [];
  acc[pub.year].push(pub);
  return acc;
}, {});

const Publications: React.FC = () => {
  const [visiblePreviews, setVisiblePreviews] = useState<Record<string, boolean>>({});

  const togglePreview = (url: string) => {
    setVisiblePreviews((prev) => ({
      ...prev,
      [url]: !prev[url],
    }));
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        <strong>Publikace</strong>
      </Typography>
      <Typography variant="body1" mb={3}>
        Zde naleznete zprávy, analýzy a akademické studie založené na datech z výzkumu <strong>CEDMO Trends</strong>.
      </Typography>

      {Object.entries(groupedByYear)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([year, pubs]) => (
          <Accordion
            key={year}
            defaultExpanded
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 2,
              boxShadow: 3,
              mb: 2,
              '&::before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
  <strong>{year}</strong>
</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {pubs.map((pub, index) => (
                <Box key={index} mb={4}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {pub.title}
                  </Typography>
                  <Typography variant="body2" mb={1}>
                    {pub.description}
                  </Typography>

                  <Box display="flex" gap={2} mb={1}>
                    <Button
                      variant="contained"
                      startIcon={<PictureAsPdfIcon />}
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: '#1b1c3a',
                        color: '#ffcd06',
                        '&:hover': {
                          bgcolor: '#ffcd06',
                          color: '#1b1c3a',
                        },
                      }}
                    >
                      Otevřít PDF
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={visiblePreviews[pub.url] ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      onClick={() => togglePreview(pub.url)}
                      sx={{
                        bgcolor: '#1b1c3a',
                        color: '#ffcd06',
                        '&:hover': {
                          bgcolor: '#ffcd06',
                          color: '#1b1c3a',
                        },
                      }}
                    >
                      {visiblePreviews[pub.url] ? 'Skrýt náhled' : 'Zobrazit náhled'}
                    </Button>
                  </Box>

                  {visiblePreviews[pub.url] && (
                    <Box
                      mt={2}
                      sx={{
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: 1,
                      }}
                    >
                      <iframe
                        src={pub.url}
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                        title={`Náhled ${pub.title}`}
                      ></iframe>
                    </Box>
                  )}

                  <Divider sx={{ my: 3 }} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};

export default Publications;