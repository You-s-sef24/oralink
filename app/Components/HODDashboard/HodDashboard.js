import TopStudents from "./TopStudents";
import LowestStudents from "./LowestStudents";
import PassFailChart from "./PassFailChart";
import GradeDistributionChart from "./GradeDistributionChart";
import Overview from "./Overview";

export default function HodDashboard() {
    return (
        <div>
            <h5 className="fw-semibold my-3">Overview</h5>
            <Overview />
            <h5 className="fw-semibold mb-3">Student Performance</h5>
            <div className="row mb-4">
                <div className="col-sm-6">
                    <TopStudents />
                </div>
                <div className="col-sm-6">
                    <LowestStudents />
                </div>
            </div>

            <h5 className="fw-semibold mb-3">Analytics</h5>
            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <PassFailChart />
                </div>
                <div className="col-md-4">
                    <GradeDistributionChart />
                </div>
            </div>
        </div>
    );
}