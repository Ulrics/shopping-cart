import { Link, useRouteError } from "react-router";

function ErrorPage(){
  const error = useRouteError();
  console.error(error);
  
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p><Link to="/">Back Home</Link></p>
    </div>
  );
}

export default ErrorPage;