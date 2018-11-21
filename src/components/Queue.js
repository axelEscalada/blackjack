import {Node} from './Node'

export class Queue {
    
    constructor(){
        this.size = 0;
    }

    node;

    enqueue(value){
        if(this.node != undefined){
            let iteratorNode = this.node
            
            while(iteratorNode.nextNode != null){
                iteratorNode = iteratorNode.nextNode;
            }

            iteratorNode.nextNode = new Node(value);
        }else{
            this.node = new Node(value);
        }
        this.size++;
        
    }

    dequeue(){
        if(this.node){
            let tempNode = this.node;
            this.node = this.node.nextNode;
            this.size--;
            return tempNode.value;
        }
        return null;
    }

    peek(){
        if(this.node)
            return this.node.value;
        return "empty"
    }

    getSize(){
        return this.size;
    }

}