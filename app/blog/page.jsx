import RecentPosts from "@/components/RecentPosts";
import Sidebar from "@/components/Sidebar";
import { useColor } from "@/hooks/color";

const Blog = ({ searchParams }) => {
    const color = useColor();
    const { cat } = searchParams;
    return (
        <section>
            {cat && (
                <h1
                    className={`text-center ${color} py-2 text_title capitalize`}
                >
                    {cat}
                </h1>
            )}
            <div className="flex  justify-between mt-10">
                <div className=" lg:w-2/3 ">
                    <RecentPosts cat={cat} />
                </div>
                <div className=" border-l-2 pl-5 hidden lg:flex h-fit ">
                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Blog;
