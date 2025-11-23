import React from 'react';
const FALLBACK_IMG = '/mnt/data/ddf34c62-3438-42df-9135-57be7a230be0.png';

export default function BookList({list}) {
  return (
    <>
      <div className="row g-4">
        {list.map((b) => {
          return (
            <div key={b.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ height: 160, overflow: 'hidden' }}
                >
                  <img
                    src={b.picture}
                    alt={b.name}
                    className="img-fluid"
                    style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                    loading="lazy"
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">{b.name}</h5>

                  <p className="card-text text-truncate mb-3" title={b.description}>
                    {b.description || <span className="text-muted">No description</span>}
                  </p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <strong>₹{Number(b.price).toFixed(2)}</strong>
                    </div>
                    <div>
                      <small className="text-muted">Qty: {b.quantity}</small>
                    </div>
                  </div>
                </div>

                <div className="card-footer bg-transparent border-0 py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">ID: {b.id}</small>
                    <button className="btn btn-sm btn-outline-primary">View</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
