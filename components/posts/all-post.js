import classes from './all-post.module.css';
import PostsGrid from './post-grid';

function AllPosts(props) {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={ props.posts}/>
    </section>
 }

export default AllPosts;
