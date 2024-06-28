import Image from "next/image";
import Link from "next/link";

const MealItem = ({title, slug, image, summary, creator}) => {
  return (
    <>
      <article className="flex flex-col justify-between h-full rounded-[4px] [box-shadow:0_0_12px_rgba(0,_0,_0,_0.3)] overflow-hidden [transition:all_0.3s_ease-in-out] text-[#ddd6cb] bg-[linear-gradient(90deg,_#2c1e19,_#25200f)]">
        <header className="">
          <div className="relative h-60">
            <Image src={image} alt={title} fill />
          </div>
          <div className="pl-4 pr-4 py-2">
            <h1>{title}</h1>
            <p className="">by {creator}</p>
          </div>
        </header>
        <div className="flex flex-col justify-between h-full">
          <p className="pl-4 pr-4 py-4">{summary}</p>
          <div className="p-4 text-right">
            <Link href={`meals/${slug}`} className="inline-block mt-4 px-4 py-2 rounded-lg bg-[linear-gradient(90deg,_#f9572a,_#ff9b05)] text-[#ffffff] font-bold no-underline hover:bg-[linear-gradient(90deg,_#fd4715,_#f9b241)] ">View Details</Link>
          </div>
        </div>
      </article>
    </>
  );
};
export default MealItem;
