const FormUncontrolled = ({
  products,
  submitters,
  images,
  handleAddProduct,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, submitter } = event.target;

    const submitted = submitters.find((sub) => sub.id === Number (submitter.value));

    const submittedProduct = {
      id: products.length + 1,
      title: title.value,
      description: description.value,
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
        <input type="text" placeholder="Product Title" name="description" />
      </div>

      <div className="field">
        <label>Description</label>

        <input type="text" placeholder="Product Description"></input>
      </div>

      <div className="field">
        <label>Submitted by: </label>

        <select name="submitter">
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

export default FormUncontrolled;
