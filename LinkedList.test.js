const LinkedList = require('./LinkedList')

describe("#insertAtHead", () => {
    test("Insert element at the head", () => {
        const list1 = new LinkedList();
        list1.insertAtHead(10);
        const oldHead = list1.head;
        list1.insertAtHead(20);

        expect(list1.head.value).toBe(20);
        expect(list1.head.next).toBe(oldHead);
        expect(list1.length).toBe(2)
    })
})