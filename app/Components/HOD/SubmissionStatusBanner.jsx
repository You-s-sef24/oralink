export default function SubmissionStatusBanner({
  isEnabled,
  deadlineDate,
  loading,
  onToggleClick,
}) {
  if (loading) return null;

  const deadlineFormatted = deadlineDate
    ? new Date(deadlineDate.replace(" ", "T")).toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : null;

  const isPastDeadline =
    deadlineDate && new Date(deadlineDate.replace(" ", "T")) < new Date();

  const statusText = isEnabled
    ? isPastDeadline
      ? "Closed"
      : "Open (with Deadline)"
    : "Open (No Deadline)";

  const themeColor = isPastDeadline ? "danger" : "success";

  return (
    <div
      className={`d-flex align-items-center justify-content-between rounded-3 px-4 py-3 mb-4 border border-${themeColor} bg-${themeColor} bg-opacity-10`}
    >
      <div className="d-flex align-items-center gap-3">
        <div
          className="position-relative d-flex align-items-center justify-content-center"
          style={{ width: 16, height: 16 }}
        >
          <span
            className={`position-absolute rounded-circle bg-${themeColor}`}
            style={{
              width: 16,
              height: 16,
              opacity: 0.3,
              animation: "ping 1.5s infinite",
            }}
          />
          <span
            className={`rounded-circle bg-${themeColor}`}
            style={{ width: 10, height: 10, display: "block" }}
          />
        </div>

        <div>
          <p className={`fw-semibold mb-0 text-${themeColor}`}>
            File Submissions: {statusText}
          </p>
          <p className="text-muted small mb-0">
            {deadlineFormatted ? (
              <>
                Deadline:{" "}
                <strong
                  className={isPastDeadline ? "text-danger" : "text-dark"}
                >
                  {deadlineFormatted}
                </strong>
                {isPastDeadline && " (System Closed)"}
              </>
            ) : (
              "Submissions are open to all students without a time limit."
            )}
          </p>
        </div>
      </div>

      <button
        className={`btn btn-sm btn-outline-${themeColor}`}
        onClick={onToggleClick}
      >
        Adjust Settings
      </button>

      <style>{`@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`}</style>
    </div>
  );
}
