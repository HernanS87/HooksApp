import { useForm } from "../hooks/useForm";

export const FormComponent = () => {
  const initialState = {
    userName: "",
    password: "",
  };

  const { formState, userName, password, inputOnChange, resetForm } =
    useForm(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    resetForm();
  };

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Usuario
          </label>
          <input
            type="userName"
            className="form-control"
            name="userName"
            id="userName"
            value={userName}
            onChange={inputOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={inputOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};
