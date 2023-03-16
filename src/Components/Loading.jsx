import React from 'react';

const Loading = () => (
  <div className="text-center">
    <span className="relative flex h-12 w-12 mx-auto">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500" />
    </span>
    <p>Loading...</p>
  </div>
);

export default Loading;
