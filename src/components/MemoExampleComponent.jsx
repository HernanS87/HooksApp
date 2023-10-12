import { useEffect, useMemo } from "react";
import { useState } from "react";

export const MemoExampleComponent = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const [listNum, setListNum] = useState([
    2, 3, 6, 4, 5, 9, 8, 7, 8, 9, 7, 5, 4,
  ]);

  const useGetCalculo = () =>
    useMemo(() => {
      console.log("Calculando");
      return listNum.reduce((a, b) => a * b);
    }, []);

  const [show, setShow] = useState(true);

  const { data, isLoading, errors } = state;

  const getFetch = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    console.log("UseEffect");
    getFetch();
  }, []);

  return (
    <>
      <div className="d-flex">
        <h1>Lista de usuarios</h1>
        <button className="btn btn-primary mx-3" onClick={() => setShow(!show)}>
          {show ? "Show" : "Hide"}
        </button>
      </div>
      <p>{useGetCalculo(listNum)}</p>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : errors ? (
        <h4>Ha ocurrido un error: {errors}</h4>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

//CONCLUSIÓN:
// EL esLint me indica que use memo se utiliza sobre hooks o custom hooks o sobre componentes de react pero no directamente sobre una función por eso cuando coloco useGetCalculo el error desaparece

// A mi parecer toda función debe ejecutarse una sola vez al inicio del componente o cuando una dependencia cambie es más simple utilizar useEffect pero tal vez para no tener tantos algú dia sea necesario. Digo esto porque si la funcion se implementa como en este ejemplo se ejecuta cada vez que se pinta el componente cuando lo correcto seria colocar un estado o constante en ese lugar

// Mientras presionaba el boton jamas se volvio a ejecutar el fetch
