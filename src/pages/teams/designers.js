import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMembers } from "../../../api";
import { Inter } from "next/font/google";

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

export default function Designer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMembers()
      .then((res) => {
        console.log(res);
        // Assuming the response has the structure like teamMembers01
        const frontendMembers = res[0].group.designer;
        setData(frontendMembers);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1>Error: {error}</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Designer Team</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Level</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.level}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
