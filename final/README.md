# Echo Coffee Shop Website
Our site provides a comprehensive experience where you can browse our menu, order your favorite coffee beans, and learn more about the story behind Echo Coffee. For any purchases or to add items to your cart, users are required to log in.

# Page Summary
* **Home Page**: Explore our address and open times.
* **Menu Page**: Browse our selection of coffee and food products.
* **Shop Page**: Select and order coffee beans, and use the sort selection to view products based on price. 
* **About Page**: Learn more about the story behind Echo Coffee. Choose to view the content in English, Hindi, Chinese, or Spanish.
* **Login Page**: A login form in order to save / view your cart and checkout.
* **Checkout Page**: Complete your purchase securely.

# Accessibility Feature
* **Skip to Main Content Button**: Provides a way to bypass the navigation and jump directly to the main content of each page.

# Responsive Design
* **Screen Widths**: Our website is optimized for various screen sizes, ensuring a consistent and usable layout from small mobile devices (360px) to standard desktop screens (1200px).
* **Font Size**: Text scales appropriately within this range to ensure readability and accessibility at standard font sizes.
* **Hamburger Menu**: Below a viewport width of 44rem, the standard navigation menu converts to a hamburger menu icon to maximize space and maintain usability on smaller screens.

# Input Validation
## Login Page 
* **Username Requirements**: Must be entered and can only contain letters and digits.
* **Password Check: Entering**: "dog" as a password will result in an error.
* **Form Submission**: The form can only be submitted once all errors are corrected.
* **Success Login**: Upon successful login, users are redirected to the Shop page.

## Shop Page
* **Initial Display Message**: Asks users to log in to add items to their cart or view their cart.
* **Quantity Input**: Only digits are allowed. Characters other than digits are prevented from entry.
* **Quantity Limits**: The maximum allowable quantity is 999. Exceeding this limit triggers an error message.
* **Add to Cart Button**: Disabled when the quantity is zero or exceeds the maximum allowed.
* **Decrease Button**: Disabled if the current quantity is zero.
* **Quantity Adjustment**: Users can change the quantity using "+" and "-" buttons.

## Checkout Page 
* **Field Requirements**: All fields are required.
* **Digit-Only Fields**: Phone and Card Number fields must contain only digits.
* **Email Confirmation**: The 'Confirm Email' field must match the 'Email' field.
* **Address Fields**: The Billing Address is read-only if it matches the Shipping Address.
* **Form Submission**: The form can only be submitted once all errors are corrected.
* **Success Checkout**: Upon successful checkout, the user's cart is be empty and display a successful message.

# Invalid Session
* **Shop Page**: Navigate the user to Login Page if user try to Add to Cart.
* **Checkout Page**: Navigate the user to Login Page if user try to Checkout.

# Image and Media Credits 
## unsplash.com
* **[License](https://unsplash.com/license): All images can be downloaded and used for free. Commercial and non-commercial purposes** 
* pig-logo: https://unsplash.com/photos/pig-face-painting-on-wall-DsDTN8KyjKU 
* coffee-and-book: https://unsplash.com/photos/black-ballpoint-pen-on-white-ruled-paper-sheet-vD9Gb_H7RR8
* store: https://unsplash.com/photos/man-sitting-on-bar-chair-in-front-man-at-cafe-9Y8vxVQN4o4
* menu-background: https://unsplash.com/photos/a-pile-of-coffee-beans-sitting-on-top-of-a-table-pbADWb2YAQQ
* cameroon: https://unsplash.com/photos/person-holding-trader-joes-cameroon-mount-oku-paper-GUdiuHpmlm4
* raees-blend: https://unsplash.com/photos/a-bag-of-coffee-sitting-on-top-of-a-table-g74BFhN6Bos
* law-breakers: https://unsplash.com/photos/a-bag-of-law-breakers-coffee-sitting-on-a-counter-0jaAN7htIT0
* primo-passo: https://unsplash.com/photos/three-brown-primo-passo-coffee-co-packs-KRedbshBxEk
* krank: https://unsplash.com/photos/person-holding-black-and-brown-pack-LFDrMXKRfyc
* cultivate: https://unsplash.com/photos/a-bag-of-coffee-sitting-on-top-of-a-wooden-table-DLPN3DYvDzY
* french-truck: https://unsplash.com/photos/yellow-french-truck-coffee-pack-_uncFvtOC-4

## wikipedia.org
* **[Licence](https://en.wikipedia.org/wiki/Wikipedia:Basic_copyright_issues): Free content under specific licensing**
* sanmao: https://en.wikipedia.org/wiki/File:SanMaophoto.jpg

## css.gg
* **[License](https://css.gg/doc/licence): The MIT License (MIT)**
* user icon: https://unpkg.com/css.gg@2.0.0/icons/css/user.css
* logout icon: https://unpkg.com/css.gg@2.0.0/icons/css/log-out.css
* menu icon: https://unpkg.com/css.gg@2.0.0/icons/css/menu.css