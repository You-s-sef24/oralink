import { useContext, useState } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SubmitModal({ show, isClose, file, setFile }) {
  const { token } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit() {
    try {
      setIsLoading(true);

      await axios.put(
        `https://oralink.runasp.net/api/patient-files/${file.fileId}/Submit`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      setFile((prev) => ({ ...prev, isSubmitted: true }));
      isClose();
      router.replace("/my-files");
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Failed to submit file");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
          onClick={isClose}
        />
      )}

      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        style={{ zIndex: 1045 }}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Submit Patient File</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={isClose}
                disabled={isLoading}
              />
            </div>
            <div className="modal-body">
              <p>
                Are you sure?{" "}
                <small className="text-muted">
                  Once submitted you will not be able to edit it again.
                </small>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={isClose}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="d-flex align-items-center gap-2">
                    <span className="spinner-border spinner-border-sm" />
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}