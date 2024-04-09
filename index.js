class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            const popValue = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return popValue;
        } else {
            let current = this.head;
            while (current.nextNode !== this.tail) {
                current = current.nextNode;
            }
            const popValue = current.nextNode.value;
            current.nextNode = null;
            this.tail = current;
            this.length--;
            return popValue;
        }
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.nextNode;
            }
            newNode.nextNode = current.nextNode;
            current.nextNode = newNode;
            this.length++;
        }
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.nextNode;
            if (this.length === 1) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.nextNode;
            }
            current.nextNode = current.nextNode.nextNode;
            if (index === this.length - 1) {
                this.tail = current;
            }
        }
        this.length--;
        return true;
    }

    toString() {
        if (this.length === 0) {
            return "Empty LinkedList";
        }
        let result = "";
        let current = this.head;
        while (current) {
            result += `${current.value} -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}

// Example usage:
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
ll.insertAt(2.5, 3);
console.log(ll.toString());  // Output: 0 -> 1 -> 2 -> 2.5 -> 3 -> null
console.log(ll.size());      // Output: 5
console.log(ll.contains(2)); // Output: true
console.log(ll.find(2.5));   // Output: 3
ll.removeAt(3);
console.log(ll.toString());  // Output: 0 -> 1 -> 2 -> 3 -> null
