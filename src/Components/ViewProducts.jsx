import { Link, useLoaderData } from "react-router-dom";
import './viewProduct.css';

const ViewProducts = () => {
  const products = useLoaderData();

  console.log(products);

  return (
    <div className="">
      <h1>Products</h1>
      <div className="container">
        {products.data.products.map((product, index) => {
          return (
            <div key={index} className="m-3 g-col-4">
              <div className="card">
                <img
                  className="card-img-top my-2"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="card-body">
                    <div className="both">
                        <h5 className="card-title">{product.name}</h5>
                        <li className="list-group-item text-success ">
                            <b>Price: ${product.price}</b>
                        </li>
                    </div>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-secondary">Category: {product.category}</p>
                  <li className="list-group-item text-danger">Stock: {product.stock}</li>
                  <br />
                  <Link class="btn btn-primary position-absolute bottom-0 end-0 m-2">
                    Add to Card
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewProducts;
