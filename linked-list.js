class Node {
    constructor(data) {
        this.data = data
    }
}

class LinkendList {
    constructor(head = null) {
      this.head = head;
      this.next = null;
    }

    add(value){
        let lastNode = this.head
        if(lastNode) {
            while (lastNode.next){
                lastNode = lastNode.next
            }
            lastNode.next = new Node(value)
        }
    }

    pop(){
        let head = this.head;
        if(head.next){
            this.head = head.next
        }
    }

    clear(){
        this.head = null
    }

    size(){
        let node = this.head;
        let count = 0;
        while(node.next){
            node = node.next;
            count++;
        }
        return count;
    }
}