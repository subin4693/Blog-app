import Image from "next/image";

const MembershipCard = ({ detail }) => {
    const bgColor = {
        Silver: "bg-gray-200",
        Gold: "bg-yellow-200",
        Diamond: "bg-purple-300",
    };

    return (
        <div
            className={`text-center flex justify-center items-center flex-col p-5 w-full md:w-[20rem]  ${
                bgColor[detail.title]
            }`}
        >
            <Image src={detail.badge} height="60" width="60" alt="badg logo" />
            <h1 className="text-2xl font-extrabold my-2">{detail.title}</h1>
            <h2 className="text_title my-3">
                ₹{detail.price}
                <span>/month</span>
            </h2>
            <ul className="mb-2">
                {detail.features.map((feature, index) => (
                    <li key={index} className="my-2">
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="bg-green-200 hover:bg-gray-200 w-full p-2">
                Select plane
            </button>
        </div>
    );
};

export default MembershipCard;
