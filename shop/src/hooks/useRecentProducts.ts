import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const useRecentProducts = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('recentProducts');
    if (storedProducts) {
      setRecentProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addRecentProduct = (product: Product) => {
    setRecentProducts((prevProducts) => {
      // 이미 존재하는 상품은 제거
      const filteredProducts = prevProducts.filter((p) => p.id !== product.id);
      // 새로운 상품을 맨 앞에 추가
      const newProducts = [product, ...filteredProducts];
      // 최대 10개까지만 저장
      const limitedProducts = newProducts.slice(0, 10);
      localStorage.setItem('recentProducts', JSON.stringify(limitedProducts));
      return limitedProducts;
    });
  };

  return { recentProducts, addRecentProduct };
};
