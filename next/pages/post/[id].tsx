import { useRouter } from "next/router";

const Post = () => {
    // 파라미터 가져오기 
    const router = useRouter();
    const { id } = router.query;

    return <h1>Post : {id}</h1>
};
export default Post;