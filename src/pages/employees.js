import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from 'next/image';
import { getEmployees } from "../../api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const inter = Inter({ subsets: ["latin"] });

const Home = ({ data, error }) => {
  if (error) {
    return (
      <Layout>
        <h1>Error: {error}</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Employees</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Level</StyledTableCell>
              <StyledTableCell>Join Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>
                  <Image
                    src={row.image}
                    alt={row.name}
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </StyledTableCell>
                <StyledTableCell>{row.role}</StyledTableCell>
                <StyledTableCell>{row.age}</StyledTableCell>
                <StyledTableCell>{row.level}</StyledTableCell>
                <StyledTableCell>{row.join_date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const data = await getEmployees();
    return {
      props: {
        data: data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching members:", error);
    return {
      props: {
        data: [],
        error: error.message,
      },
    };
  }
}

export default Home;
