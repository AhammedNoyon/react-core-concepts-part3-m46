const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="w-3/4 mx-auto ">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          className="border"
          placeholder="enter your name"
          type="text"
          name="name"
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="border"
          placeholder="enter your email"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          className="border"
          placeholder="enter your password"
        />
        <br />
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
