// Initial database with 20 pre-populated products
const initialProducts = [
    {
        id: 1,
        name: "Stainless Steel Anchor Chain 10mm",
        category: "Anchoring",
        price: 189.99,
        quantity: 15
    },
    {
        id: 2,
        name: "Marine VHF Radio Antenna",
        category: "Electronics",
        price: 79.99,
        quantity: 22
    },
    {
        id: 3,
        name: "Bilge Pump 12V",
        category: "Plumbing",
        price: 145.50,
        quantity: 18
    },
    {
        id: 4,
        name: "Stainless Steel Bow Shackle",
        category: "Rigging",
        price: 24.99,
        quantity: 65
    },
    {
        id: 5,
        name: "LED Navigation Light Set",
        category: "Lighting",
        price: 129.99,
        quantity: 12
    },
    {
        id: 6,
        name: "Winch Handle 10 inch",
        category: "Deck Hardware",
        price: 68.00,
        quantity: 30
    },
    {
        id: 7,
        name: "Marine Battery 12V 100Ah",
        category: "Electrical",
        price: 299.99,
        quantity: 8
    },
    {
        id: 8,
        name: "Boat Fender 8x20 inch",
        category: "Mooring",
        price: 35.99,
        quantity: 45
    },
    {
        id: 9,
        name: "Mainsheet Block 40mm",
        category: "Rigging",
        price: 54.99,
        quantity: 28
    },
    {
        id: 10,
        name: "Deck Cleat 6 inch",
        category: "Deck Hardware",
        price: 42.50,
        quantity: 38
    },
    {
        id: 11,
        name: "Sailing Rope 12mm x 50m",
        category: "Rigging",
        price: 89.99,
        quantity: 20
    },
    {
        id: 12,
        name: "Fuel Filter Element",
        category: "Engine",
        price: 28.99,
        quantity: 55
    },
    {
        id: 13,
        name: "Sail Repair Tape White",
        category: "Sails",
        price: 18.99,
        quantity: 42
    },
    {
        id: 14,
        name: "Propeller 3-Blade 14x10",
        category: "Engine",
        price: 425.00,
        quantity: 5
    },
    {
        id: 15,
        name: "Through-Hull Fitting Bronze",
        category: "Plumbing",
        price: 67.99,
        quantity: 16
    },
    {
        id: 16,
        name: "Compass Marine Flush Mount",
        category: "Navigation",
        price: 156.00,
        quantity: 11
    },
    {
        id: 17,
        name: "Lifeline Cable 5mm x 10m",
        category: "Safety",
        price: 95.99,
        quantity: 24
    },
    {
        id: 18,
        name: "Turnbuckle Stainless Steel",
        category: "Rigging",
        price: 32.50,
        quantity: 48
    },
    {
        id: 19,
        name: "Seacock Ball Valve 1.5 inch",
        category: "Plumbing",
        price: 98.99,
        quantity: 14
    },
    {
        id: 20,
        name: "Solar Panel 100W Marine",
        category: "Electrical",
        price: 249.99,
        quantity: 9
    }
];

// Initialize database in localStorage
function initializeDatabase() {
    const existingData = localStorage.getItem('inventoryDatabase');
    if (!existingData) {
        localStorage.setItem('inventoryDatabase', JSON.stringify(initialProducts));
        console.log('Database initialized with 20 products');
    }
}

// Initialize the database when the script loads
initializeDatabase();
