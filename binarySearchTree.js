class Tree {
    constructor() {
        this.root = null
    }
    toObject() {
        return this.root
    }
    add(value) {
        if (this.root === null) {
            return this.root = new Node(value)
        }

        let current = this.root
        while(true) {
            if (current.value > value) {
                if (current.left) {
                    current = current.left
                } else {
                    current.left = new Node(value)
                    break
                }
            } else {
                if (current.right) {
                    current = current.right
                } else {
                    current.right = new Node(value)
                    break
                }
            }
        }
    }
}

class Node {
    constructor(value, left=null, right=null) {
        this.value = value
        this.left = left
        this.right = right
    }
}