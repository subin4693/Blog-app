import CategoryTitle from "@/components/CategoryTitle";
import Banner from "@/components/Banner";
import RecentPosts from "@/components/RecentPosts";
import Sidebar from "@/components/Sidebar";

const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/categorys");
        if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
        }
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const Home = async ({ searchParams }) => {
    const { categorys } = await getData();

    const page = parseInt(searchParams.page) || 1;

    return (
        <>
            <header>
                <Banner />
            </header>
            <section className="mt-10">
                <h1 className="text_title ">Categories</h1>
                <div className="mt-3 flex_between flex-wrap gap-3 text-sm">
                    {categorys.map((cat) => (
                        <CategoryTitle
                            key={cat._id}
                            title={cat.category_title}
                            image={cat.image}
                        />
                    ))}
                </div>
            </section>
            <section className="flex  justify-between mt-10">
                <div className="w-screen lg:w-3/5 ">
                    <RecentPosts />
                </div>

                <div className=" border-l-2 pl-5 hidden lg:flex h-fit ">
                    <Sidebar />
                </div>
            </section>
        </>
    );
};

export default Home;
