import React from 'react';
import PostlistItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    const elements = posts.map(item => {
        if (typeof (item) === 'object' && isEmpty(item)) {

            return (
                <li key={item.id} className="list-group-item">
                    <PostlistItem
                        label={item.label}
                        important={item.important}
                        like={item.like}
                        onDelete={() => onDelete(item.id)}
                        onToggleImportant={() => onToggleImportant(item.id)}
                        onToggleLike={() => onToggleLike(item.id)}
                    />
                </li>
            )
        } else return null;
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;