"use client";

import { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";

export default function ViewDSSFile({ fileId }) {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [exporting, setExporting] = useState(false);
  const reportRef = useRef(null);

  useEffect(() => {
    if (!fileId) {
      setLoading(false);
      return;
    }
    const fetchDSSReport = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://oralink.runasp.net/api/dss-reports/$${fileId}`,
        );
        setReport(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load DSS report.");
      } finally {
        setLoading(false);
      }
    };
    fetchDSSReport();
  }, [fileId]);

  const handleExportPDF = async () => {
    if (!report || !reportRef.current) return;
    setExporting(true);

    try {
      const element = reportRef.current;

      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollY: -window.scrollY,
        windowWidth: 1200, // fixed wide viewport so Bootstrap cols render correctly
        windowHeight: element.scrollHeight,
        onclone: (clonedDoc) => {
          // Hide the export button in the cloned doc
          const btn = clonedDoc.querySelector("[data-export-btn]");
          if (btn) btn.style.display = "none";

          const clonedEl = clonedDoc.querySelector("[data-report]");
          if (clonedEl) {
            clonedEl.style.height = "auto";
            clonedEl.style.overflow = "visible";
          }
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const totalPages = Math.ceil(imgHeight / pageHeight);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, -(i * pageHeight), imgWidth, imgHeight);
      }

      pdf.save(`DSS_Report_${report.patient?.name ?? "unknown"}.pdf`);
    } finally {
      setExporting(false);
    }
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50 py-5">
        <div
          className="spinner-border text-primary opacity-50"
          role="status"
        ></div>
      </div>
    );

  if (error)
    return (
      <div className="container py-4">
        <div
          className="alert alert-danger rounded-4 border-0 shadow-sm"
          role="alert"
        >
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </div>
      </div>
    );

  if (!report)
    return (
      <div className="container py-4">
        <div
          className="alert alert-warning rounded-4 border-0 shadow-sm"
          role="alert"
        >
          <i className="bi bi-info-circle-fill me-2"></i>
          No report found for this file.
        </div>
      </div>
    );

  return (
    <div className="container py-4" ref={reportRef} data-report>
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
        <div>
          <h2
            className="fw-bold text-dark mb-1"
            style={{ letterSpacing: "-0.5px" }}
          >
            {report.patient?.name ?? "—"}
          </h2>
          <div className="d-flex align-items-center gap-2 text-muted small">
            <span>
              <i className="bi bi-activity me-1"></i>
              {report.diagnosis?.title ?? "—"}
            </span>
            {/* <span>•</span>
            <span className="badge bg-primary-subtle text-primary fw-semibold rounded-pill px-3">
              AI Generated
            </span> */}
          </div>
        </div>
        <button
          className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
          onClick={handleExportPDF}
          disabled={exporting}
          data-export-btn
        >
          {exporting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              Exporting...
            </>
          ) : (
            <>
              <i className="bi bi-printer me-2"></i>Export Report
            </>
          )}
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-clipboard2-pulse text-primary fs-5"></i>
                <h6
                  className="text-uppercase fw-bold text-muted mb-0"
                  style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
                >
                  Primary Diagnosis
                </h6>
              </div>
              <h4 className="text-dark fw-bold mb-3">
                {report.diagnosis?.title ?? "—"}
              </h4>
              <p className="text-secondary leading-relaxed mb-0">
                {report.diagnosis?.explanation ?? "—"}
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h6
                className="text-uppercase fw-bold text-muted mb-3"
                style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
              >
                Clinical Justification
              </h6>
              <div className="p-3 bg-light rounded-3 border-start border-primary border-3">
                <p className="text-dark small mb-0 lh-lg">
                  {report.justification ?? "—"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
                <i className="bi bi-activity text-primary fs-5"></i>
                <h6
                  className="text-uppercase fw-bold text-muted mb-0"
                  style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
                >
                  Treatment Plan
                </h6>
              </div>

              {Array.isArray(report.recommendedTreatment) &&
              report.recommendedTreatment.length > 0 ? (
                <div className="position-relative ps-2">
                  <div
                    className="position-absolute h-100 border-start border-light"
                    style={{
                      left: "19px",
                      top: "0",
                      borderLeftWidth: "2px !important",
                    }}
                  ></div>
                  <div className="vstack gap-4">
                    {report.recommendedTreatment.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex gap-3 position-relative"
                        style={{ zIndex: 1 }}
                      >
                        <div
                          className="flex-shrink-0 bg-white border border-primary border-2 rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "22px",
                            height: "22px",
                            marginTop: "2px",
                          }}
                        >
                          <div
                            className="bg-primary rounded-circle"
                            style={{ width: "6px", height: "6px" }}
                          ></div>
                        </div>
                        <p className="text-dark fw-medium small mb-0 lh-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-muted small">No treatment plan available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .leading-relaxed {
          line-height: 1.6;
        }
        .min-vh-50 {
          min-height: 50vh;
        }
        .lh-lg {
          line-height: 1.8 !important;
        }
      `}</style>
    </div>
  );
}
