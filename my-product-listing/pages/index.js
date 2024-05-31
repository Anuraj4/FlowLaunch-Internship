import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Home = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">${product.price}</p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-64 object-cover mb-4" />
              <p className="text-gray-700 mb-4">${selectedProduct.price}</p>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const initialProducts = await res.json();
  return {
    props: {
      initialProducts,
    },
  };
}

export default Home;
