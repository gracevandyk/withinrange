# Within Range - Boutique E-Commerce Store

A modern e-commerce boutique store built with Next.js, featuring a product catalog, shopping cart, and Stripe payment integration.

## Features

✅ Product catalog with images and descriptions
✅ Shopping cart with add/remove/quantity functionality
✅ Stripe payment processing
✅ Responsive design with Tailwind CSS
✅ Order confirmation page
✅ Easy customization

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/gracevandyk/withinrange.git
cd withinrange
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Sign up or log in to your account
3. Get your API keys from the Dashboard
4. Copy `.env.local.example` to `.env.local`
5. Add your Stripe keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
   STRIPE_SECRET_KEY=sk_test_your_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 4. Install Stripe Package
```bash
npm install stripe
```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
withinrange/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── cart/page.js       # Cart page
│   ├── success/page.js    # Order success page
│   └── api/
│       └── checkout/      # Stripe checkout API
├── components/
│   ├── Header.js          # Navigation header
│   ├── Footer.js          # Footer
│   ├── ProductCard.js     # Product card component
│   ├── CartItem.js        # Cart item component
│   └── CheckoutButton.js  # Checkout button
├── lib/
│   ├── products.js        # Product data
│   └── store.js           # Zustand cart state
└── package.json
```

## Customization

### Add Your Products
Edit `lib/products.js` and update the products array:

```javascript
{
  id: 1,
  name: "Product Name",
  description: "Product description",
  price: 99.99,
  image: "image-url",
  category: "Category"
}
```

### Update Colors
Edit `tailwind.config.js` to customize colors and styles.

### Add Your Logo
Replace "Within Range" text in `components/Header.js` with your logo.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Add environment variables in project settings
5. Deploy!

### Deploy to Other Platforms

- Netlify
- AWS Amplify
- Railway
- Render

## Testing Payments

Use Stripe's test card numbers:
- **Visa**: 4242 4242 4242 4242
- **Mastercard**: 5555 5555 5555 4444
- Any future expiry date and any 3-digit CVC

## Support

For help with Stripe integration, visit [Stripe Documentation](https://stripe.com/docs)

## License

MIT - Feel free to use this for your project!

---

**Happy selling! 🎉**
