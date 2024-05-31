import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Product Listing</title>
        <meta name="description" content="Product Listing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Product Listing</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Product Listing</p>
      </footer>
    </div>
  );
}
