import React, { useState } from 'react';
import CustomBarTooltip from '../components/Tooltip';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const statements = [
  'Volení zástupci naslouchají obyčejným lidem',
  'Soudní systém jedná spravedlivě',
  'Většina politiků je zkorumpovaná',
  'Ve městech je nebezpečné chodit v noci',
  'Volby nic nemění',
  'Práva na vyjádření názoru jsou chráněna',
  'Lidé mají šanci si zlepšit životní úroveň',
];

const responseLabels = [
  'Velmi dobře',
  'Docela dobře',
  'Špatně',
  'Vůbec',
  'Nevím / nedokážu posoudit'
];

type Category = 'gender' | 'education' | 'age';
const categoryLabels: Record<Category, string> = {
  gender: 'Pohlaví',
  education: 'Vzdělání',
  age: 'Věk',
};
const categoryGroups: Record<Category, string[]> = {
  gender: ['Ženy', 'Muži'],
  education: ['ZŠ', 'SŠ', 'VŠ'],
  age: ['18–24', '25–34', '35–44', '45–54', '55+'],
};

// Mock months
const months = ['2023/03', '2023/06', '2023/09', '2024/01', '2024/06'];

const generateMockData = (_statement: string, category: Category, selectedMonths: string[]) => {
  const groups = categoryGroups[category];

  return selectedMonths.map((month) => {
    const base: Record<string, string | number> = { name: month };
    groups.forEach((group) => {
      responseLabels.forEach((response) => {
        base[`${group} - ${response}`] = Math.floor(Math.random() * 100);
      });
    });
    return base;
  });
};

const COLORS = ['#4caf50', '#81c784', '#ffb74d', '#e57373', '#90a4ae'];

const DEM02: React.FC = () => {
  const [statement, setStatement] = useState<string>(statements[0]);
  const [category, setCategory] = useState<Category>('gender');
  const [selectedMonths, setSelectedMonths] = useState<string[]>([months[0]]);

  const data = generateMockData(statement, category, selectedMonths);
  const groups = categoryGroups[category];

  return (
    <Box p={4} display="flex" flexDirection="column" gap={4}>
      <Typography variant="h4">Vnímání situace v ČR – {categoryLabels[category]}</Typography>

      {/* Výběry */}
      <Box display="flex" gap={3} flexWrap="wrap">
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Tvrzení</InputLabel>
          <Select
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            label="Tvrzení"
          >
            {statements.map((s) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel>Kategorie</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            label="Kategorie"
          >
            <MenuItem value="gender">Pohlaví</MenuItem>
            <MenuItem value="education">Vzdělání</MenuItem>
            <MenuItem value="age">Věk</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Měsíce</InputLabel>
          <Select
            multiple
            value={selectedMonths}
            onChange={(e) => setSelectedMonths(e.target.value as string[])}
            input={<OutlinedInput label="Měsíce" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                <Checkbox checked={selectedMonths.includes(month)} />
                <ListItemText primary={month} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Graf */}
      <Box height={500}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomBarTooltip />} />
            <Legend />
            {groups.map((group) =>
              responseLabels.map((resp, rIdx) => (
                <Bar
                  key={`${group}-${resp}`}
                  dataKey={`${group} - ${resp}`}
                  stackId={group}
                  fill={COLORS[rIdx % COLORS.length]}
                  name={`${group} – ${resp}`}
                />
              ))
            )}
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default DEM02;