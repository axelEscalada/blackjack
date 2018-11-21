import {Stack} from '../components/Stack'

test('peek debe devolver el head del stack', () => {
    let stack = new Stack()
    stack.push(2)
    let head = stack.peek()
    expect(head).toBe(2)
})