const LinkedList = require('./LinkedList');


const list = LinkedList.formValues(10, 20, 30 , 40)

list.print();
list.insertAtIndex(1, 333);
// console.log(list.getElementIndex(1).value);
list.print();
list.removeHead();
list.print();
list.removeAtIndex(0)
list.print();

