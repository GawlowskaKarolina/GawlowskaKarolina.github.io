import { useState } from 'react';
import { Box, Typography, Slider, Button, Paper } from '@mui/material';

const blue = '#1b1c3a';
const gray = '#f5f5f5';

const questions = [
  {
    label: 'Jak moc důvěřujete tradičním médiím?',
    weight: 25,
  },
  {
    label: 'Jak dobře si myslíte, že poznáte dezinformace?',
    weight: 30,
  },
  {
    label: 'Jak často se setkáváte s podezřelými zprávami?',
    weight: 20,
  },
  {
    label: 'Jak často používáte AI při konzumaci obsahu?',
    weight: 25,
  },
];

const Calculator = () => {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(3));
  const [score, setScore] = useState<number | null>(null);

  const calculateScore = () => {
    const total = questions.reduce((acc, q, i) => acc + answers[i] * q.weight, 0);
    const result = total / 5; // max odpověď je 5
    setScore(parseFloat(result.toFixed(1)));
  };

  return (
    <Box mt={6}>
      <Paper sx={{ p: 4, bgcolor: gray, borderRadius: 2 }}>
        <Typography variant="h5" mb={2} sx={{ color: blue }}>
          <strong>Spočítej si svůj CEDMO Index</strong>
        </Typography>

        {questions.map((q, index) => (
          <Box key={index} mb={3}>
            <Typography variant="body1" gutterBottom sx={{ color: blue }}>
              {q.label}
            </Typography>
            <Slider
              value={answers[index]}
              onChange={(_, value) => {
                const updated = [...answers];
                updated[index] = value as number;
                setAnswers(updated);
              }}
              step={1}
              min={1}
              max={7}
              marks
              valueLabelDisplay="auto"
              sx={{ color: blue }}
            />
          </Box>
        ))}

        <Button
          variant="contained"
          sx={{ bgcolor: blue, color: gray, mt: 2, '&:hover': { bgcolor: '#111' } }}
          onClick={calculateScore}
        >
          Vypočítat můj index
        </Button>

        {score !== null && (
          <Typography mt={3} variant="h6" sx={{ color: blue }}>
            Tvůj CEDMO index: <strong>{score}</strong> bodů
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Calculator;