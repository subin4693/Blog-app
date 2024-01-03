import SidebarComponent from "@/components/SidebarComponent";
import CategoryTitle from "@/components/CategoryTitle";

const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/categorys");
        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getTopPosts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/blogs/top");
        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

const Sidebar = async () => {
    const { categorys } = await getData();
    const { topViewedBlogs } = await getTopPosts();

    return (
        <div>
            <div>
                <SidebarComponent title="Most Popular" datas={topViewedBlogs} />
            </div>
            <div className="my-16">
                <h2 className="text_title mb-5">Categories</h2>
                <div className="text-xs grid grid-cols-3 gap-3">
                    {categorys.map((cat) => (
                        <CategoryTitle
                            title={cat.category_title}
                            key={cat.category_title}
                        />
                    ))}
                </div>
            </div>
            {/*<div className="mt-5">
                <SidebarComponent title="EditorPick" datas={EditorPick} />
            </div>*/}
        </div>
    );
};

export default Sidebar;
