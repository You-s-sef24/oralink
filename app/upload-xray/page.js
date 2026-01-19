import Header from "../Components/Header";
import XrayUploadBox from "../Components/XrayUploadBox";
import XrayInfo from "../Components/Xray Info";

export default function UploadXrayPage() {
    return (
        <div className="container-fluid pt-5">
            <Header title={'X-ray AI Diagnosis'} desc={'Upload dental X-rays for automated AI analysis'} />

            <hr className="m-0" />

            <XrayUploadBox />

            <XrayInfo />
        </div>
    );
}