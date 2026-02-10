'use client'
import Loader from "../generalcompo/loader"
import { useEffect, useState } from "react";
import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useParams, useSearchParams } from "next/navigation";

// 1. Define the internal structures
interface CourseDescription {
  introduction: string;
  moduleExplanation: string;
  prerequisites: string;
}

interface CourseOtherInfo {
  price: string;
  status: string;
  type: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | string;
}

// 2. Define the main Course interface
interface Course {
  id: number;
  name: string;
  title: string;
  organizer: string;
  goal: string;
  reviews: string[];
  description: CourseDescription;
  otherInfo: CourseOtherInfo;
}

function CoursePage() {
  const [formSent, setFromsent] = useState<boolean>(false);
  const algerianCities: string[] = [
    "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Sétif", "Tlemcen",
    "Béjaïa", "Mostaganem", "Skikda", "Tizi Ouzou", "Ghardaïa", "Biskra", "El Oued",
    "Djelfa", "Laghouat", "Adrar", "Tamanrasset"
  ];

  // 3. Apply the type to useState
  const [data, setData] = useState<Course | null>(null);
  const [form, setForm] = useState<boolean>(false);

  const id = Number(useParams().id);
  const topic=useSearchParams().get("topic");

  

  useEffect(() => {
    async function fill() {
      try {
        
        const res = await fetch(`/api/course?id=${id}&topic=${topic}`);
        const apiData = await res.json();
        
        setData(apiData);
      } catch (error) {
        console.error("Failed to fetch course:", error);
      }
    }
    fill();
  }, []);

  let listOfReviews: React.ReactNode[] = [];
  if (data) {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    listOfReviews = data.reviews.map((item: string, index: number) => {
      const stars: React.ReactNode[] = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <FontAwesomeIcon 
            icon={faStar} 
            className='text-[#213E69] text-[0.5rem] pb-[0.5rem]' 
            key={index * 3 + array[i]} 
          />
        );
      }
      return (
        <div key={index}>
          {stars}
          <div>{item}</div>
        </div>
      );
    });
  }

  return (data ?
    (<div className='flex flex-col gap-[2rem] px-[2rem] py-[1rem] ' >
      <div className="md:flex md:justify-between">
        <div className="bg-white p-[1rem] gap-[1rem] flex flex-col rounded-[10px] md:w-[67%]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#161616] text-[22px] font-black leading-[28px] mr-[20px]"
            >{data.title}</h1>
            <button className="font-[600] bg-[#213e69] text-white  px-[1rem] py-[0.5rem] rounded"
              onClick={() => setForm(true)}>
              Subscribe</button>
          </div>

          <div className='text-gray-500 font-[500]'>{data.goal}</div>

          <h3 className="text-[#161616] text-[20px] font-semibold leading-[28px] "
          >introduction</h3>
          <p className='text-gray-500 font-[500]'>{data.description.introduction}</p>
          <h3 className="text-[#161616] text-[20px] font-semibold leading-[28px]  "
          >module Explanation</h3>
          <p className='text-gray-500 font-[500]'>{data.description.moduleExplanation}</p>
          <h3 className="text-[#161616] text-[20px] font-semibold leading-[28px] "
          >prerequisites</h3>
          <p className='text-gray-500 font-[500]'>{data.description.prerequisites}</p>

        </div >
        <div className="flex-col flex gap-[1rem] w-full md:w-[30%]">
          <div className="bg-white flex flex-col rounded-[10px] py-[1.5rem] px-[2rem] gap-[1rem]">
            {/* PRICE */}
            <div className="flex justify-between">
              <button className="font-[700]">Price</button>
              <p className="border-dashed border-[1px] border-[#3763a5] p-[0.5rem] rounded-[10px] text-[#3763a5] w-[92px] text-center">
                {data.otherInfo.price}
              </p>
            </div>

            {/* STATUS */}
            <div className="flex justify-between">
              <button className="font-[700]">Status</button>
              <p className="border-dashed border-[1px] border-[#3763a5] p-[0.5rem] rounded-[10px] text-[#3763a5] w-[92px] text-center">
                {data.otherInfo.status}
              </p>
            </div>

            {/* TYPE */}
            <div className="flex justify-between">
              <button className="font-[700]">Type</button>
              <p className="border-dashed border-[1px] border-[#3763a5] p-[0.5rem] rounded-[10px] text-[#3763a5] w-[92px] text-center">
                {data.otherInfo.type}
              </p>
            </div>

            {/* DURATION */}
            <div className="flex justify-between">
              <button className="font-[700]">Duration</button>
              <p className="border-dashed border-[1px] border-[#3763a5] p-[0.5rem] rounded-[10px] text-[#3763a5] w-[92px] text-center">
                {data.otherInfo.duration}
              </p>
            </div>

            {/* LEVEL */}
            <div className="flex justify-between">
              <button className="font-[700]">Level</button>
              <p
                className={`px-[1rem] py-[0.5rem] rounded-[20px] w-[92px] text-center font-[500] text-[#213e69]
        ${data.otherInfo.level === 'Beginner'
                    ? 'bg-[#c5edc1]' // light green
                    : data.otherInfo.level === 'Intermediate'
                      ? 'bg-[#fdf3b0]' // pastel yellow
                      : data.otherInfo.level === 'Advanced'
                        ? 'bg-[#ffd6d6]' // soft pink
                        : 'bg-[#e3e7f1]' // default pastel gray-blue
                  }`}
              >
                {data.otherInfo.level}
              </p>
            </div>
          </div>


          <div className='rounded-[10px] bg-white  p-[1rem]'>
            <h3 className="text-[#161616] text-[22px] font-black leading-[28px] mr-[20px]">organizations</h3>
            <div className="flex gap-[1rem] items-center p-[1rem]">
              <Image src={'/images/organizer.jpg'} alt="" width={300} height={100}
                className="rounded-full h-[5rem] w-[5rem] " />
              <div className="text-gray-700 font-[600] text-[1.2rem]">{data.organizer}  <p className="font-[500] text-[0.8rem]">BrainerX</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-[10px] bg-white  p-[1rem]'>
        <h3 className="text-[#161616] text-[22px] font-black leading-[28px] mr-[20px] pb-[1rem]">Reviews</h3>
        <div className='text-gray-700 text-[0.8rem] flex flex-col gap-[1rem]' > {listOfReviews}</div>

      </div>

      {form &&
        <div className="fixed  top-0  w-full  z-[100]  bg-black/50 flex right-0 left-0  h-[100vh]  justify-center items-center ">
          <div className="p-[1rem] w-[70%] bg-white h-[90%] overflow-y-auto scroll ">
            <div className="flex justify-between w-full ">
              <h1 className="font-[800] text-black  text-[1.75rem] text-center">One final Step...</h1>
              <FontAwesomeIcon icon={faXmark}
                className="cursor-pointer"
                onClick={() => setForm(false)} />
            </div>
            <div>
              <h3 className="font-[600] text-[1.5rem] text-black p-[0.5rem]">Event details</h3>
              <div className="bg-[#add8ff] rounded p-[1rem] text-[#213e69] font-[600] text-[1.25rem]">{data.title}</div>
            </div>
            <form className=" flex flex-col  gap-[1rem] "
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setFromsent(true);
                setTimeout(() => {
                  setFromsent(false);
                  setForm(false);
                }, 3000);
              }}>

              <h3 className="font-[600] text-[1.5rem] text-black p-[0.5rem]">Personal information</h3>

              <input name="fullName" placeholder="Full Name " required className=
                "text-[1rem] bg-white border-[1px] border-gray-300 p-[0.7rem] rounded font-[500]"
                type="text" />
              <input name="emailAddress" required placeholder="Email Address"
                className="text-[1rem] bg-white border-[1px] border-gray-300 p-[0.7rem] rounded font-[500]"
                type="email" />
              <input name="phoneNumber" required placeholder="Phone number"
                className="text-[1rem] bg-white border-[1px] border-gray-300 p-[0.7rem] rounded font-[500]"
                type="tel" />
              <div className="flex flex-col gap-2 w-full">


                <select
                  id="city"
                  name="city"
                  required
                  className="border border-gray-300 rounded p-2 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {algerianCities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

              </div>
              <textarea name="motive" id="" placeholder="Enter Why You want To Join Us " required
                className="text-[1rem] bg-white border-[1px] border-gray-300 p-[0.7rem] rounded font-[500]"
                rows={5}></textarea>
              <button type="submit" className="font-[600] bg-[#213e69] text-white  px-[1rem] py-[0.5rem] rounded w-[7rem] text-center" >Confirm</button>


            </form>
            {formSent && <div className="w-full h-full top-0 right-0 justify-center flex items-center absolute text-[1.5rem] text-green-500 z-100  font-500 bg-gray/50 backdrop-blur-sm
            ">
              you have subscribed successfuly , we will contact you later to confirm the process.</div>}
          </div>
        </div>
      }
    </div>) : <div className="w-full flex justify-center "><Loader /></div>);
}
export default CoursePage;