import {Queue} from '../components/Queue';

test('debe incrementar el size del queue', () => {
    let queue = new Queue()
    queue.enqueue(2)
    let size = queue.getSize()
    expect(size).toBe(1)
});

test('debe incrementar el size del queue a 2', () => {
    let queue = new Queue()
    queue.enqueue(2)
    queue.enqueue(3)
    let size = queue.getSize()
    expect(size).toBe(2)
});

test('debe decrementar el size del queue a 2', () => {
    let queue = new Queue()
    queue.enqueue(2)
    queue.enqueue(2)
    queue.enqueue(2)
    queue.dequeue()
    let size = queue.getSize()
    expect(size).toBe(2)
});

test('debe decrementar el size del queue a 0', () => {
    let queue = new Queue()
    queue.enqueue(2)
    queue.enqueue(2)
    queue.enqueue(2)
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    let size = queue.getSize()
    expect(size).toBe(0)
});


test('debe devolver el head del queue', () => {
    let queue = new Queue()
    queue.enqueue(2)
    let head = queue.peek()
    expect(head).toBe(2)
})

test('debe devolver el head del queue y removerlo', () => {
    let queue = new Queue()
    queue.enqueue(3)
    queue.enqueue(2)
    
    let head = queue.dequeue()
    let size = queue.getSize()
    expect(head).toBe(3)
    expect(size).toBe(1)
})

test('dequeue debe devolver null si está vacio', () => {
    let queue = new Queue()
    queue.enqueue(3)
    
    queue.dequeue()
    let head = queue.dequeue()
    expect(head).toBe(null)
})


test('peek debe devolver el head del queue sin removerlo', () => {
    let queue = new Queue()
    queue.enqueue(3)
    let size = queue.getSize()
    let head = queue.peek()
    expect(head).toBe(3)
    expect(size).toBe(1)
})