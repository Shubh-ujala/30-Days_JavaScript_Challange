//Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function mergeKLists(lists) {
    const minHeap = new MinHeap();
    
    for (let list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    let dummy = new ListNode();
    let current = dummy;

    while (!minHeap.isEmpty()) {
        let node = minHeap.extractMin();
        current.next = node;
        current = current.next;
        
        if (node.next) {
            minHeap.insert(node.next);
        }
    }

    return dummy.next;
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        const min = this.heap[0];
        const end = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index].val < this.heap[parentIndex].val) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }

    _heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallest].val) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallest].val) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }
}
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// Test case
function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Test case 1
const l1 = createList([1, 4, 5]);
const l2 = createList([1, 3, 4]);
const l3 = createList([2, 6]);
const lists1 = [l1, l2, l3];
console.log('Merged list 1:');
printList(mergeKLists(lists1));  // Expected output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
