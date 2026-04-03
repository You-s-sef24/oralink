import AnalysisComplete from "./AnalysisComplete";
import Colors from "./Colors";
import Warning from "./WarningAi";

export default function AIResults({ resultImage }) {
    return (
        <div className="d-flex flex-column gap-3 mt-5">
            {resultImage && (
                <div className="d-flex justify-content-center mb-3">
                    <img
                        src={resultImage}
                        alt="AI Analysis Result"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "420px", objectFit: "contain" }}
                    />
                </div>
            )}

            <AnalysisComplete />
            <Colors />
            <Warning />
        </div>
    );
}