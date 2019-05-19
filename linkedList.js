class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        const node = new Node(value)
        this.length++
        if (!this.head) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
    }
    _find(value, test=this._test) {
        let current = this.head
        let i = 0
        while (current) {
            if (test(value, current.value, i, current)) {
                return current
            }
            current = current.next
            i++
        }
        return null
    }
    get(index) {
        const node = this._find(index, this._testIndex)
        if (!node) return null
        return node.value
    }
    pop() {
        return this.delete(this.length-1)
    }
    _test(a, b) {
        return a === b
    }
    _testIndex(search, __, i) {
        return search === i
    }
    delete(index) {
        if (index === 0) {
            const head = this.head
            if (head) {
                this.head = this.next
            } else {
                this.tail = this.head = null
            }
            this.length--
            return head.value
        }
        const node = this._find(index-1, this._testIndex)
        const excise = node.next
        if (!excise) return null
        node.next = excise.next
        if (node.next && !node.next.next) this.tail = this.next
        this.length--
        return excise.value
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}