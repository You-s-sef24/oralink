import Header from "../Components/General/Header";
import XrayUploadBox from "../Components/AI/XrayUploadBox";
import XrayInfo from "../Components/AI/Xray Info";

export default function UploadXrayPage() {
    return (
        <div className="container-fluid">
            <Header title={'X-ray AI Diagnosis'} desc={'Upload dental X-rays for automated AI analysis'} />

            <hr className="m-0" />

            <XrayUploadBox />

            <XrayInfo />
        </div>
    );
}