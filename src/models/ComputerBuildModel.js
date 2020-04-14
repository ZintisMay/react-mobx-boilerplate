import { observable, computed, action, toJS } from "mobx";
import allComputerParts from "../data/computerParts.json"

class ComputerPart {
    id = Math.random();
    @observable name;
    @observable cost;
    @observable type;

    constructor(name, cost, type) {
        this.name = name;
        this.cost = cost;
        this.type = type
    }
}


export default class ComputerPartsModel {

    constructor(){

        //dig into json and log items
        Object.values(this.allComputerParts).map(category=> category.map(part => {part.selected = false}))
        //wtf is toJS? Well observables look WIERD in the console. They gave us a function to make them look normal. It's imported up above on line 1

        console.log("this.allComputerParts")
        console.log(toJS(this.allComputerParts))
    }

    @observable allComputerParts = {
        ...allComputerParts
    }

    //Dummy data to start with
    @observable computerBuild = {

    };

    @computed
    get computerBuildCost() {
        let sum = 0;
        let arr = Object.values(this.computerBuild)
        arr.map(part => {sum += part.cost});
        return sum;
    }

    @action
    selectComputerPart(part) {
        console.log(toJS(part))
        this.computerBuild[part.type] = part;
        this.allComputerParts[part.type].map( item => {item.selected = false})
        part.selected = true
        console.log(toJS(this.computerBuild))
    }

    @action
    removeComputerPart(part) {
        console.log(toJS(part))
        delete this.computerBuild[part.type];
        this.allComputerParts[part.type].map( item => {item.selected = false})
        console.log(toJS(this.computerBuild))
    }
}