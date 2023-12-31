import React from "react";

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
