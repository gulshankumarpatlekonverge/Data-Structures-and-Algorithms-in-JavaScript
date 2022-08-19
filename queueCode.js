//  queue data structure

class Queue {
    constructor() {
        let collection = [];

        this.print = function () {
            console.log(collection);
        };

        this.enqueue = function (element) {
            collection.push(element);
        };

        this.dequeue = function () {
            return collection.shift();
        };

        this.front = function () {
            return collection[0];
        };

        this.size = function () {
            return collection.length;
        };

        this.isEmpty = function () {
            return (collection.length === 0);
        };
    }
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();

// console.log(q.enqueue('a'));
// console.log(q.enqueue('b'));
// console.log(q.enqueue('c'));
console.log(q.print());
// console.log(q.dequeue());
console.log(q.front());
console.log(q.print());

// priority queues


class priorityQueue {
    constructor() {
        let collection = [];
        this.printCollection = function () {
            console.log(collection);
        };

        this.enqueue = function (element) {
            if (this.isEmpty()) {
                collection.push(element);
            } else {
                let added = false;
                for (let i = 0; i < collection.length; i++) {
                    if (element[i] < collection[i][i]) { // checking priority
                        collection.splice(i, 0, element);
                        added = true;
                        break;
                    }
                }

                if (!added) {
                    collection.push(element);
                }
            }
        };

        this.dequeue = function () {
            let value = collection.shift();
            return value[0];
        };

        this.front = function () {
            return collection[0];
        };

        this.size = function () {
            return collection.length;
        };

        this.isEmpty = function () {
            return (collection.length === 0);
        };
    }
}


let pq = new priorityQueue();

pq.enqueue(["Gulshankumar", 4]);
pq.enqueue(["Aman", 4]);
pq.enqueue(["Paras", 3]);
pq.enqueue(["Shubham", 2]);
pq.enqueue(["Ashwin", 5]);
pq.enqueue(["Nitin", 1]);

pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

// console.log(pq.enqueue(["Gulshankumar", 4]));
// console.log(pq.enqueue(["Aman", 4]));
// console.log(pq.enqueue(["Paras", 3]));
// console.log(pq.enqueue(["Shubham", 2]));
// console.log(pq.enqueue(["Ashwin", 5]));
// console.log(pq.enqueue(["Nitin", 1]));

console.log(pq.printCollection());
console.log(pq.dequeue());
console.log(pq.front());
console.log(pq.printCollection());
