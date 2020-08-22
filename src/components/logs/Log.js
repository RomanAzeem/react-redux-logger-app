import React, { Fragment, useEffect, useState } from 'react';

const Log = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };
  if (loading) {
    return <h4>Loading....</h4>;
  } else {
    return (
      <Fragment>
        {!loading && logs.length === 0 ? (
          <p>No Logs to show...</p>
        ) : (
          logs.map((log) => {
            return <p>{log.message}</p>;
          })
        )}
      </Fragment>
    );
  }
};
export default Log;
