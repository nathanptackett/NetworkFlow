class LinkedList
{
    constructor(value)
    {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value)
    {
        const newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}