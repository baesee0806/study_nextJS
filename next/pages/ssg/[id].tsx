import { useRouter } from "next/router";

const Post = ({post}:any) => {
 const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        Post : {router.asPath}
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </div>
    );
};

export default Post;

export async function getStaticPaths(){
    return{
        paths:[
            {params:{id:'1'}},
            {params:{id:'2'}},
            {params:{id:'3'}},
        ],
        fallback:true,
    };
}

export async function getStaticProps(context:any){
   
    const {id}  = context.params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return{
        props:{
            post,
        },
    };
}
