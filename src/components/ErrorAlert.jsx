import React, { useState } from 'react';

export default function ErrorAlert({ error }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Failed to load data.</strong>
      <div className="mt-1">{error}</div>
      <button type="button" className="btn-close" aria-label="Close" onClick={() => setVisible(false)} />
    </div>
  );
}
