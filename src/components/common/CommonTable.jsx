import { MdEdit, MdVisibility, MdDelete } from "react-icons/md";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsTrophyFill } from "react-icons/bs";
import { Link } from "react-router-dom/dist";

const CommonTable = ({ columns, data, typeData, fetchData, id }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleClick = (item) => {};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          id={id}
          sx={{ minWidth: 650, marginBottom: "30px" }}
          aria-label="dynamic table"
        >
          <TableHead
            sx={{ background: "linear-gradient(to right, #94FBCE, #05E38A)" }}
          >
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#00300C",
                  fontSize: "15px",
                  fontWeight: "600",
                  width: "10%",
                }}
              >
                {"ID"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#00300C",
                  fontSize: "15px",
                  fontWeight: "600",
                  width: "25%",
                }}
              >
                Participation Name
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#00300C",
                  fontSize: "15px",
                  fontWeight: "600",
                  width: "25%",
                }}
              >
                Quiz Name
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#00300C",
                  fontSize: "15px",
                  fontWeight: "600",
                  width: "20%",
                  flexDirection: "row",
                }}
              >
                Total Score
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  fontSize: "15px",
                  fontWeight: "600",

                  flexDirection: "row",
                  width: "20%",
                }}
              >
                {"Actions"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <span className="text-lg text-emerald-500 font-medium font-sans">
                      {index + 1}
                    </span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <span className="text-lg text-emerald-500 font-medium font-sans">
                      {item?.userName}
                    </span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <span className="text-lg text-emerald-500 font-medium font-sans">
                      {item?.quizName}
                    </span>
                  </TableCell>
                  <TableCell sx={{}}>
                    <div className="flex justify-center text-center rounded-md bg-emerald-100 px-4 py-2">
                      <BsTrophyFill className="text-orange-400 mx-2 mt-2 w-4 h-4" />
                      <span className="text-emerald-500 text-lg font-sans font-medium">
                        {item?.totalScore}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell sx={{}}>
                    <Stack
                      direction="row"
                      spacing={0}
                      sx={{
                        textAlign: "center",
                        justifyContent: "center",
                        width: "200px",
                      }}
                    >
                      <div className="ml-8">
                        <Link to={`/results/viewresults/${item?._id}`}>
                          <IconButton aria-label="view">
                            <MdVisibility style={{ color: "green" }} />
                          </IconButton>
                        </Link>
                        <IconButton aria-label="edit">
                          <AiOutlineReload style={{ color: "blue" }} />
                        </IconButton>
                      </div>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ background: "linear-gradient(to right, #05E38A, #94FBCE)" }}
        />
      </TableContainer>
    </>
  );
};

export default CommonTable;
