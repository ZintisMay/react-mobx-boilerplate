import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Todo from "./Todo";

@observer
class ComputerPartSelect extends React.Component {

    render() {

        // so the object looks like 
        //{
        //     Property:[
        //         {
        //             key:value
        //         }
        //     ]
        // }

        //So we have to iterate over the first object, then the array inside

        //I think it is the easiest to read this way. You may disagree
        let categories = Object.values(this.props.computerPartsStore.allComputerParts)

        return (
            <div>
                COMPUTER PART SELECT
                {
                    categories.map( category => 
                        category.map( item => 
                            <div key={item.name} onClick={
                                () => this.props.computerPartsStore.selectComputerPart(item)}>
                                <p style={{color: item.selected ? 'red' : 'black'}}>
                                    {item.name}
                                    <br/>
                                    {item.cost}
                                    <br/>
                                    {item.type}
                                </p>
                                
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default ComputerPartSelect;