import { CSSProperties } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const pigFeeds = [
    {
      id: 'F001',
      name: 'Starter Pig Feed',
      description: 'High-protein feed for piglets aged 1–3 months.',
      price: 899.99,
      stock: 40,
      image: '/images/starter-porci-2066.jpg',
    },
    {
      id: 'F002',
      name: 'Grower Pig Feed',
      description: 'Balanced feed for growing pigs aged 4–6 months.',
      price: 1099.0,
      stock: 30,
      image: '/images/grower.jpg',
    },
    {
      id: 'F003',
      name: 'Finisher Pig Feed',
      description: 'Energy-rich feed for pigs close to market weight.',
      price: 1299.0,
      stock: 20,
      image: '/images/finisher.jpg',
    },
    {
      id: 'F004',
      name: 'Breeder Pig Feed',
      description: 'Special formula to support sows and boars.',
      price: 1399.0,
      stock: 15,
      image: '/images/breeder.jpg',
    },
    {
      id: 'F005',
      name: 'Organic Pig Feed',
      description: 'Chemical-free, all-natural ingredients for healthy pigs.',
      price: 1499.0,
      stock: 25,
      image: '/images/organic.jpg',
    },
    {
      id: 'F006',
      name: 'Medicated Pig Feed',
      description: 'Formulated with vitamins and antibiotics for sick pigs.',
      price: 1599.0,
      stock: 10,
      image: '/images/Medicated Pig Feed.jpg',
    },
    {
      id: 'F007',
      name: 'Weaner Pig Feed',
      description: 'Nutritious feed for pigs recently weaned from mother.',
      price: 950.0,
      stock: 35,
      image: '/images/Weaner.webp',
    },
    {
      id: 'F008',
      name: 'Lactating Sow Feed',
      description: 'Supports milk production in nursing sows.',
      price: 1450.0,
      stock: 18,
      image: '/images/Lactating Sow Feed.png',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Pig Feed Products</h1>
      <div style={styles.cardContainer}>
        {pigFeeds.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};