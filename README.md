# Yacht Spare Parts Inventory

A modern, easy-to-use web application for managing yacht spare parts inventory for sailing yacht retailers.

## Features

- ⛵ **Browse Products**: View all yacht spare parts in a clean, modern grid layout
- ➕ **Add Products**: Easily add new spare parts with name, category, price, and quantity
- 🗑️ **Delete Products**: Remove products from inventory with confirmation
- 📊 **Manage Quantities**: Increase or decrease product quantities with simple +/- buttons
- 🔍 **Search**: Filter products by name or category in real-time
- 📈 **Statistics Dashboard**: Track total products, total items in stock, and low stock alerts
- 💾 **Local Storage**: All data persists in browser's local storage
- 🎨 **Modern Design**: Clean, nautical-themed interface with responsive layout

## Pre-populated Database

The application comes with 20 pre-populated yacht spare parts including:
- Anchoring equipment (anchor chains, shackles, windlass)
- Rigging components (ropes, blocks, turnbuckles)
- Electronics (VHF radio, navigation lights, solar panels)
- Engine parts (propellers, fuel filters)
- Plumbing (bilge pumps, through-hull fittings, seacocks)
- Deck hardware (winches, cleats, fenders)
- Safety equipment (lifeline cables)
- Navigation tools (compasses)

## Getting Started

1. Open `index.html` in a web browser
2. The inventory will automatically load with 20 pre-populated products
3. Start managing your yacht spare parts inventory!

## Usage

### Viewing Products
- All products are displayed in a grid format with key information
- Each product shows: name, category, price, current stock, and stock status (In Stock/Low Stock/Out of Stock)

### Adding New Products
1. Click the "+ Add New Product" button
2. Fill in the product details (name, category, price, quantity)
3. Click "Save Product"

### Managing Quantities
- Click the **+** button to increase quantity by 1
- Click the **-** button to decrease quantity by 1

### Deleting Products
- Click the trash icon (🗑️) on any product card
- Confirm the deletion when prompted

### Searching Products
- Type in the search box to filter products by name or category
- Results update in real-time as you type

## Technical Details

- **Pure JavaScript**: No frameworks required
- **localStorage**: Data persists between sessions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern CSS**: Uses CSS Grid and Flexbox for layout
- **Nautical Theme**: Blue/cyan color scheme perfect for maritime business

## Files

- `index.html` - Main HTML structure
- `styles.css` - Modern, responsive styling with nautical theme
- `database.js` - Initial product database (20 yacht spare parts)
- `app.js` - Application logic and functionality

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- localStorage API
- CSS Grid and Flexbox

## License

This project is open source and available for use.