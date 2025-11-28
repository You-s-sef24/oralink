import Header from "../Components/Header";
import UploadBox from "../Components/UploadBox";
import XrayInfo from "../Components/Xray Info";

export default function UploadXrayPage() {
    return (
        <div className="container-fluid pt-5">
            <Header title={'X-ray AI Diagnosis'} desc={'Upload dental X-rays for automated AI analysis'} />

            <hr className="m-0" />

            <UploadBox />

            <XrayInfo />
        </div>
    );
}