import React from 'react';
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <br/>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4.45PM" avatar={faker.image.avatar()} content="Nice"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Dam" timeAgo="Today at 5.45PM" avatar={faker.image.avatar()} content="Congrats"/>

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jon" timeAgo="Today at 6.45PM" avatar={faker.image.avatar()} content="Superv"/>
            </ApprovalCard>

            <ApprovalCard>
                <h2>Warning </h2>
                Are you sure about that ?
            </ApprovalCard>
        </div>
    );
};
ReactDOM.render(<App/>, document.querySelector("#root"))
