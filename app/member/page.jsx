import MembershipCard from "@/components/MembershipCard";

const Membership = () => {
    const bronz = {
        title: "Silver",
        price: "45",
        features: ["10 posts per week"],
        badge: "/silver.png",
    };

    const gold = {
        title: "Gold",
        price: "141",
        features: ["100 posts per week"],
        badge: "/gold.png",
    };

    const dimond = {
        title: "Diamond",
        price: "999",
        features: ["100 posts per week"],
        badge: "/dimond.png",
    };

    return (
        <>
            <h1 className="mt-10 text_title">Select your plane:</h1>
            <div className="flex justify-center items-center flex-wrap gap-5 mt-10">
                <MembershipCard detail={bronz} />
                <MembershipCard detail={gold} />
                <MembershipCard detail={dimond} />
            </div>
        </>
    );
};

export default Membership;
