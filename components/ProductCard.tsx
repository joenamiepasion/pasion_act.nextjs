import { CSSProperties } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

const styles = {
  card: {
    width: '280px',
    border: '2px solid #d4af7f',
    borderRadius: '12px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#fffaf0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  } as CSSProperties,

  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  } as CSSProperties,

  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#5e3c00',
    marginBottom: '8px',
  } as CSSProperties,

  description: {
    fontSize: '14px',
    color: '#6b4e1d',
    marginBottom: '12px',
  } as CSSProperties,

  price: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#a0522d',
    marginBottom: '8px',
  } as CSSProperties,

  stock: {
    fontSize: '13px',
    color: '#8b4513',
  } as CSSProperties,
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.name}>{product.name}</div>
      <div style={styles.description}>{product.description}</div>
      <div style={styles.price}>₱ {product.price.toFixed(2)} per sack</div>
      <div style={styles.stock}>
  {product.stock > 0 ? `${product.stock} sacks available` : 'Out of stock'}
</div>

    </div>
  );
}