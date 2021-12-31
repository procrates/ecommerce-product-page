# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

#### Desktop

[Main](/screens/Screenshot 2021-12-25 at 22.42.40.png)
[Slider](/screens/Screenshot 2021-12-25 at 22.44.05.png)
[Cart](/screens/Screenshot 2021-12-25 at 22.44.49.png)
[Lightbox](/screens/Screenshot 2021-12-25 at 22.45.26.png)

#### Mobile

[Main](/screens/Screenshot 2021-12-25 at 22.51.23.png)
[Menu](/screens/Screenshot 2021-12-25 at 22.44.05.png)
[Cart](/screens/Screenshot 2021-12-25 at 22.53.57.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](fm-ecommerce-product-page.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
-
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Nuxt 3](https://v3.nuxtjs.org/)
- [Tailwind 3](https://tailwindcss.com/)

### What I learned

This was the first time I`ve completed a Nuxt 3 project. On the way I have read the docs on the new futures of Nuxt 3 and implemented them in this project.

An example is using global states with ![useState](https://v3.nuxtjs.org/docs/usage/state#shared-state)

```js
export const useNavState = () => useState < boolean > ("navState", () => false);
```

I used those state throughout the project to handle changing states on different components. For example updating the cart items reactivly.

I found out that vueUse has a implementation for Nuxt 3. Which I used to handle events where I need to toggle modal state when user clicks outside of the modal.

```js
onClickOutside(cartRef, (e) => {
  cartState.value = !cartState.value;
});
```

I also found some solutions for making a slider by changing the index of an array and using computed property to update the current image.

```js
const currentImage = computed(() => {
  return products.value[0].images[
    Math.abs(currentIndex.value) % products.value[0].images.length
  ];
});

const changeImage = (index) => {
  currentIndex.value = index;
};
```

### Continued development

The one thing that I stuggled with on this project was transitions, mainly the transition between images. Using the <transtion> component I tried to implement sliding effect with no success. I will continue to work on this implementation on future projects and add them to this when I find a working solution.

### Useful resources

- [VueUse](https://vueuse.org/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Website - [Add your name here](https://www.mpm.digital) - Not up and running yet.
- Frontend Mentor - [@procrates](https://www.frontendmentor.io/profile/procrates)
