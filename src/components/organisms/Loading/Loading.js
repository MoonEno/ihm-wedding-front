import React from "react";
import useLoading from "@hooks/useLoading";

function Loading() {
  const [loadingState] = useLoading();

  return (
    <>
      {loadingState.loading && (
        <div className="loading_wrap">
          <div className="loading" />
        </div>
      )}
    </>
  );
}

export default Loading;
