import React, { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  return (
    <div style={{ marginTop: "200px" }}>
      <div className="sweet-loading text-center">
        <PuffLoader color="blue" loading={loading} css="" size={80} />
      </div>
    </div>
  );
}

export default Loader;
