import React, {useEffect} from 'react';
import {List, Paper} from "@material-ui/core";
import {Tag} from "./Tag";
import {useHomeStyles} from "../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTagsLoaded, selectTagsItems} from "../store/ducks/tags/selectors";
import {fetchTags} from "../store/ducks/tags/actionCreators";

type Props = {
    classes: ReturnType<typeof useHomeStyles>
};

export const Tags:React.FC<Props> = ({classes}: Props):React.ReactElement | null => {
    const dispatch = useDispatch()
    const tags = useSelector(selectTagsItems)
    const isTagsLoaded = useSelector(selectIsTagsLoaded)


    useEffect(() => {
        dispatch(fetchTags())
    },[])

    if(!isTagsLoaded) {
        return null
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    tags.map(tag => (
                        <Tag key={tag._id}
                             name={tag.name}
                             count={tag.count}
                             classes={classes}/>
                    ))
                }
            </List>
        </Paper>
    );
};
