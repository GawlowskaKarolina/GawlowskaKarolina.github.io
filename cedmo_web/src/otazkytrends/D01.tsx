import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// 📅 Generování měsíců
const generateMonths = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const months = [];
  let current = new Date(startDate);
  while (current <= endDate) {
    months.push(`${current.getFullYear()}/${String(current.getMonth() + 1).padStart(2, '0')}`);
    current.setMonth(current.getMonth() + 1);
  }
  return months;
};

const months = generateMonths('2023-03', '2025-07');

type Category = 'gender' | 'education' | 'age';
type Answer = '1' | '2' | '3' | '4' | '5';

const categoryLabels: Record<Category, string> = {
  gender: 'Pohlaví',
  education: 'Vzdělání',
  age: 'Věk',
};

const categoryGroups: Record<Category, string[]> = {
  gender: ['Ženy', 'Muži'],
  education: ['ZŠ', 'SŠ', 'VŠ'],
  age: ['18 to 24', '25 to 34', '35 to 44', '45to 54', '55+'],
};

// 🔢 Mock datová struktura: odpovědi 1–5 dle kategorie
function mockDataByCategoryAndAnswer(category: Category, answer: Answer) {
  return months.map((month) => {
    const groups = categoryGroups[category];
    const obj: any = { name: month };
    groups.forEach((group) => {
      obj[group] = Math.floor(Math.random() * 500) + 100 + Number(answer) * 10;
    });
    return obj;
  });
}

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

const D01: React.FC = () => {
  const [category, setCategory] = useState<Category>('gender');
  const [answer, setAnswer] = useState<Answer>('1');

  const data = mockDataByCategoryAndAnswer(category, answer);
  const groups = categoryGroups[category];

  return (
    <Box
      p={4}
      display="flex"
      gap={4}
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Graf */}
      <Box
        flex={1}
        bgcolor="#ffffff"
        p={3}
        borderRadius={3}
        boxShadow={3}
        height={520}
      >
        <Typography variant="h4" gutterBottom>
          Konec konfliktu na Ukrajině – podle {categoryLabels[category]}
        </Typography>

        <Box display="flex" gap={2} mb={3}>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Kategorie</InputLabel>
            <Select
              value={category}
              label="Kategorie"
              onChange={(e) => setCategory(e.target.value as Category)}
            >
              <MenuItem value="gender">Pohlaví</MenuItem>
              <MenuItem value="education">Vzdělání</MenuItem>
              <MenuItem value="age">Věk</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Odpověď</InputLabel>
            <Select
              value={answer}
              label="Odpověď"
              onChange={(e) => setAnswer(e.target.value as Answer)}
            >
              <MenuItem value="1">1 – Určitě vítezstvím Ukrajiny</MenuItem>
              <MenuItem value="2">2 – Spíše vítezstvím Ukrajiny</MenuItem>
              <MenuItem value="3">3 – Dočasným mírem</MenuItem>
              <MenuItem value="4">4 – Spíše vítezstvím Ruska</MenuItem>
              <MenuItem value="5">5 – Určitě vítezstvím Ruska</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={3} tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1b1c3a',
                color: '#e5e5e5',
                borderRadius: 8,
                fontSize: 14,
              }}
            />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            {groups.map((label, idx) => (
              <Line
                key={label}
                type="monotone"
                dataKey={label}
                stroke={COLORS[idx]}
                dot={false}
                strokeWidth={3}
                activeDot={{ r: 6 }}
                name={label}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Info panel */}
      <Box
        flex={1}
        bgcolor="#f5f5f5"
        color="#000000"
        p={3}
        borderRadius={3}
        height={520}
        overflow="auto"
        boxShadow={1}
      >
        <Typography variant="h5" gutterBottom>
          O čem je tento graf?
        </Typography>
        <Typography paragraph>
          Tento graf zobrazuje vývoj <strong>odpovědi {answer}</strong> v čase podle
          sociodemografické kategorie: <strong>{categoryLabels[category]}</strong>.
        </Typography>
        <Typography paragraph>
          Sledujeme, jak často tuto odpověď vybírají různé skupiny – např. muži vs. ženy,
          nebo různé věkové kategorie – v průběhu jednotlivých měsíců.
        </Typography>
        <Typography paragraph>
          Data jsou simulována pro účely vizualizace a ilustrují trendy od března 2023 do července 2025.
        </Typography>
      </Box>
    </Box>
  );
};

export default D01;