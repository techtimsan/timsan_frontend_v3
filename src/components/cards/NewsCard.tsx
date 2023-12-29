import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { NewsProps } from "@/types/app";
// import Image from 'next/image'

const NewsCard = ({ thumbnailUrl, title, author, desc, id }: NewsProps) => {
  return (
    <Card
      className="my-5 sm:my-10 sm:grid sm:grid-cols-2 rounded-none sm:h-96"
      shadow="md"
    >
      <CardHeader className="p-0 sm:col-span-1 w-full h-full border-r rounded-none border-r-green/30">
        <Image
          src={thumbnailUrl}
          alt={title}
          className="w-screen h-full object-cover object-center rounded-none"
        />
      </CardHeader>
      <CardBody className="flex flex-col justify-between sm:col-span-1 sm:px-10 sm:py-10 sm:h-96">
        <h3 className="text-green font-semibold text-lg sm:text-4xl">{title}</h3>
        <div className="max-h-fit overflow-hidden">
          <p className="line-clamp-6 sm:text-lg">{desc}</p>
        </div>
        <Link href={thumbnailUrl} className="underline text-green">
          Read More
        </Link>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
