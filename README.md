# SoilVita Fertilizers Website

A complete static e-commerce website for SoilVita Fertilizers, built with HTML, CSS, and JavaScript. Features multi-language support (English, Hindi, Gujarati) and is ready for free hosting on GitHub Pages.

## Features

- **Homepage**: Hero banner, featured products, why choose section
- **Shop Page**: All products listing with add to cart
- **Product Detail**: Full product view with related products
- **Shopping Cart**: Add/remove items, checkout form
- **About & Contact**: Company info and contact form
- **Multi-language**: Switch between EN/HI/GU
- **Responsive Design**: Mobile-first approach
- **LocalStorage**: Cart and language persistence

## File Structure

```
/
├── index2.html          # Homepage
├── shop2.html           # Product listing
├── product2.html        # Single product view
├── cart2.html           # Cart & checkout
├── about2.html          # About page
├── contact2.html        # Contact page
├── css2/
│   └── style2.css       # Main stylesheet
├── js2/
│   ├── products2.js     # Product data
│   ├── i18n2.js         # Translations
│   └── script2.js       # Main JavaScript
├── images/              # Product and other images
└── README.md            # This file
```

## Hosting on GitHub Pages

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it `soilvita-fertilizers` or similar

2. **Upload Files**:
   - Upload all files from this project to your repository
   - Make sure `index2.html` is in the root

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Set Branch to `main` and folder to `/ (root)`
   - **Important**: Set custom domain or use default, but note that GitHub Pages serves `index.html` by default. Since our main file is `index2.html`, you may need to:
     - Rename `index2.html` to `index.html`, or
     - In Pages settings, set the entry point if supported, or
     - Use a redirect in `index.html` to `index2.html`

4. **Access Your Site**:
   - Your site will be available at `https://yourusername.github.io/repository-name/`

## Customization

### Adding/Editing Products

Edit `js2/products2.js`:
- Add new products to the `products` array
- Include translations for name, shortDesc, longDesc, directions
- Add corresponding images to `images/` folder

### Updating Translations

Edit `js2/i18n2.js`:
- Add new keys to the `translations` object
- Update existing text for all languages

### Adding Images

- Place product images in `images/` folder
- Update image paths in `products2.js`
- For hero/about images, add `hero.jpg`, `about.jpg` etc.

### Styling Changes

Edit `css2/style2.css`:
- Modify colors, fonts, layouts
- Green theme color: `#3B8B3B`

## Form Setup

### Contact Forms (Email Integration)

Both the inquiry form (homepage) and contact form use direct email integration:

- **Email Address**: 9e14het.kesh@gmail.com
- **Method**: `mailto:` protocol opens user's email client
- **Pre-filled**: Subject and body are automatically populated

No external services required - works directly with user's email client.

### EmailJS Alternative

For EmailJS:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Replace form action with EmailJS integration in `js2/script2.js`

## Payment Integration

The checkout process redirects to WhatsApp with pre-filled order details for manual payment processing.

### WhatsApp Integration

- The checkout form collects customer details and redirects to WhatsApp
- Auto-generated message includes order items, quantities, prices, and totals
- Payment is handled manually via WhatsApp conversation

### To Customize WhatsApp Number

Edit `js2/script2.js` in the `checkout()` function:
- Replace `919876543210` with your actual WhatsApp business number (without +)
- Example: `https://wa.me/919876543210?text=${encodedMessage}`

### Optional Razorpay Integration

To add Razorpay payment links:
- Create a Razorpay account
- Generate payment links for products
- Add links in product details or checkout
- Example: `<a href="https://rzp.io/l/payment-link" class="btn">Pay Now</a>`

## Local Development

Open any `.html` file in your browser to test locally. No server required since it's static.

## Social Media Links

- **Instagram**: https://www.instagram.com/het_impex
- **Facebook**: https://www.facebook.com/het.chovatiya
- **YouTube**: https://www.youtube.com

## Performance Optimizations

### 🚀 **Shop Page Loading Speed**
- **Instant Loading**: All products load immediately without delays
- **No Pagination**: All products displayed at once for instant access
- **Optimized Rendering**: Direct DOM manipulation for maximum speed
- **Real-time Updates**: New products appear instantly after admin addition
- **Smooth Performance**: No loading spinners or waiting times

### 📊 **Performance Features**
- **IntersectionObserver**: Modern lazy loading API
- **Fallback Support**: Works on older browsers without IntersectionObserver
- **Image Preloading**: Smooth fade-in transitions
- **Memory Efficient**: Only loads visible content initially

## Admin Features

### 🔐 **Secure Admin Dashboard**
- **Password Protection**: Access code `8866753519`
- **Session Management**: 24-hour auto-logout
- **Product Management**: Add, edit, delete products
- **Category Management**: Organize products by categories
- **Persistent Storage**: Products saved to browser localStorage

### 📦 **Product Management**
- **Add Products**: Comprehensive form with all fertilizer details
- **Edit Products**: Modify existing product information
- **Delete Products**: Remove products with confirmation
- **Image URLs**: Enter image URLs for product photos
- **Category Assignment**: Organize by fertilizer types
- **Persistent Storage**: Products saved to browser localStorage

### 💾 **Data Persistence**
- **LocalStorage**: Products persist between sessions
- **Sequential IDs**: New products get IDs like 107, 108, 109... (auto-incremented)
- **Real-time Updates**: Products appear in shop immediately after adding
- **Cross-tab Sync**: Changes reflect across all browser tabs instantly
- **Data Merging**: Combines default + admin products seamlessly
- **Backup Safety**: No data loss on page refresh

## Technologies Used

- **HTML5**: Structure
- **CSS3**: Styling with Flexbox/Grid, Animations
- **JavaScript (ES6)**: Functionality, Performance Optimizations
- **LocalStorage**: Data persistence for admin products
- **Font Awesome**: Icons
- **Google Fonts**: Poppins & Roboto
- **IntersectionObserver**: Lazy loading API
- **External Images**: Product images hosted on Google Images

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive

## License

This project is open source. Feel free to use and modify.

## Support

For issues or questions, check the code comments or create an issue in the repository.