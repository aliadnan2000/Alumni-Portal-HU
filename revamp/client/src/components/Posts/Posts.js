import React from "react";
import {useSelector} from "react-redux";

import Post from "./Post/Post";
import {Grid, CircularProgress} from "@material-ui/core";
import useStyles from "./styles";
    
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
       !posts.length ? <CircularProgress/> : (
            <Grid className={classes.paper} container alignItems="stretch"  spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid>
       )
        
    );
}

export default Posts;