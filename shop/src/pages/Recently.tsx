import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Recently = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('recentProducts');
    if (storedProducts) {
      setRecentProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">최근 본 상품</h2>
      {recentProducts.length === 0 ? (
        <p className="text-gray-500">최근 본 상품이 없습니다.</p>
      ) : (
        <div className="">
          {recentProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className=" object-cover rounded-md mb-4 w-50 h-50"
              />
              <h5>{product.title}</h5>
              <p className="text-gray-600">₩{product.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recently;
