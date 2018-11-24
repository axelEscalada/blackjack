import {Stack} from '../components/Stack'

test('peek debe devolver el head del stack', () => {
    let stack = new Stack()
    stack.push(2)
    let head = stack.peek()
    expect(head).toBe(2)
})

test('pop debe devolver el head del stack y sacarlo del stack', () => {
    let stack = new Stack()
    let head = stack.peek()
    let headRemoved = stack.pop()
    expect(head).toBe(headRemoved)
})
