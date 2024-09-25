import BackButton from "@/components/BackButton";
import PostTable from "@/components/posts/PostTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="返回" link="/" />
      <PostTable pagenation={true} title="Recent Posts" />
    </>
  );
};

export default PostsPage;
