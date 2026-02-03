import AnalysisComplete from "./AnalysisComplete";
import Confidence from "./Confidence";
import KeyFindings from "./KeyFindings";
import Warning from "./WarningAi";

export default function AIResults() {
    return (
        <div className="d-flex flex-column gap-3 mt-5">
            <AnalysisComplete />
            <Confidence />
            <KeyFindings />
            <Warning />
        </div>
    );
}