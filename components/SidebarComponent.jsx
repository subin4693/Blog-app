import Image from "next/image";
import Link from "next/link";
import { useColor } from "@/hooks/color";
import parse from "html-react-parser";

const Description = ({ data }) => {
    const color = useColor();
    const date = new Date(data.createdAt);

    return (
        <Link
            href={`posts/${data.slug}`}
            className="flex text-xs mb-5 items-center"
        >
            {data.image && (
                <div className="relative w-[2.5rem] h-[2.5rem] mr-2 ">
                    <Image
                        src={data.image}
                        fill="true"
                        className="rounded-full object-fit absolute"
                    />
                </div>
            )}
            <div>
                <span
                    className={`text-[.6rem] ${color} rounded-sm py-[2px] px-2`}
                >
                    {data.category[0]}
                </span>
                <div className="my-1  ">{data && parse(data.title)}</div>
                <p className="text-[0.7]">
                    <span className="font-bold mr-3 ">{data.username}</span>
                    <span>{date.toLocaleDateString()}</span>
                </p>
            </div>
        </Link>
    );
};

const SidebarComponent = ({ datas, title }) => {
    return (
        <div>
            <h1 className="text_title mb-5">{title}</h1>
            <div>
                {datas.map((data) => (
                    <Description data={data} key={data} />
                ))}
            </div>
        </div>
    );
};

export default SidebarComponent;
