import Link from "next/link";

const FooterLinks = ({ title, data }) => {
    return (
        <div>
            <h3 className="font-bold text-gray-800">{title}</h3>
            {data.map((link) => (
                <Link
                    href={link.link}
                    key={link.link}
                    className="text-gray-500 block"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

const Footer = () => {
    const links = [
        {
            name: "Homepage",
            link: "/",
        },
        {
            name: "Blog",
            link: "/blog",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    const tags = [
        {
            name: "Style",
            link: "/blog?search=Style",
        },
        {
            name: "Fashion",
            link: "/blog?search=Fashion",
        },
        {
            name: "Coding",
            link: "/blog?search=Coding",
        },
        {
            name: "Travel",
            link: "/blog?search=Travel",
        },
    ];
    const social = [
        {
            name: "Facebook",
            link: "/",
        },
        {
            name: "Instagram",
            link: "/",
        },
        {
            name: "Tiktok",
            link: "/",
        },
        {
            name: "Youtube",
            link: "/",
        },
    ];
    return (
        <footer className="flex_between flex-wrap mt-20 mb-10">
            <div className="md:w-2/3">
                <h1 className="text_title">
                    <span className="text-green-500">B</span>-log
                </h1>
                <p>
                    Lorem, ispum dolor sit amet consecetur adipisicing elit.
                    Enim necessitatibus similique aspernatur obeaeati veitatis.
                    Apeiam cum porro sequi, totam minima consequuitur,
                    aspernature deleniti vero repellendus dorales.
                </p>
            </div>
            <div className="flex flex-wrap gap-10 mt-10 md:mt-0">
                <FooterLinks title="Links" data={links} />
                <FooterLinks title="Tags" data={tags} />
                <FooterLinks title="Social" data={social} />
            </div>
        </footer>
    );
};

export default Footer;
