import React from 'react';

export const SlideBarContainer = (props) => {
    return (
        <div className="sidebar close">
            {props.children}
        </div>
    );
}
