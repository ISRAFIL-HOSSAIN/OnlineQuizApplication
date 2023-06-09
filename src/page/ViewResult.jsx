import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {
  BsFillEyeFill,
  BsFillPatchQuestionFill,
  BsPatchQuestionFill,
  BsTrophyFill,
} from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { API } from "../config/axiosConfig";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import { Progress } from "../components/common/Progress";

import { Link } from "react-router-dom";
import { congratulation } from "../assets/image";
import { useParams } from "react-router-dom/dist";
import QuestionService from "../service/QuestionService";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCheck, BiCloset } from "react-icons/bi";

const ViewResult = () => {
  // const location = useLocation();
  // const id = new URLSearchParams(location.search).get("id");
  const { id } = useParams();
  console.log("ID===> ", id);

  const [result, setResult] = useState([]);
  
  // const [items, setItems] = useState([]);
  // const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await QuestionService.getResultbyId(id);
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchResult();
  }, [id]);

  console.log("Result ==> : ", result);

  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" to="/results">
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                color: "green",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              <BsTrophyFill size={23} className="min-w-max text-emerald-500" />
              &nbsp; Result
            </Box>
          </Link>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "green",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <BsFillEyeFill size={23} className="min-w-max text-emerald-400" />
            &nbsp; View Result
          </Box>
          {/* <Typography color="grey">sdfgh</Typography> */}
        </Breadcrumbs>
      </PackageBreadcrumb>
      <div className="w-full  bg-gradient-to-r from-emerald-400 to-teal-300 rounded-md mt-8">
        <div className="flex lg:flex-row md:flex-row sm:flex-row justify-center xs:items-center lg:space-x-16  sm:space-x-8 md:space-x-12 xs:flex-col">
          <img
            src={congratulation}
            alt=""
            className="w-24 h-24 rounded-full  bg-teal-500 mt-5"
          />
          <div className="flex flex-col m-4">
            <span className="md:lg:sm:text-2xl xs:text-lg xs:text-center md:lg:sm:text-start font-bold font-sans text-indigo-500  mb-2">
              {result?.quizName}
            </span>
            <hr />
            {result?.totalScore > 20 ? (
              <span className="md:lg:sm:text-2xl xs:text-lg font-bold font-sans text-orange-400 py-2 ">
                {" "}
                🚩 You are Passed ! 😊
              </span>
            ) : (
              <span className="md:lg:sm:text-2xl xs:text-lg font-bold font-sans text-red-500 py-2 ">
                {" "}
                😑 You are Failed !
              </span>
            )}

            <div className="flex">
              <span className="md:lg:sm:text-2xl xs:text-lg font-bold font-sans text-white ">
                Your Score is
              </span>
              <span className="md:lg:sm:text-2xl xs:text-xl font-bold font-sans text-pink-500 px-4">
                {" "}
                {result?.totalScore}/{50}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {result?.results?.map((items, i) => (
          <div key={i}>
            <div key={items?.questionData?._id}>
              <Card sx={{ maxWidth: "80%", margin: "auto", marginTop: 5 }}>
                <div className="m-5 ">
                  <div className="flex items-center ">
                    <BsPatchQuestionFill className="mx-2 text-emerald-500 w-6 h-6" />
                    <span className="text-[22px] font-sans font-normal">
                      {items?.questionData?.question_name}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center w-full h-48">
                  <img src={items?.questionData?.image} alt="" />
                </div>

                <div className="w-full py-5">
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label={`question_${items?.questionData?._id}`}
                      name={`question_${items?.questionData?._id}`}
                      value={
                        Array.isArray(items)
                          ? items.find(
                              (item) =>
                                item?.question === items?.questionData?._id
                            )?.selected_value || ""
                          : ""
                      }
                    >
                      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full gap-5">
                        {Object.entries(items?.questionData?.options[0])
                          .filter(([key]) => key.startsWith("option_"))
                          .map(([key, value], optionIndex) => {
                            const isSelect = 
                             key === items?.selected_value;
                            
                            const isAnswer =
                              key === items?.questionData?.answer;
                      
                            return (
                              <div
                                key={optionIndex}
                                className={`border-2 border-green-200  px-4 xs:w-[250px] sm:w-[260px] md:[270px] lg:w-[350px] rounded-md mx-5 ${
                                  isAnswer ? "bg-green-300" : "bg-red-100"
                                }`}
                              >
                                <FormControlLabel
                                  value={key}
                                  control={
                                    <Radio
                                      sx={{ color: "#6c63ff" }}
                                      checked={isSelect}
                                    />
                                  }
                                  label={
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                      }}
                                    >
                                      <Typography>{value}</Typography>
                                      {isSelect && (
                                        <div>
                                          {isSelect === isAnswer ? (
                                            <BiCheck  className="text-emerald-500 ml-5 w-5 h-5" />
                                          ) : (
                                            <AiFillCloseCircle className="text-red-500 ml-5 w-5 h-5 " />
                                          )}
                                        </div>
                                      )}
                                    </Box>
                                  }
                                />
                              </div>
                            );
                          })}
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>

             
                <div className="px-5 pt-2 ">
                  <span className="font-sans font-medium  text-md text-emerald-600 ">
                    Description :
                  </span>

                  {items?.questionData?.answer &&
                  items?.questionData?.answer in
                    items?.questionData?.options ? (
                    <span>
                      {
                        items?.questionData?.options[
                          items?.questionData?.answer
                        ]
                      }
                    </span>
                  ) : (
                    <span></span>
                  )}
                </div>
                <div className="px-5 py-3">
                  <span className="text-md font-sans font-normal">
                    💡 {items?.questionData?.qus_description}
                  </span>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ViewResult;
