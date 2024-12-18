import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const ServiceCard = ({ detail }) => {
  const { name, description, image, link, id } = detail;

  return (
    <article className="service-card mt-5 rounded-3xl bg-white shadow-3xl  w-[320px] ">
      <Image
        src={image}
        alt={`${name} image`}
        className="service-image w-full h-[200px] rounded-t-3xl"
      />
      <div className="service-details p-5">
        <h3 className="font-bold text-xl font-roboto text-darker-blue hover:text-primary">
          <Link href={`/pages/services/${id}`}>{name}</Link>
        </h3>
        <p>{description}</p>
        <Link
          href={link}
          className="flex items-center text-lg font-bold text-dark-blue hover:text-darker-blue"
        >
          See All Projects
          <IoIosArrowForward className="ml-2 " />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
