import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/axiosConfig";
import { CommonProgress } from "../components/common/CommonProgress";

import CommonButton from "../components/common/CommonButton";
import Card from "../components/common/Card";
import SliderService from "../service/SliderService";
import StudyService from "../service/StudyService";
import { Link } from "react-router-dom";
import { hero, wave } from "../assets";
import UserService from "../service/UserService";
import PopupModal from "../components/common/PopupModal";

const Dashboard = () => {
  const [slider, setSlider] = useState([]);
  console.log("Slider ", slider);
  const [study, setStudy] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = localStorage.getItem("userid");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await UserService.getSingleUser(id);

        // Convert the string value to a boolean
        const modalShownFlag = localStorage.getItem("modalShown") === "true";

        if (res?.data?.usertype === "unpaid" && !modalShownFlag) {
          setIsModalOpen(true);
          // Set the flag in localStorage to prevent modal from showing again
        }
      } catch (error) {
        // Handle any error that might occur while fetching user data
        console.error("Error fetching user data:", error);
      }
    };

    getUserData(id);
  }, [id]);

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await SliderService.getSlider();
        setSlider(response.data);
      } catch (error) {
        console.error("Error fetching slider:", error);
      }
    };
    const fetchStudy = async () => {
      try {
        const response = await StudyService.getStudy();
        setStudy(response.data);
      } catch (error) {
        console.log("Error fetching study:", error);
      }
    };

    fetchSlider();
    fetchStudy();
  }, []);

  const { data, isLoading, isError } = useQuery("myData", () =>
    API.get("/category").then((res) =>
      res.data.filter((item) => item.cat_status === "active")
    )
  );

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("modalShown", "true");
  };

  if (isLoading) {
    return (
      <div>
        <CommonProgress />
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching data </div>;
  }
  return (
    <div className="xl:px-12 xs:px-0 lg:px-10">
      <div className="xl:px-12  rounded-lg bg-white mb-10 border-2">
        <div className=" overflow-hidden h-full w-full">
          <div className="flex-col lg:flex-row flex xs:flex-col lg:justify-between xs:justify-center justify-center items-center md:px-16 h-full w-full">
            <div className="lg:w-1/2 xs:w-full w-full flex justify-center items-center ">
              <div className="w-full flex flex-col h-full items-center text-center ">
                <span className="pt-10 px-5 lg:text-[35px] xs:text-[30px] md:text-[35px] sm:text-[30px] text-center pb-2 md:pb-5 font-sans font-bold inline-block bg-gradient-to-r from-purple-400 to-emerald-700 text-transparent bg-clip-text">
                  Making Your MRCS Journey Easiest
                </span>
                <span className="text-center pt-5 px-5 lg:text-[32px] xs:text-[25px] text-[30px]   xs:pl-0 md:pl-8 items-center font-sans font-semibold inline-block bg-gradient-to-r from-emerald-500 to-[#4D317D] text-transparent bg-clip-text">
                  "If you never try, You will never win"
                </span>
                <br />
                <Link to="/allquiz">
                  <button className="py-3 rounded-full px-16  bg-gradient-to-r from-emerald-500 to-indigo-400 text-lg font-bold text-white ">
                    Start
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-[450px] lg:h-full xs:w-[300px] w-full flex justify-center ml-28 sm:ml-12 xs:ml-12 h-[300px] lg:px-0 px-4 md:px-10 mb-4 md:mb-10  ">
              <img src={hero} alt="hero" className="w-full h-full" />
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-0 w-full">
            <img src={wave} alt="wave" className="w-full h-28" />
          </div> */}
        </div>
      </div>
    
        <div className="flex lg:flex-row md:flex-row space-x-5 xs:flex-col border-2 rounded-lg">
          {slider?.map((slider, i) =>
            slider.status === "active" ? (
              <div
                key={i + 1}
                className="bg-white rounded-lg justify-center items-center p-5  flex flex-col w-full shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-xl"
              >
                {slider?.imageUrl && (
                  <div className="h-[350px] w-full mb-8 pb-5 mt-0 top-0">
                    <img
                      src={slider?.imageUrl}
                      alt="slider"
                      className="w-full h-full object-fill rounded-md shadow-md shadow-green-100 my-5"
                    />
                  </div>
                )}
                {slider?.text && (
                  <span className="text-xl text-black font-semibold font-sans justify-center flex items-center text-center  px-5 py-8">
                    {" 👋 "}
                    {slider?.text}
                  </span>
                )}
              </div>
            ) : null
          )}
        </div>

        {/* Study material  */}

        <div className="w-full  mt-10 flex justify-between ">
          <span className="lg:text-xl xs:text-md md:text-lg font-medium font-sans text-emerald-600 ">
            📚 Study Material
          </span>
          <Link to="/allstudy">
            <CommonButton
              color="secondary"
              width={120}
              height={40}
              className="mr-5"
            >
              View More
            </CommonButton>
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 gap-6 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3 w-full items-center mx-auto">
          {study?.slice(0, 8).map((study, i) => (
            <Card
              key={i}
              title={study?.study_name}
              image={study?.image}
              title2={study?.study_title}
              link={`/allstudy/study/${study?._id} `}
            />
          ))}
        </div>

        {/* popular quiz category */}
        <div className="w-full  mt-10 flex justify-between pr-5">
          <span className="lg:text-xl xs:text-lg md:text-lg font-medium font-sans text-emerald-600 ">
            ⭐ Popular Mock Test
          </span>
          <Link to="/allquiz">
            <CommonButton color="secondary" width={120} height={40}>
              View More
            </CommonButton>
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 gap-6 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3">
          {data?.slice(0, 8).map((item) => (
            <Card
              title={item?.cat_name}
              number={""}
              image={item?.image}
              title2={"quizes"}
              link={`/category/quiz?category=${item?.cat_name}`}
              key={item._id}
            />
          ))}
        </div>

      {isModalOpen && <PopupModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Dashboard;
