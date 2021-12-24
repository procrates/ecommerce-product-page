export const useNavState = () => useState<boolean>('navState', () => false)
export const useCartState = () => useState<boolean>('cartState', () => false)

export const useQuantity = () => useState<number>('itemQuantity', () => 1)

export const useCartItems = () => useState('cartItems', () => [])

export const useProducts = () => useState('product', () => [
    {
        id: 1,
        company: 'Sneaker company',
        title: 'Fall Limited Edition Sneakers',
        originalPrice: 250,
        discount: 50,
        price: 125.00,
        description: `These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        thumbnails: [
            '/images/image-product-1-thumbnail.jpg',
            '/images/image-product-2-thumbnail.jpg',
            '/images/image-product-3-thumbnail.jpg',
            '/images/image-product-4-thumbnail.jpg',
        ],
        images: [
            '/images/image-product-1.jpg',
            '/images/image-product-2.jpg',
            '/images/image-product-3.jpg',
            '/images/image-product-4.jpg',]
    }
])

export const useLightboxToggleState = () => useState('lightbox', () => false)