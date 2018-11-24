import {Deck} from '../components/Deck';


test('debe crear 52 cartas del mazo', () => {
    let deck = new Deck()
    let sizeDeckStack = deck.deckPoker.getSize()
    expect(sizeDeckStack).toBe(52)
});

