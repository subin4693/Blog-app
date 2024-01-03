import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full h-[15rem] relative shadow-2xl">
            <Image
                src="/banner.jpg"
                fill="true"
                className="object-fit absolute"
                alt="bannerimage"
            />
            <div className="absolute bottom-10 left-10 text-white ">
                <h1 className="text-lg font-bold mb-1">Blog...</h1>
                <p>Discover new stories and creative ideas</p>
            </div>
            <div className="absolute bottom-[-20px] w-full   grid place-items-center">
                <label className="  bg-white rounded-sm overflow-hidden">
                    <input
                        type="text"
                        placeholder="search..."
                        className="p-2 w-[20rem] flex-1 text-sm  border-none outline-none shadow-lg"
                    />
                </label>
            </div>
        </div>
    );
};

export default Banner;
