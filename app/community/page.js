import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
const Community = () => {
  return (
    <>
      <div className="mt-28">
        <header className="gap-12 ml-[auto] mr-[auto] my-12 w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] text-center ">
          <h1 className=" text-[3rem] font-['Montserrat',_sans-serif]">
            One Shared Passion
            <span className=" bg-[linear-gradient(90deg,_#f9572a,_#ff8a05)] bg-clip-text">
               : Food
            </span>
          </h1>
          <p>Join our community and share your favourate recipes</p>
        </header>
        <main className="w-[90%] max-w-[40rem] mx-[auto] my-[0] text-center">
          <h2 className="font-['Montserrat',_sans-serif] text-[2rem] mb-12 text-[#ddd6cb]">
            Community Perks
          </h2>
          <ul className="[list-style:none] mx-[0] my-12 p-0">
            <li className="flex flex-col items-center gap-8">
              <Image
                src={mealIcon}
                alt="A Delcious Meal"
                className="w-32 h-32 object-contain"
              />
              <p className="font-['Montserrat',_sans-serif] text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
                Share Discover recipes
              </p>
            </li>
            <li className="flex flex-col items-center gap-8">
              <Image
                src={communityIcon}
                alt="A crowd of people , cooking"
                className="w-32 h-32 object-contain"
              />
              <p className="font-['Montserrat',_sans-serif] text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
                Find new Friends & Like minded People
              </p>
            </li>
            <li className="flex flex-col items-center gap-8">
              <Image
                src={eventsIcon}
                alt="Acroed of people in a coooking event"
                className="w-32 h-32 object-contain"
              />
              <p className="font-['Montserrat',_sans-serif] text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
                Particpate in cooking events
              </p>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default Community;
