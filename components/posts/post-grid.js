import PostItem from './post-item';
import classes from './post-grid.module.css';

function PostGrid(props) {
    const { posts } = props;
    return <ul className={classes.grid}>
        {posts.map((post, i) => <PostItem post={post} key={ i}/>)}
    </ul>
}
export default PostGrid;