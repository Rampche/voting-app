import { useState } from "react";

const FormControlled = ({ products, submitters, images, handleAddProduct }) => {
  const initialState = {
    title: "",
    description: "",
    submitter: 1,
  };

  const [product, setProduct] = useState(initialState);

  const { title, description, submitter } = product;

  const handleSubmit = (event) => {
    event.preventDefault();

    const submitted = submitters.find((sub) => sub.id === submitter);

    const submittedProduct = {
      id: products.length + 1,
      title,
      description,
      url: "#",
      votes: 0,
      submitterAvatarUrl: `images/avatars/${submitted.image}`,
      productImageUrl: `images/products/${
        images[Math.floor(Math.random() * images.length)]
      }.png`,
    };


    handleAddProduct(submittedProduct);


  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Title</label>
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(event) =>
            setProduct({ ...product, title: event.target.value })
          }
        />
      </div>

      <div className="field">
        <label>Description</label>

        <input
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(event) =>
            setProduct({ ...product, description: event.target.value })
          }
        ></input>
      </div>

      <div className="field">
        <label>Submitted by: </label>

        <select
          value={submitter}
          onChange={(event) =>
            setProduct({ ...product, submitter: Number(event.target.value) })
          }
        >
          {submitters.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <button className="ui button" type="submit">
        Add Product
      </button>
    </form>
  );
};

export default FormControlled;
