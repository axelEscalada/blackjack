import {Node} from './Node'

export class Stack {

    node;

    constructor(){
        this.size = 0;
    }

    peek(){
        if(this.node != undefined){
            return this.node.value;
        }        
    }

    push(value){
        if(this.node == undefined){
            this.node = new Node(value);
        }else{
            let newNode = new Node(value)
            newNode.nextNode = this.node
            this.node = newNode
        }
        this.size++
    }

    pop(){
        if(this.node != undefined){
            this.node = this.node.nextNode;
            this.size--;
        }
    }

    getSize(){
        return this.size
    }

}