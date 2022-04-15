import { Paper, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  male: string,
  female: string
) {
  return { name, male, female };
}

const rowsShort = [
  createData('50 fri', 'xx,xx', 'xx,xx'),
  createData('100 fri', 'xx,xx', 'xx,xx'),
  createData('200 fri', 'xx,xx', 'xx,xx'),
  createData('400 fri', 'xx,xx', 'xx,xx'),
  createData('800 fri', 'xx,xx', 'xx,xx'),
  createData('1500 fri', 'xx,xx', 'xx,xx'),
  createData('50 butterfly', 'xx,xx', 'xx,xx'),
  createData('100 butterfly', 'xx,xx', 'xx,xx'),
  createData('200 butterfly', 'xx,xx', 'xx,xx'),
  createData('50 rygg', 'xx,xx', 'xx,xx'),
  createData('100 rygg', 'xx,xx', 'xx,xx'),
  createData('200 rygg', 'xx,xx', 'xx,xx'),
  createData('50 bryst', 'xx,xx', 'xx,xx'),
  createData('100 bryst', 'xx,xx', 'xx,xx'),
  createData('200 bryst', 'xx,xx', 'xx,xx'),
  createData('100 medley', 'xx,xx', 'xx,xx'),
  createData('200 medley', 'xx,xx', 'xx,xx'),
  createData('400 medley', 'xx,xx', 'xx,xx'),
];

const rowsLong = [
  createData('50 fri', 'xx,xx', 'xx,xx'),
  createData('100 fri', 'xx,xx', 'xx,xx'),
  createData('200 fri', 'xx,xx', 'xx,xx'),
  createData('400 fri', 'xx,xx', 'xx,xx'),
  createData('800 fri', 'xx,xx', 'xx,xx'),
  createData('1500 fri', 'xx,xx', 'xx,xx'),
  createData('50 butterfly', 'xx,xx', 'xx,xx'),
  createData('100 butterfly', 'xx,xx', 'xx,xx'),
  createData('200 butterfly', 'xx,xx', 'xx,xx'),
  createData('50 rygg', 'xx,xx', 'xx,xx'),
  createData('100 rygg', 'xx,xx', 'xx,xx'),
  createData('200 rygg', 'xx,xx', 'xx,xx'),
  createData('50 bryst', 'xx,xx', 'xx,xx'),
  createData('100 bryst', 'xx,xx', 'xx,xx'),
  createData('200 bryst', 'xx,xx', 'xx,xx'),
  createData('100 medley', 'xx,xx', 'xx,xx'),
  createData('200 medley', 'xx,xx', 'xx,xx'),
  createData('400 medley', 'xx,xx', 'xx,xx'),
];

const rowsOther = [
  createData('50 fri', 'xx,xx', 'xx,xx'),
  createData('100 fri', 'xx,xx', 'xx,xx'),
  createData('200 fri', 'xx,xx', 'xx,xx'),
  createData('400 fri', 'xx,xx', 'xx,xx'),
  createData('800 fri', 'xx,xx', 'xx,xx'),
  createData('1500 fri', 'xx,xx', 'xx,xx'),
  createData('50 butterfly', 'xx,xx', 'xx,xx'),
  createData('100 butterfly', 'xx,xx', 'xx,xx'),
  createData('200 butterfly', 'xx,xx', 'xx,xx'),
  createData('50 rygg', 'xx,xx', 'xx,xx'),
  createData('100 rygg', 'xx,xx', 'xx,xx'),
  createData('200 rygg', 'xx,xx', 'xx,xx'),
  createData('50 bryst', 'xx,xx', 'xx,xx'),
  createData('100 bryst', 'xx,xx', 'xx,xx'),
  createData('200 bryst', 'xx,xx', 'xx,xx'),
  createData('100 medley', 'xx,xx', 'xx,xx'),
  createData('200 medley', 'xx,xx', 'xx,xx'),
  createData('400 medley', 'xx,xx', 'xx,xx'),
];

const RecordsTables = () => {
  return (
    <>
      <Stack
        gap='1rem'
      >
        <Typography
          textAlign='center'
          variant='h3'
        >
          Kortbane
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: '100vw',
            maxWidth: '50rem'
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Øvelse
                </StyledTableCell>
                <StyledTableCell align='right'>
                  Herrer
                </StyledTableCell>
                <StyledTableCell align='right'>
                  Damer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsShort.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.male}</StyledTableCell>
                  <StyledTableCell align='right'>{row.female}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <Stack
        gap='1rem'
      >
        <Typography
          textAlign='center'
          variant='h3'
        >
          Langbane
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: '100vw',
            maxWidth: '50rem'
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Øvelse
                </StyledTableCell>
                <StyledTableCell align='right'>
                  Herrer
                </StyledTableCell>
                <StyledTableCell align='right'>
                  Damer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsLong.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.male}</StyledTableCell>
                  <StyledTableCell align='right'>{row.female}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <Stack
        gap='1rem'
      >
        <Typography
          textAlign='center'
          variant='h3'
        >
          Annet
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: '100vw',
            maxWidth: '50rem'
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Øvelse
                </StyledTableCell>
                <StyledTableCell align='right'>
                  Herrer
                </StyledTableCell>
                <StyledTableCell align='right'>
                  Damer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsOther.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.male}</StyledTableCell>
                  <StyledTableCell align='right'>{row.female}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}

export default RecordsTables;