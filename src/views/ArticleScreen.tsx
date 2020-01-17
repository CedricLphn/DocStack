import React from 'react'
import { Typography } from '@material-ui/core';

const ArticleScreen = (props) => {
    const {slug} = props.match.params;
    console.log(props);
    return (
        <div>
            <Typography variant="h2" component="h2">
                Hello {slug}
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sed maiores nostrum ad quos ratione, recusandae, illo commodi, odio enim vero! At ipsa eaque ullam maiores fugit. Ut, nam. Iste.
            </Typography>
        </div>
    )
}

export default ArticleScreen
