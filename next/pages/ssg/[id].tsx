import { useRouter } from "next/router";

const Post = ({post}:any) => {
 const router = useRouter();
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
        fallback:false,
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
