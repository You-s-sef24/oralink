export default function Colors() {
  const categories = [
    {
      label: "Severe",
      color: "danger",
      text: "Red",
      desc: "Requires immediate clinical intervention.",
    },
    {
      label: "Moderate",
      color: "warning",
      text: "Yellow",
      desc: "Significant progression; needs monitoring.",
    },
    {
      label: "Mild",
      color: "primary",
      text: "Blue",
      desc: "Early signs detected; routine care.",
    },
  ];

  return (
    <div
      className="card border-0 shadow-sm overflow-hidden"
      style={{
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="card-header bg-transparent border-0 pt-4 px-4">
        <h6
          className="text-uppercase fw-bold text-secondary small mb-0"
          style={{ letterSpacing: "1px" }}
        >
          <i className="bi bi-info-circle me-2"></i>Analysis{" "}
        </h6>
      </div>

      <div className="card-body p-4">
        <div className="row g-3">
          {categories.map((item, idx) => (
            <div key={idx} className="col-12">
              <div className="d-flex align-items-center p-3 rounded-4 border border-light-subtle bg-white shadow-sm hover-translate">
                <div
                  className={`bg-${item.color} rounded-circle`}
                  style={{
                    width: "12px",
                    height: "12px",
                    boxShadow: `0 0 12px var(--bs-${item.color})`,
                  }}
                ></div>

                <div className="ms-3 flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-dark">{item.label}</span>
                    <span
                      className={`badge rounded-pill bg-${item.color}-subtle text-${item.color} border border-${item.color} small px-2`}
                    >
                      {item.text}
                    </span>
                  </div>
                  <p className="text-muted small mb-0 mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
                .hover-translate {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    cursor: default;
                }
                .hover-translate:hover {
                    transform: translateX(8px);
                    background-color: #f8f9fa !important;
                }
            `}</style>
    </div>
  );
}
