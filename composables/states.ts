export const useNav = () => useState('navItems', () => [
    {
        id: 1,
        label: "Collection",
        link: "/collection"
    },
    {
        id: 2,
        label: "Men",
        link: "/men"
    },
    {
        id: 3,
        label: "Woman",
        link: "/woman"
    },
    {
        id: 4,
        label: "About",
        link: "/about"
    },
    {
        id: 5,
        label: "Contact",
        link: "/contact"
    },

])
export const useNavState = () => useState<boolean>('navState', () => false)

export const useLightboxToggleState = () => useState('lightbox', () => false)

export const useQuantity = () => useState<number>('itemQuantity', () => 1)

export const useMsg = () => useState('msg', () => '')


export const useProducts = () => useState('products', () => [
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
            {index: 0, src:'/images/image-product-1.jpg',},
            {index: 1, src:'/images/image-product-2.jpg',},
            {index: 2, src:'/images/image-product-3.jpg',},
            {index: 3, src:'/images/image-product-4.jpg',},
        ]
    }
])

