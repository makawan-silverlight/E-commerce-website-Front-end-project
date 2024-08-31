import { useRouteError } from "react-router-dom";

interface RouteError {
    data: string;
    error: {
      columnNumber: number;
      fileName: string;
      lineNumber: number;
      message: string;
      stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
    message: string;
  }

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || 'Not Found'}</i>
      </p>
    </div>
  );
}