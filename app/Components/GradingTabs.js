import GradedFiles from "./GradedFiles";
import UngradedFiles from "./UngradedFiles";

export default function GradingTabs({ stats }) {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item w-50" role="presentation">
                    <button
                        className="nav-link active w-100"
                        id="ungradedFiles-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#ungradedFiles"
                        type="button"
                        role="tab"
                        aria-controls="ungradedFiles"
                        aria-selected="true"
                    >
                        Ungraded Files ({stats.ungraded})
                    </button>
                </li>

                <li className="nav-item w-50" role="presentation">
                    <button
                        className="nav-link w-100"
                        id="gradedFiles-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#gradedFiles"
                        type="button"
                        role="tab"
                        aria-controls="gradedFiles"
                        aria-selected="false"
                    >
                        Graded Files ({stats.graded})
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div
                    className="tab-pane fade show active"
                    id="ungradedFiles"
                    role="tabpanel"
                    aria-labelledby="ungradedFiles-tab"
                >
                    <UngradedFiles />
                </div>

                <div
                    className="tab-pane fade"
                    id="gradedFiles"
                    role="tabpanel"
                    aria-labelledby="gradedFiles-tab"
                >
                    <GradedFiles />
                </div>
            </div>
        </div>
    );
}
