# Linked Lists 

An implementation of the **Linked List** data structure in JavaScript, created as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) curriculum. The project includes a complete class structure for working with lists, along with a suite of unit tests built using Jest.

## 🛠 Implemented Methods

The `LinkedList` class supports the following operations:

* **`append(value)`** — adds a new node containing `value` to the end of the list.
* **`prepend(value)`** — adds a new node containing `value` to the start of the list.
* **`size()`** — returns the total number of nodes in the list.
* **`head()`** — returns the first node in the list.
* **`tail()`** — returns the last node in the list.
* **`at(index)`** — returns the node at the given index.
* **`pop()`** — removes the last element from the list and returns its value.
* **`contains(value)`** — returns `true` if the passed value is in the list, otherwise returns `false`.
* **`findIndex(value)`** — returns the index of the node containing value, or `-1` if not found.
* **`toString()`** — represents your LinkedList objects as strings in the format: `( value ) -> ( value ) -> null`.
* **`insertAt(index, ...values)`** — inserts one or more values at the given index.
* **`removeAt(index)`** — removes the node at the given index.

## 🧪 Testing

Unit tests (using Jest) have been written for this project, covering core functions as well as insertion (`insertAt`) and deletion (`removeAt`) operations, including edge cases and error handling.

To run the tests:

```bash
npm test
```

## 🚀 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/dev-groznov/linked-lists.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Import and use the module in your code:
   ```javascript
   const LinkedList = require('./linked-list');

   const list = new LinkedList();
   list.append('dog');
   list.append('cat');
   
   console.log(list.toString()); // ( dog ) -> ( cat ) -> null
   ```