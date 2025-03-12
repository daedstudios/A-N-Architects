import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({ image, details, name, slug }) => (
  <Link className="row-span-2 col-span-1" href={`/projects/${slug}`}>
    <div className="relative h-[50%]">
      <Image
        src={`/images/${image}`}
        alt={image}
        fill
        objectFit="cover"
        className="grayscale hover:grayscale-0 cursor-pointer duration-300 aspect-square"
      />
    </div>
    <div className="text-[1rem] mt-2 text-black ">{name}</div>
    <div className="text-[1rem] mt-2 text-foreground ">{details}</div>
  </Link>
);

export default ImageComponent;
