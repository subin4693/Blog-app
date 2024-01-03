import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const PostCard = ({ post }) => {
    return (
        <div className="my-10 flex flex-col  md:flex-row">
            <div className="relative w-full lg:min-w-[20rem] lg:max-w-[20rem] h-[16rem] bg-black">
                <Image
                    src={post.image}
                    // src="https://firebasestorage.googleapis.com/v0/b/blogapp-da46c.appspot.com/o/function%20getTime()%20%7B%20%5Bnative%20code%5D%20%7Dmacos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-2880x1800-1432.jpg?alt=media&token=3c7ff7ce-0cef-4d20-9d11-992c380f59c7"
                    fill="true"
                    className="absolute object-contain"
                />
            </div>
            <div className="p-5 text-xs">
                <span className="font-bold  text-gray-400 mr-5">
                    {post.date}
                </span>

                <span className="font-bold  text-red-400">
                    {post.category[0]}
                </span>

                <h2 className="my-5 text_title">{post.title}</h2>
                <div className="text-gray-800  h-[5rem] overflow-hidden mb-5 text-sm">
                    {/*{post.content.slice(0, 90) + "..."}*/}
                    {parse(post.content)}
                </div>
                <Link href={`/posts/${post.slug}`} className="underline">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
