import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

const Restaurants = ({ params }) => {
  const meals = getMeal(params.slug);
  console.log(meals.title);
  if(meals==0){
    notFound
  }
  return (
    <>
      <header className="m-20 flex px-4 py-8 gap-12  max-w-7xl">
        <div className="relative w-96 h-80 object-cover rounded-[8px] [box-shadow:0_0_0.5rem_rgba(0,_0,_0,_0.5)] animate-[fade-slide-in-from-left_1s_ease-out_forwards]">
          <Image className="" src={meals.image} alt={meals.title} fill />
        </div>
        <div className="p-2 pt-2 pb-0 text-[#ddd6cb] max-w-3xl animate-fade-slide-in-from-right">
          <h1 className="m-0 text-8xl uppercase font-montserrat shadow-md">
            {meals.title}
          </h1>
          <p className=" text-2xl text-[#cfa69b] italic">
            by{" "}
            <a
              className="
      bg-gradient-to-r from-[#f9572a] to-[#ff8a05] 
      bg-clip-text text-transparent 
      hover:bg-gradient-to-r hover:from-[#f9572a] hover:to-[#ff8a05] 
      hover:bg-clip-text hover:text-transparent 
      hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
              href={`mailto:${meals.creator_email}`}
            >
              {" "}
              {meals.creator}
            </a>
          </p>
          <p className=" text-xl py-5">{meals.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-[1.25rem] leading-normal bg-[#6e6464] text-[#13120f] rounded-[8px] [box-shadow:0_0_0.5rem_rgba(0,_0,_0,_0.5)] p-8 max-w-[60rem] mx-[auto] my-8 animate-[fade-slide-in-from-bottom_1s_ease-out_forwards]"
          dangerouslySetInnerHTML={{
            __html: meals.instructions,
          }}
        ></p>
      </main>
    </>
  );
};
export default Restaurants;
