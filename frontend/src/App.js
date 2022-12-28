import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">Waroeng</a>
      </header>
      <main>
        <h1>Product</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.gambar} alt={product.nama} />
              </a>
              {console.log(product.gambar)}
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <h2>{product.nama}</h2>
                </a>
                <div>
                  <strong>Rp.{product.harga}</strong>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
