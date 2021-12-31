export const useCartItems = () => useState('cartItems', () => [])
export const useCartState = () => useState<boolean>('cartState', () => false)

