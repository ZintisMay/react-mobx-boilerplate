import React, { Component } from "react";
//I don't need to create observables or actions
// import { observable, action } from "mobx";
//Observer decorator makes the class update when mobx observable values change
import { observer } from "mobx-react";

import Todo from "./Todo";

@observer
class ComputerCheckout extends React.Component {
    render() {
        return (
            <div>
                COMPUTER CHECKOUT
                {Object.values(this.props.computerPartsStore.computerBuild).map(v => 
                <div key={v.name}>
                {v.name}<div></div>{v.cost}
                </div>)}
                <div>SUM:
                {this.props.computerPartsStore.computerBuildCost}
                </div>
            </div>
        );
    }
}

export default ComputerCheckout;