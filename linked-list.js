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
        while (curNode.nextNode !== null) {
            if (index === curIndex) return curNode
            curIndex += 1
            curNode = curNode.nextNode
        }
        if (index === curIndex) return curNode
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
        while (curNode.nextNode !== null) {
            if (value === curNode.value) return true
            curNode = curNode.nextNode
        }
        if (value === curNode.value) return true
        return false
    }

    findIndex(value) {
        let curIndex = 0
        let curNode = this.headNode
        while (curNode.nextNode !== null) {
            if (value === curNode.value) return curIndex
            curIndex += 1
            curNode = curNode.nextNode
        }
        if (value === curNode.value) return curIndex
        return -1
    }

    toString() {
        if (this.head === undefined) return ""
        let curNode = this.headNode
        let res = `( ${curNode.value} ) -> null`
        while (curNode.nextNode !== null) {
            curNode = curNode.nextNode
            res = `( ${curNode.value} ) ` + res
        }
        return res
    }
}

class Node {
    constructor(value) {
        this.value = value || null
        this.nextNode = null
    }
}

module.exports = LinkedList