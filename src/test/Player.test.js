import { Player } from "../components/Player"
import { Card } from "../components/Card"

test('debe incrementar la mano del jugador', () => {
    let firstPlayer = new Player('axel')
    
    firstPlayer.addHand(new Card('A', '', 10))
    expect(firstPlayer.handSum).toBe(10)
    firstPlayer.addHand(new Card('J', '', 10))
    expect(firstPlayer.handSum).toBe(20)
})

test('debe incrementar la mano del los jugadores', () => {
    let firstPlayer = new Player('axel')
    let secondPlayer = new Player('ted')
    
    firstPlayer.addHandSum(10)
    secondPlayer.addHandSum(5)
    expect(firstPlayer.handSum).toBe(10)
    expect(secondPlayer.handSum).toBe(5)
})

test('debe incrementar los puntos del jugador', () => {
    let firstPlayer = new Player('axel')
    
    firstPlayer.addPoints(10)
    expect(firstPlayer.points).toBe(10)
})

test('debe resetear la mano del jugador', () => {
    let firstPlayer = new Player('axel')
    
    firstPlayer.addHandSum(10)
    expect(firstPlayer.handSum).toBe(10)
    firstPlayer.resetHand()
    expect(firstPlayer.handSum).toBe(0)
})