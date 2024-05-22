import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, imgSrc: '/assets/img/img-1.jpg', type: 'Wheel', name: 'Two Color Car Wheel', rate: '$602.00', desc: 'A stylish and durable two-color car wheel.', sales: 200, createdAt: "2024-05-01T10:00:00Z" },
        { id: 2, imgSrc: '/assets/img/img-2.jpg', type: 'Engine Accessories', name: 'Alternator Engine Car', rate: '$38.00', desc: 'High-performance alternator for car engines.', sales: 150, createdAt: "2024-05-02T10:00:00Z" },
        { id: 3, imgSrc: '/assets/img/img-3.jpg', type: 'Body Parts', name: 'Car Body Parts', rate: '$122.00', desc: 'Reliable and durable car body parts.', sales: 300, createdAt: "2024-05-03T10:00:00Z" },
        { id: 4, imgSrc: '/assets/img/img-4.jpg', type: 'Repaired Parts', name: 'Repaired Car Engine', rate: '$241.00', desc: 'Expertly repaired car engine for optimal performance.', sales: 100, createdAt: "2024-05-04T10:00:00Z" },
        { id: 5, imgSrc: '/assets/img/img-5.jpg', type: 'Brakes', name: 'Brakes 1', rate: '$1202.00', desc: 'High-quality brake system for enhanced safety.', sales: 400, createdAt: "2024-05-05T10:00:00Z" },
        { id: 6, imgSrc: '/assets/img/img-5-1.jpg', type: 'Brakes', name: 'Brakes 2', rate: '$902.00', desc: 'Efficient and reliable braking system.', sales: 350, createdAt: "2024-05-06T10:00:00Z" },
        { id: 7, imgSrc: '/assets/img/img-6.jpg', type: 'Car Parts', name: 'Car Seat Cushion-1', rate: '$890.00', desc: 'Comfortable and stylish car seat cushion.', sales: 250, createdAt: "2024-05-07T10:00:00Z" },
        { id: 8, imgSrc: '/assets/img/img-6-1.jpg', type: 'Car Parts', name: 'Car Seat Cushion-2', rate: '$900.00', desc: 'Luxurious car seat cushion for added comfort.', sales: 275, createdAt: "2024-05-08T10:00:00Z" },
        { id: 9, imgSrc: '/assets/img/img-7.jpg', type: 'Car Parts', name: 'Car Steering', rate: '$122.00', desc: 'Precision car steering for smooth handling.', sales: 225, createdAt: "2024-05-09T10:00:00Z" },
        { id: 10, imgSrc: '/assets/img/img-1.jpg', type: 'Wheel', name: 'Two Color Car Wheel - Red', rate: '$612.00', desc: 'A red variant of the stylish and durable two-color car wheel.', sales: 210, createdAt: "2024-05-10T10:00:00Z" },
        { id: 11, imgSrc: '/assets/img/img-2.jpg', type: 'Engine Accessories', name: 'Car Engine Starter', rate: '$48.00', desc: 'Reliable car engine starter for cold mornings.', sales: 160, createdAt: "2024-05-11T10:00:00Z" },
        { id: 12, imgSrc: '/assets/img/img-3.jpg', type: 'Body Parts', name: 'Car Door Handle', rate: '$32.00', desc: 'Durable car door handle, easy to install.', sales: 310, createdAt: "2024-05-12T10:00:00Z" },
        { id: 13, imgSrc: '/assets/img/img-4.jpg', type: 'Repaired Parts', name: 'Repaired Gearbox', rate: '$441.00', desc: 'Repaired gearbox for smooth transmission.', sales: 110, createdAt: "2024-05-13T10:00:00Z" },
        { id: 14, imgSrc: '/assets/img/img-5.jpg', type: 'Brakes', name: 'Hydraulic Brakes', rate: '$1302.00', desc: 'Hydraulic brake system for advanced safety.', sales: 410, createdAt: "2024-05-14T10:00:00Z" },
        { id: 15, imgSrc: '/assets/img/img-5-1.jpg', type: 'Brakes', name: 'Ceramic Brakes', rate: '$1002.00', desc: 'Ceramic brakes for high-performance vehicles.', sales: 360, createdAt: "2024-05-15T10:00:00Z" },
        { id: 16, imgSrc: '/assets/img/img-6.jpg', type: 'Car Parts', name: 'Leather Seat Cushion-1', rate: '$980.00', desc: 'Premium leather car seat cushion.', sales: 260, createdAt: "2024-05-16T10:00:00Z" },
        { id: 17, imgSrc: '/assets/img/img-6-1.jpg', type: 'Car Parts', name: 'Leather Seat Cushion-2', rate: '$1000.00', desc: 'Luxurious leather car seat cushion.', sales: 285, createdAt: "2024-05-17T10:00:00Z" },
        { id: 18, imgSrc: '/assets/img/img-7.jpg', type: 'Car Parts', name: 'Sport Steering Wheel', rate: '$222.00', desc: 'Sport steering wheel for high control.', sales: 235, createdAt: "2024-05-18T10:00:00Z" },
        { id: 19, imgSrc: '/assets/img/img-1.jpg', type: 'Wheel', name: 'Black Car Wheel', rate: '$602.00', desc: 'A stylish and durable black car wheel.', sales: 220, createdAt: "2024-05-19T10:00:00Z" },
        { id: 20, imgSrc: '/assets/img/img-2.jpg', type: 'Engine Accessories', name: 'Car Turbo Charger', rate: '$150.00', desc: 'High-performance turbo charger for car engines.', sales: 170, createdAt: "2024-05-20T10:00:00Z" },
        { id: 21, imgSrc: '/assets/img/img-3.jpg', type: 'Body Parts', name: 'Car Fender', rate: '$200.00', desc: 'Durable car fender, easy to install.', sales: 320, createdAt: "2024-05-21T10:00:00Z" },
        { id: 22, imgSrc: '/assets/img/img-4.jpg', type: 'Repaired Parts', name: 'Repaired Transmission', rate: '$541.00', desc: 'Repaired transmission for optimal performance.', sales: 120, createdAt: "2024-05-22T10:00:00Z" },
        { id: 23, imgSrc: '/assets/img/img-5.jpg', type: 'Brakes', name: 'Disc Brakes', rate: '$1402.00', desc: 'Disc brake system for superior safety.', sales: 420, createdAt: "2024-05-23T10:00:00Z" },
        { id: 24, imgSrc: '/assets/img/img-5-1.jpg', type: 'Brakes', name: 'ABS Brakes', rate: '$1102.00', desc: 'ABS brakes for advanced safety.', sales: 370, createdAt: "2024-05-24T10:00:00Z" },
        { id: 25, imgSrc: '/assets/img/img-6.jpg', type: 'Car Parts', name: 'Heated Seat Cushion-1', rate: '$990.00', desc: 'Heated car seat cushion for winter comfort.', sales: 270, createdAt: "2024-05-25T10:00:00Z" },
        { id: 26, imgSrc: '/assets/img/img-6-1.jpg', type: 'Car Parts', name: 'Heated Seat Cushion-2', rate: '$1010.00', desc: 'Luxurious heated car seat cushion.', sales: 295, createdAt: "2024-05-26T10:00:00Z" },
        { id: 27, imgSrc: '/assets/img/img-7.jpg', type: 'Car Parts', name: 'Adjustable Steering Wheel', rate: '$232.00', desc: 'Adjustable steering wheel for personalized control.', sales: 245, createdAt: "2024-05-27T10:00:00Z" },
    ]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };