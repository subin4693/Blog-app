import PostCard from "./PostCard";

const getData = async (cat) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/blogs?cat=${cat || ""}`,
            { cache: "no-store" },
        );

        if (!res.ok) return null;
        const data = await res.json();

        return data.blogs;
    } catch (error) {
        console.log(error);
    }
};

const RecentPosts = async ({ cat }) => {
    const blogs = await getData(cat);

    return (
        <>
            <h1 className="text_title">Recent Posts</h1>
            <>
                {blogs &&
                    blogs.map((post, index) => (
                        <PostCard key={index} post={post} />
                    ))}
            </>
        </>
    );
};

export default RecentPosts;
