export default function Spinner() {
  return (
    <>
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '160px' }}>
            <div className="text-center">
                <div className="spinner-border" role="status" aria-hidden="true"></div>
                <div className="mt-2">Loading...</div>
            </div>
        </div>
    </>
  )
}
