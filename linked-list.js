class LinkedList {
    constructor() {
        this.headNode;
        this.tailNode;
    }

    append(value) {
        const newNode = new Node(value)

        if (this.headNode === undefined) {
            this.headNode = newNode
        }

        if (this.tailNode !== undefined) {
            this.tailNode.nextNode = newNode
            this.tailNode = newNode
        } else {
            this.tailNode = newNode
        }
    }

    prepend(value) {
        const newNode = new Node(value)

        if (this.headNode === undefined) {
            this.headNode = newNode
            this.tailNode = newNode
        } else {
            newNode.nextNode = this.headNode
            this.headNode = newNode
        }
    }

    size() {
        let cnt = 1
        let curNode = this.headNode

        while (curNode.nextNode !== null) {
            cnt += 1
            curNode = curNode.nextNode
        }

        return cnt
    }

    head() {
        return this.headNode
    }

    tail() {
        return this.tailNode
    }

    at(index) {
        let curIndex = 0
        let curNode = this.headNode

        while (curNode !== null) {
            if (index === curIndex) return curNode
            curIndex += 1
            curNode = curNode.nextNode
        }
    }

    pop() {
        if (this.head !== undefined) {
            const popNode = this.headNode
            this.headNode = this.headNode.nextNode
            return popNode.value
        }
    }

    contains(value) {
        let curNode = this.headNode

        while (curNode !== null) {
            if (value === curNode.value) return true
            curNode = curNode.nextNode
        }

        return false
    }

    findIndex(value) {
        let curIndex = 0
        let curNode = this.headNode

        while (curNode !== null) {
            if (value === curNode.value) return curIndex
            curIndex += 1
            curNode = curNode.nextNode
        }

        return -1
    }

    toString() {
        if (this.head === undefined) return ""
        let curNode = this.headNode
        let res = ''

        while (curNode !== null) {
            res += `( ${curNode.value} ) -> `
            curNode = curNode.nextNode
        }
        res += `null`

        return res
    }

    insert(values, curNode) {
        for(let value of values) {
            let newNode = new Node(value, curNode.nextNode)
            curNode.nextNode = newNode
            curNode = newNode
        }
        return curNode
    }

    insertAt(index, ...values) {
        if (index === 0) {
            this.prepend(values[0])
            let curNode = this.headNode
            this.insert(values.splice(1), curNode)
        } else {
            let curIndex = 1
            let curNode = this.headNode

            while (curNode !== null) {
                if (index === curIndex) {
                    let isTail = false
                    if (curNode.nextNode === null) {
                        isTail = true 
                    }

                    let newNode = new Node(values[0], curNode.nextNode)
                    curNode.nextNode = newNode
                    curNode = newNode
                    const lastNode = this.insert(values.splice(1), curNode)

                    if (isTail) this.tailNode = lastNode

                    return
                }
                curIndex += 1
                curNode = curNode.nextNode
            } 
            throw new RangeError(`Index ${index} is out of bounds`)
        }       
    }

    removeAt(index) {
        if (index === 0) {
            this.headNode = this.headNode.nextNode
        } else {
            let curIndex = 1
            let curNode = this.headNode
            while (curNode.nextNode != null) {
                if (curIndex === index) {
                    if (curNode.nextNode.nextNode !== null) {
                        curNode.nextNode = curNode.nextNode.nextNode
                    } else {
                        this.tailNode = curNode
                        curNode.nextNode = null
                    }
                    return
                }
                curIndex += 1
                curNode = curNode.nextNode
            }
            throw new RangeError(`Index ${index} is out of bounds`)
        }
    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value || null
        this.nextNode = nextNode || null
    }
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('snake');

list.removeAt(3)
console.log(list.toString())

module.exports = LinkedList