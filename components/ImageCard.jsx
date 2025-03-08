import Image from "next/image";

const ImageComponent = ({ image, details }) => (
  <div className="row-span-2 col-span-1">
    <div className="relative h-[50%]">
      <Image
        src={image}
        alt={image}
        placeholder="blur"
        fill
        className="grayscale hover:grayscale-0 cursor-pointer aspect-square"
      />
    </div>
    <div className="text-[1rem] mt-2 text-gray-600 ">{details}</div>
  </div>
);

export default ImageComponent;
