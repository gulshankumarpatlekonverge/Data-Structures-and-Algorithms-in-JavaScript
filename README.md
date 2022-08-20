# Data-Structures-and-Algorithms-in-JavaScript
Data Structures and Algorithms in JavaScript

# Stacks

Array has all the function of the stack.

functions
    1. push 
    2. pop
    3. peek
    4. length / size

https://codepen.io/beaucarnes/pen/yMBGbR?editors=0012

# Sets

Set Data Structure is kind of like an array there are no duplicate values and not in any perticular order. used to check an presense of an item. ES6 is an in-built set object. However, built in set object doesn't contain all the methods that are common to sets so you may still have to implement part of the set yourself.

https://codepen.io/beaucarnes/pen/dvGeeq?editors=0012

# Queue

The queue data structure is a way to hold data, it's similar to a stack while a stack is first in last out where a queue is first in first out.

# Priority Queue

Priority queue in a priority queue  not only do you pass the element into the queue youa also pass the priority of the element so if all the priorities are the same element but whwn you pass in elements at different priorities the elements that sre passed in with the a higher priority are sent to the begining of the queue.

https://codepen.io/beaucarnes/pen/QpaQRG?editors=0012

# Binary Search Tree

A tree data structure is a way to hold data that when visuaized looks like a tree you would see in nature now.

    Root/Parent
    Left Child/ Right Child
    Siblings
    Leaf
    Right SubTree
    Left SubTree

# Binary Search Tree Traversal 

    1. inOrder - left => root => right
    2. preOrder - root => left => right
    3. postOrder - left => right => root
    4. levelOrder(BFS)

https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011

# Hash Table

Hash Table is used to implement associative array or mapping of key value pair. Hash Table is common way to implement the map data structure or objects.

https://codepen.io/beaucarnes/pen/VbYGMb?editors=0012

# Linked List

A linked list is a common data structure where elements are stored in a node, the node conatains two key pieces of information the element itself and reference to the next node.

https://codepen.io/beaucarnes/pen/ybOvBq?editors=0011

# Trie Data Structure
A trie sometimes called a prefix tree is a special type of tree used to store associative data structure a trie stores data in steps each step is a node in the trie this is often used to store worda since there are a finite number of letters that can be put together to make a string.

https://codepen.io/beaucarnes/pen/mmBNBd?editors=0011

# Heap

Binary Heap is a partially ordered binary tree which satisfies the heap property. It has some similarities to a binary search tree except the order is a little difference. Each node has at most two child nodes. The heap indicates a specific relationship between the parent and child nodes.

https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010

https://www.cs.usfca.edu/~galles/visualization/Heap.html

# Graph

The graph data structure is not same as graph you may learned about a math class. Graph is acollection of thimgs and relationships or collections between them data in a graph are called Nodes Or Vertices. The connection between the nodes are called edges

    Types:
    1. Directed Graph
        Directed graphs are graphs with a direction and its edges.

    2. Undirected Graph
        Undirected graphs are graphs without any direction on the edges between nodes.

    Three ways to reoresent a Graph:
        1.  Adjacency List
            Adjacency List is representation of Graph associates each vertex in the graph with the collection of its neighboring vartices or edges.

            This is undirected graph because it doesn't show the direction of the edges.
        
        2. Adjacency Matrix
           Adjacency Matrix is a  two-dimensional array where each nested array has the same number of elements as the outer array so it's basically a matrix of number where number represent the edges. 

           Zero's means there is no edges or relationship and one's means there is a relationship. 

           Adjacency Matrix can be used to represent a Directed Graph.
        
        3. Incidence Matrix
           Like the Adjacency Matrix an Incidence Matrix two-dimensional array, however the rows and and columns means something else here, the Adjecency Matrix use both reows and columns to represent nodes and Incidence Matrixuses reoas rose to represent nodes in the columns to represent edges. This means that we can have uneven number of rows and columns. Each column will represent a unique edge. Also, each edge connects two nodes to show that there is edge between two nodes. 

https://codepen.io/beaucarnes/pen/XgrXvw?editors=0012

# Graphs - Breadth-First Search and Depth-First Search 




# Reference Links

    YouTube : https://www.youtube.com/watch?v=t2CEgPsws3U
    Medium : https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b

    https://www.manning.com/livevideo/algorithms-in-motion?a_aid=algmotion&a_bid=9022d293