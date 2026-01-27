import { useContext } from "react";
import ImageUploadBox from "../ImageUploadBox";
import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";

export default function ViewEndodonticsFile() {
    const { isEditing, file, setFile } = useContext(PatientInfoContext);

    const ReadOnlyTextField = ({ label, value }) => (
        <div className="mb-2">
            <label className="form-label fw-semibold">{label}</label>
            <p
                className="border rounded px-2 py-2 bg-light"
                style={{
                    minHeight: "75px",
                    whiteSpace: "pre-wrap",
                    marginBottom: 0
                }}
            >
                {value || "-"}
            </p>
        </div>
    );

    const ReadOnlyCheckboxField = ({ label, checked }) => (
        <div className="mb-2">
            <label className="form-label fw-semibold">{label}</label>
            <p
                className="border rounded px-2 py-2 bg-light"
                style={{
                    minHeight: "40px",
                    marginBottom: 0
                }}
            >
                {checked ? "Yes" : "No"}
            </p>
        </div>
    );


    return (
        isEditing ?
            <div className="bg-white rounded shadow p-3">
                <h1 className="fw-bold text-center text-primary">Department of Endodontics</h1>
                <p className="text-center">Faculty of Dentistry</p>
                <hr />

                {/* Subjectives */}
                <div className="row">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Subjectives</h3>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label mt-2">Nature of Pain</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, natureOfPain: e.target.value } } });
                        }}>
                            <option value={'None'}>None</option>
                            <option value={'Mild'}>Mild</option>
                            <option value={'Moderate'}>Moderate</option>
                            <option value={'Severe'}>Severe</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label mt-2">Onset</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, onset: e.target.value } } });
                        }}>
                            <option value={'Dull'}>Dull</option>
                            <option value={'Sharp'}>Sharp</option>
                            <option value={'Throbbing'}>Throbbing</option>
                            <option value={'Constant'}>Constant</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label mt-2">Location</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, location: e.target.value } } });
                        }}>
                            <option value={'Localized'}>Localized</option>
                            <option value={'Diffuse'}>Diffuse</option>
                            <option value={'Referred'}>Referred</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label mt-2">Radiating to:</label>
                        <input type="text" className="form-control" value={file.departmentData.subjectives.radiatingTo} onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, radiatingTo: e.target.value } } });
                        }} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label mt-2">Duration</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, duration: e.target.value } } });
                        }}>
                            <option value={'Seconds'}>Seconds</option>
                            <option value={'Minutes'}>Minutes</option>
                            <option value={'Hours'}>Hours</option>
                            <option value={'Days'}>Days</option>
                        </select>
                    </div>
                    <div className="col-6 col-md-6">
                        <label className="form-label mt-2">Initiated by:</label>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="intiatedCold"
                                    checked={file.departmentData.subjectives.intiatedByCold}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedByCold: e.target.checked } } })
                                    } />
                                <label htmlFor="intiatedCold">Cold</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="intiatedHeat"
                                    checked={file.departmentData.subjectives.intiatedByHeat}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedByHeat: e.target.checked } } })
                                    } />
                                <label htmlFor="intiatedHeat">Heat</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="intiatedSweets"
                                    checked={file.departmentData.subjectives.intiatedBySweets}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedBySweets: e.target.checked } } })
                                    } />
                                <label htmlFor="intiatedSweets">Sweets</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="spontaneousPain"
                                    checked={file.departmentData.subjectives.intiatedBySpontaneousPain}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedBySpontaneousPain: e.target.checked } } })
                                    } />
                                <label htmlFor="spontaneousPain">Spontaneous</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="palpation"
                                    checked={file.departmentData.subjectives.intiatedByPalpation}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedByPalpation: e.target.checked } } })
                                    } />
                                <label htmlFor="palpation">Palpation</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="mastication"
                                    checked={file.departmentData.subjectives.intiatedByMastication}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedByMastication: e.target.checked } } })
                                    } />
                                <label htmlFor="mastication">Mastication</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="supination"
                                    checked={file.departmentData.subjectives.intiatedBySupination}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, intiatedBySupination: e.target.checked } } })
                                    } />
                                <label htmlFor="supination">Supination</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2">Relieved by:</label>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="cold"
                                    checked={file.departmentData.subjectives.relievedByCold}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, relievedByCold: e.target.checked } } })
                                    } />
                                <label htmlFor="cold">Cold</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="heat"
                                    checked={file.departmentData.subjectives.relievedByHeat}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, relievedByHeat: e.target.checked } } })
                                    } />
                                <label htmlFor="heat">Heat</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="otcMeds"
                                    checked={file.departmentData.subjectives.relievedByOTCMeds}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, relievedByOTCMeds: e.target.checked } } })
                                    } />
                                <label htmlFor="otcMeds">OTC-Meds</label>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="nareMeds"
                                    checked={file.departmentData.subjectives.relievedByNareMeds}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, subjectives: { ...file.departmentData.subjectives, relievedByNareMeds: e.target.checked } } })
                                    } />
                                <label htmlFor="nareMeds">Nare-Meds</label>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Objectives */}
                {/* Extraoral Examination */}
                <div className="row mt-2">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Objectives</h3>
                    </div>
                    <div className="col-12">
                        <h4>Extraoral Examination</h4>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label mt-2">Facial Swelling</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, extraoral: { ...file.departmentData.objectives.extraoral, facialSwelling: e.target.value } } } })
                        }}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label mt-2">Lymph nodes</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, extraoral: { ...file.departmentData.objectives.extraoral, lymphNodes: e.target.value } } } })
                        }}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label mt-2">Swollen</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, extraoral: { ...file.departmentData.objectives.extraoral, swollen: e.target.value } } } })
                        }}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                </div>

                {/* Intraoral Examination */}
                <div className="row mt-4">
                    <div className="col-12">
                        <h4>Intraoral Examination</h4>
                    </div>

                    <div className="col-12 col-md-3">
                        <label className="form-label mt-2">Soft Tissues</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, softTissues: e.target.value } } } })
                        }}>
                            <option value={true}>Yes (WNL)</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-3">
                        <label className="form-label mt-2">Swelling</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, swelling: e.target.value } } } })
                        }}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                            <option value={'Mild'}>Mild</option>
                            <option value={'Moderate'}>Moderate</option>
                            <option value={'Severe'}>Severe</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-3">
                        <label className="form-label mt-2">Sinus Tract</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, sinusTract: e.target.value } } } })
                        }}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                            <option value={'Closed'}>Closed</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-3">
                        <label className="form-label mt-2">Clinical Crown</label>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="clinicalCrownRestoration"
                                    checked={file.departmentData.objectives.intraoral.clinicalCrown.restoration}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, clinicalCrown: { ...file.departmentData.objectives.intraoral.clinicalCrown, restoration: e.target.checked } } } } })
                                    } />
                                <label htmlFor="clinicalCrownRestoration">Restoration</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="clinicalCrownCaries"
                                    checked={file.departmentData.objectives.intraoral.clinicalCrown.caries}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, clinicalCrown: { ...file.departmentData.objectives.intraoral.clinicalCrown, caries: e.target.checked } } } } })
                                    } />
                                <label htmlFor="clinicalCrownCaries">Caries</label>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="clinicalCrownFracture"
                                    checked={file.departmentData.objectives.intraoral.clinicalCrown.fracture}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, clinicalCrown: { ...file.departmentData.objectives.intraoral.clinicalCrown, fracture: e.target.checked } } } } })
                                    } />
                                <label htmlFor="clinicalCrownFracture">Fracture</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="clinicalCrownExposure"
                                    checked={file.departmentData.objectives.intraoral.clinicalCrown.exposure}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, clinicalCrown: { ...file.departmentData.objectives.intraoral.clinicalCrown, exposure: e.target.checked } } } } })
                                    } />
                                <label htmlFor="clinicalCrownExposure">Exposure</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="clinicalCrownDiscoloration"
                                    checked={file.departmentData.objectives.intraoral.clinicalCrown.discoloration}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, objectives: { ...file.departmentData.objectives, intraoral: { ...file.departmentData.objectives.intraoral, clinicalCrown: { ...file.departmentData.objectives.intraoral.clinicalCrown, discoloration: e.target.checked } } } } })
                                    } />
                                <label htmlFor="clinicalCrownDiscoloration">Discoloration</label>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Radiographic Examination */}
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Radiographic Examination</h3>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Crown</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="crownWNL"
                                    checked={file.departmentData.radiographic.crown.wnl}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, crown: { ...file.departmentData.radiographic.crown, wnl: e.target.checked } } } })
                                    } />
                                <label htmlFor="crownWNL">WNL</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="crownCaries"
                                    checked={file.departmentData.radiographic.crown.caries}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, crown: { ...file.departmentData.radiographic.crown, caries: e.target.checked } } } })
                                    } />
                                <label htmlFor="crownCaries">Caries</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="crownRestoration"
                                    checked={file.departmentData.radiographic.crown.restoration}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, crown: { ...file.departmentData.radiographic.crown, restoration: e.target.checked } } } })
                                    } />
                                <label htmlFor="crownRestoration">Restoration</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="crownCrown"
                                    checked={file.departmentData.radiographic.crown.crown}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, crown: { ...file.departmentData.radiographic.crown, crown: e.target.checked } } } })
                                    } />
                                <label htmlFor="crownCrown">Crown</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="denseInDente"
                                    checked={file.departmentData.radiographic.crown.denseInDente}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, crown: { ...file.departmentData.radiographic.crown, denseInDente: e.target.checked } } } })
                                    } />
                                <label htmlFor="denseInDente">Dense In Dente</label>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Pulp Chamber</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="pulpChamberWNL"
                                    checked={file.departmentData.radiographic.pulpChamber.wnl}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, pulpChamber: { ...file.departmentData.radiographic.pulpChamber, wnl: e.target.checked } } } })
                                    } />
                                <label htmlFor="pulpChamberWNL">WNL</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="pulpChamberPulpStone"
                                    checked={file.departmentData.radiographic.pulpChamber.pulpStone}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, pulpChamber: { ...file.departmentData.radiographic.pulpChamber, pulpStone: e.target.checked } } } })
                                    } />
                                <label htmlFor="pulpChamberPulpStone">Pulp Stone</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="pulpChamberExposure"
                                    checked={file.departmentData.radiographic.pulpChamber.exposure}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, pulpChamber: { ...file.departmentData.radiographic.pulpChamber, exposure: e.target.checked } } } })
                                    } />
                                <label htmlFor="pulpChamberExposure">Exposure</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="pulpChamberResorption"
                                    checked={file.departmentData.radiographic.pulpChamber.resorption}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, pulpChamber: { ...file.departmentData.radiographic.pulpChamber, resorption: e.target.checked } } } })
                                    } />
                                <label htmlFor="pulpChamberResorption">Resorption</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="pulpChamberPerforation"
                                    checked={file.departmentData.radiographic.pulpChamber.perforation}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, pulpChamber: { ...file.departmentData.radiographic.pulpChamber, perforation: e.target.checked } } } })
                                    } />
                                <label htmlFor="pulpChamberPerforation">Perforation</label>
                            </div>

                        </div>


                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Roots</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsWNL"
                                    checked={file.departmentData.radiographic.roots.wnl}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, wnl: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsWNL">WNL</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsCurvature"
                                    checked={file.departmentData.radiographic.roots.curvature}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, curvature: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsCurvature">Curvature</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsDilaceration"
                                    checked={file.departmentData.radiographic.roots.dilaceration}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, dilaceration: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsDilaceration">Dilaceration</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsResorption"
                                    checked={file.departmentData.radiographic.roots.resorption}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, resorption: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsResorption">Resorption</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsPerforation"
                                    checked={file.departmentData.radiographic.roots.perforation}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, perforation: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsPerforation">Perforation</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsFracture"
                                    checked={file.departmentData.radiographic.roots.fracture}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, fracture: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsFracture">Fracture</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsOpenApex"
                                    checked={file.departmentData.radiographic.roots.openApex}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, openApex: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsOpenApex">Open Apex</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsSinus"
                                    checked={file.departmentData.radiographic.roots.sinus}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, roots: { ...file.departmentData.radiographic.roots, sinus: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsSinus">Sinus/ IAC</label>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Root Canal</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootCanalWNL"
                                    checked={file.departmentData.radiographic.rootCanal.wnl}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, wnl: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootCanalWNL">WNL</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsCalcification"
                                    checked={file.departmentData.radiographic.rootCanal.calcification}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, calcification: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsCalcification">Calcification</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootCanalBifurcated"
                                    checked={file.departmentData.radiographic.rootCanal.bifurcated}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, bifurcated: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootCanalBifurcated">Bifurcated</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootCanalResorption"
                                    checked={file.departmentData.radiographic.rootCanal.resorption}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, resorption: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootCanalResorption">Resorption</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootCanalPerforation"
                                    checked={file.departmentData.radiographic.rootCanal.perforation}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, perforation: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootCanalPerforation">Perforation</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootsFurcation"
                                    checked={file.departmentData.radiographic.rootCanal.furcation}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, furcation: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootsFurcation">Furcation</label>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="rootCanalPriorRCT"
                                    checked={file.departmentData.radiographic.rootCanal.priorRCT}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, rootCanal: { ...file.departmentData.radiographic.rootCanal, priorRCT: e.target.checked } } } })
                                    } />
                                <label htmlFor="rootCanalPriorRCT">Prior RCT</label>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Lamina Dura</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="laminaDuraWNL"
                                    checked={file.departmentData.radiographic.laminaDura.wnl}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, laminaDura: { ...file.departmentData.radiographic.laminaDura, wnl: e.target.checked } } } })
                                    } />
                                <label htmlFor="laminaDuraWNL">WNL</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="laminaDuraObscure"
                                    checked={file.departmentData.radiographic.laminaDura.obscure}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, laminaDura: { ...file.departmentData.radiographic.laminaDura, obscure: e.target.checked } } } })
                                    } />
                                <label htmlFor="laminaDuraObscure">Obscure</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="laminaDuraBroken"
                                    checked={file.departmentData.radiographic.laminaDura.broken}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, laminaDura: { ...file.departmentData.radiographic.laminaDura, broken: e.target.checked } } } })
                                    } />
                                <label htmlFor="laminaDuraBroken">Broken</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="laminaDuraWidened"
                                    checked={file.departmentData.radiographic.laminaDura.widened}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, laminaDura: { ...file.departmentData.radiographic.laminaDura, widened: e.target.checked } } } })
                                    } />
                                <label htmlFor="laminaDuraWidened">Widened</label>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Alveolar bone</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="alveolarBoneWNL"
                                    checked={file.departmentData.radiographic.alveolarBone.wnl}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, alveolarBone: { ...file.departmentData.radiographic.alveolarBone, wnl: e.target.checked } } } })
                                    } />
                                <label htmlFor="alveolarBoneWNL">WNL</label>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="alveolarBoneApicalRadiolucency"
                                    checked={file.departmentData.radiographic.alveolarBone.apicalRadiolucency}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, alveolarBone: { ...file.departmentData.radiographic.alveolarBone, apicalRadiolucency: e.target.checked } } } })
                                    } />
                                <label htmlFor="alveolarBoneApicalRadiolucency">Apical radiolucency</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="alveolarBoneLateralRadiolucency"
                                    checked={file.departmentData.radiographic.alveolarBone.lateralRadiolucency}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, alveolarBone: { ...file.departmentData.radiographic.alveolarBone, lateralRadiolucency: e.target.checked } } } })
                                    } />
                                <label htmlFor="alveolarBoneLateralRadiolucency">Lateral radiolucency</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="alveolarBoneapLatOpacity"
                                    checked={file.departmentData.radiographic.alveolarBone.apLatOpacity}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, alveolarBone: { ...file.departmentData.radiographic.alveolarBone, apLatOpacity: e.target.checked } } } })
                                    } />
                                <label htmlFor="alveolarBoneapLatOpacity">Ap/Lat opacity</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="alveolarBoneCrestalBoneLoss"
                                    checked={file.departmentData.radiographic.alveolarBone.crestalBoneLoss}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, alveolarBone: { ...file.departmentData.radiographic.alveolarBone, crestalBoneLoss: e.target.checked } } } })
                                    } />
                                <label htmlFor="alveolarBoneCrestalBoneLoss">Crestal bone loss</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="alveolarBoneCrestalBoneLoss"
                                    checked={file.departmentData.radiographic.alveolarBone.crestalBoneLoss}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, alveolarBone: { ...file.departmentData.radiographic.alveolarBone, crestalBoneLoss: e.target.checked } } } })
                                    } />
                                <label htmlFor="alveolarBoneCrestalBoneLoss">Crestal bone loss</label>
                            </div>
                        </div>

                    </div>

                    <div className="col-12">
                        <label className="form-label mt-2">Traces to:</label>
                        <input type="text" className="form-control" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, radiographic: { ...file.departmentData.radiographic, tracesTo: e.target.value } } });
                        }} />
                    </div>

                </div>

                <hr />

                {/* Assessment */}
                <div className="row">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Assessment</h3>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Diagnosis</h4>

                        <label className="form-label">Pulpal</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, diagnosis: { ...file.departmentData.assessment.diagnosis, pulpal: e.target.value } } } });
                        }}>
                            <option value={'WNL'}>WNL</option>
                            <option value={'Reversible Pulpitis'}>Reversible Pulpitis</option>
                            <option value={'Symptomatic Irrev pulpitis'}>Symptomatic Irrev pulpitis</option>
                            <option value={'Asymptomatic Irrev pulpitis'}>Asymptomatic Irrev pulpitis</option>
                            <option value={'Necrosis'}>Necrosis</option>
                            <option value={'Prior RCT / Non healing'}>Prior RCT / Non healing</option>
                            <option value={'Previous initiated'}>Previous initiated</option>
                        </select>

                        <label className="form-label">Periapical</label>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, diagnosis: { ...file.departmentData.assessment.diagnosis, periapical: e.target.value } } } });
                        }}>
                            <option value={'WNL'}>WNL</option>
                            <option value={'APP'}>APP</option>
                            <option value={'CPP'}>CPP</option>
                            <option value={'APA'}>APA</option>
                            <option value={'CPA'}>CPA</option>
                            <option value={'Cond Osteitis'}>Cond Osteitis</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mt-2">Etiology</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyCaries"
                                    checked={file.departmentData.assessment.etiology.caries}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, caries: e.target.checked } } } })} />
                                <label htmlFor="etiologyCaries">Caries</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyRestoration"
                                    checked={file.departmentData.assessment.etiology.restoration}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, restoration: e.target.checked } } } })} />
                                <label htmlFor="etiologyRestoration">Restoration</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyPriorRCT"
                                    checked={file.departmentData.assessment.etiology.priorRCT}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, priorRCT: e.target.checked } } } })} />
                                <label htmlFor="etiologyPriorRCT">Prior RCT</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyIatrogenic"
                                    checked={file.departmentData.assessment.etiology.iatrogenic}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, iatrogenic: e.target.checked } } } })} />
                                <label htmlFor="etiologyIatrogenic">Iatrogenic</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyCoronalLeakage"
                                    checked={file.departmentData.assessment.etiology.coronalLeakage}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, coronalLeakage: e.target.checked } } } })} />
                                <label htmlFor="etiologyCoronalLeakage">Coronal Leakage</label>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyTrauma"
                                    checked={file.departmentData.assessment.etiology.trauma}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, trauma: e.target.checked } } } })} />
                                <label htmlFor="etiologyTrauma">Trauma</label>
                            </div>

                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <input type="checkbox" className="ms-3" id="etiologyPerio"
                                    checked={file.departmentData.assessment.etiology.perio}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, etiology: { ...file.departmentData.assessment.etiology, perio: e.target.checked } } } })} />
                                <label htmlFor="etiologyPerio">Perio</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Prognosis</h4>
                        <select className="form-select" onChange={(e) => {
                            setFile({ ...file, departmentData: { ...file.departmentData, assessment: { ...file.departmentData.assessment, prognosis: e.target.value } } });
                        }}>
                            <option value={'Good'}>Good</option>
                            <option value={'Fair'}>Fair</option>
                            <option value={'Poor'}>Poor</option>
                        </select>
                    </div>

                </div>

                <hr />

                {/* Treatment Plan */}
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Treatment Plan</h3>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Endodontic</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="endodonticRCT"
                                    checked={file.departmentData.treatmentPlan.endodontic.rct}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, endodontic: { ...file.departmentData.treatmentPlan.endodontic, rct: e.target.checked } } } })} />
                                <label htmlFor="endodonticRCT">RCT</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="endodonticRetreatment"
                                    checked={file.departmentData.treatmentPlan.endodontic.retreatment}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, endodontic: { ...file.departmentData.treatmentPlan.endodontic, retreatment: e.target.checked } } } })} />
                                <label htmlFor="endodonticRetreatment">Retreatment</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="endodonticIncisionDrainage"
                                    checked={file.departmentData.treatmentPlan.endodontic.incisionDrainage}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, endodontic: { ...file.departmentData.treatmentPlan.endodontic, incisionDrainage: e.target.checked } } } })} />
                                <label htmlFor="endodonticIncisionDrainage">Incision & Drainage</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="endodonticApexificationVPT"
                                    checked={file.departmentData.treatmentPlan.endodontic.apexificationVPT}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, endodontic: { ...file.departmentData.treatmentPlan.endodontic, apexificationVPT: e.target.checked } } } })} />
                                <label htmlFor="endodonticApexificationVPT">Apexification / VPT</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="endodonticApicoectomy"
                                    checked={file.departmentData.treatmentPlan.endodontic.apicoectomy}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, endodontic: { ...file.departmentData.treatmentPlan.endodontic, apicoectomy: e.target.checked } } } })} />
                                <label htmlFor="endodonticApicoectomy">Apicoectomy</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="endodonticPerforationResorptionRepair"
                                    checked={file.departmentData.treatmentPlan.endodontic.perforationResorptionRepair}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, endodontic: { ...file.departmentData.treatmentPlan.endodontic, perforationResorptionRepair: e.target.checked } } } })} />
                                <label htmlFor="endodonticPerforationResorptionRepair">Perforation/Resorption Repair</label>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <h4 className="mt-2">Periodontal</h4>
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="ms-3" id="periodontalScaling"
                                        checked={file.departmentData.treatmentPlan.periodontal.scaling}
                                        onChange={(e) =>
                                            setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, scaling: e.target.checked } } } })} />
                                    <label htmlFor="periodontalScaling">Scaling</label>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="ms-3" id="periodontalCurettage"
                                        checked={file.departmentData.treatmentPlan.periodontal.curettage}
                                        onChange={(e) =>
                                            setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, curettage: e.target.checked } } } })} />
                                    <label htmlFor="periodontalCurettage">Curettage</label>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="periodontalCrownLengthening"
                                    checked={file.departmentData.treatmentPlan.periodontal.crownLengthening}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, crownLengthening: e.target.checked } } } })} />
                                <label htmlFor="periodontalCrownLengthening">Crown Lengthening</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="periodontalRootAmputation"
                                    checked={file.departmentData.treatmentPlan.periodontal.rootAmputation}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, rootAmputation: e.target.checked } } } })} />
                                <label htmlFor="periodontalRootAmputation">Root Amputation</label>
                            </div>

                            <div>
                                <input type="checkbox" className="ms-3" id="hemisection"
                                    checked={file.departmentData.treatmentPlan.periodontal.hemisection}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, hemisection: e.target.checked } } } })} />
                                <label htmlFor="periodontalRootAmputation">Root Amputation</label>
                            </div>

                            <div>
                                <input type="checkbox" className="ms-3" id="hemisection"
                                    checked={file.departmentData.treatmentPlan.periodontal.hemisection}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, hemisection: e.target.checked } } } })} />
                                <label htmlFor="hemisection">Hemisection</label>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="extraction"
                                    checked={file.departmentData.treatmentPlan.periodontal.extraction}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, periodontal: { ...file.departmentData.treatmentPlan.periodontal, extraction: e.target.checked } } } })} />
                                <label htmlFor="extraction">Extraction</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mt-2">Restorative</h4>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="restorativeTemporary"
                                    checked={file.departmentData.treatmentPlan.restorative.temporary}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, restorative: { ...file.departmentData.treatmentPlan.restorative, temporary: e.target.checked } } } })} />
                                <label htmlFor="restorativeTemporary">Temporary</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="restorativePostCore"
                                    checked={file.departmentData.treatmentPlan.restorative.postCore}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, restorative: { ...file.departmentData.treatmentPlan.restorative, postCore: e.target.checked } } } })} />
                                <label htmlFor="restorativePostCore">Post/Core</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="restorativeComposite"
                                    checked={file.departmentData.treatmentPlan.restorative.composite}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, restorative: { ...file.departmentData.treatmentPlan.restorative, composite: e.target.checked } } } })} />
                                <label htmlFor="restorativeComposite">Composite</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="restorativeOnlayCrown"
                                    checked={file.departmentData.treatmentPlan.restorative.onlayCrown}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, restorative: { ...file.departmentData.treatmentPlan.restorative, onlayCrown: e.target.checked } } } })} />
                                <label htmlFor="restorativeOnlayCrown">Onlay/Crown</label>
                            </div>

                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="ms-3" id="restorativeBleaching"
                                    checked={file.departmentData.treatmentPlan.restorative.bleaching}
                                    onChange={(e) =>
                                        setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, restorative: { ...file.departmentData.treatmentPlan.restorative, bleaching: e.target.checked } } } })} />
                                <label htmlFor="restorativeBleaching">Bleaching</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <ImageUploadBox type={'xray'} />
                </div>
            </div > :
            <div className="bg-white rounded shadow p-3">
                <h1 className="fw-bold text-center text-primary">Department of Endodontics</h1>
                <p className="text-center">Faculty of Dentistry</p>
                <hr />

                {/* Subjectives */}
                <div className="row">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Subjectives</h3>
                    </div>

                    <div className="col-12 col-md-6">
                        <ReadOnlyTextField label={'Nature of Pain'} value={file?.departmentData.subjectives.natureOfPain} />
                    </div>
                    <div className="col-12 col-md-6">
                        <ReadOnlyTextField label={'Onset'} value={file?.departmentData.subjectives.onset} />
                    </div>
                    <div className="col-12 col-md-4">
                        <ReadOnlyTextField label={'Location'} value={file?.departmentData.subjectives.location} />
                    </div>
                    <div className="col-12 col-md-4">
                        <ReadOnlyTextField label={"Radiating to:"} value={file?.departmentData.subjectives.radiatingTo} />
                    </div>
                    <div className="col-12 col-md-4">
                        <ReadOnlyTextField label={'Duration'} value={file?.departmentData.subjectives.duration} />
                    </div>
                    <div className="col-6 col-md-6">
                        <label className="form-label mt-2">Initiated by:</label>
                        <div className="d-flex flex-column">
                            <ReadOnlyCheckboxField label={'Cold'} checked={file?.departmentData.subjectives.intiatedByCold} />
                            <ReadOnlyCheckboxField label={'Heat'} checked={file?.departmentData.subjectives.intiatedByHeat} />
                            <ReadOnlyCheckboxField label={'Sweets'} checked={file?.departmentData.subjectives.intiatedBySweets} />
                            <ReadOnlyCheckboxField label={'Spontaneous'} checked={file?.departmentData.subjectives.intiatedBySpontaneousPain} />
                            <ReadOnlyCheckboxField label={'Palpation'} checked={file?.departmentData.subjectives.intiatedByPalpation} />
                            <ReadOnlyCheckboxField label={'Mastication'} checked={file?.departmentData.subjectives.intiatedByMastication} />
                            <ReadOnlyCheckboxField label={'Supination'} checked={file?.departmentData.subjectives.intiatedBySupination} />
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2">Relieved by:</label>
                        <div className="d-flex flex-column">
                            <ReadOnlyCheckboxField label={'Cold'} checked={file?.departmentData.subjectives.relievedByCold} />

                            <ReadOnlyCheckboxField label={'Heat'} checked={file?.departmentData.subjectives.relievedByHeat} />

                            <ReadOnlyCheckboxField label={'OTC-Meds'} checked={file?.departmentData.subjectives.relievedByOTCMeds} />
                            <ReadOnlyCheckboxField label={'Nare-Meds'} checked={file?.departmentData.subjectives.relievedByNareMeds} />
                        </div>
                    </div>
                </div>

                <hr />

                {/* Objectives */}
                {/* Extraoral Examination */}
                <div className="row mt-2">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Objectives</h3>
                    </div>
                    <div className="col-12">
                        <h4>Extraoral Examination</h4>
                    </div>

                    <div className="col-12 col-md-4">
                        <ReadOnlyTextField label={'Facial Swelling'} value={file?.departmentData.objectives.extraoral.facialSwelling} />
                    </div>

                    <div className="col-12 col-md-4">
                        <ReadOnlyTextField label={'Lymph Nodes'} value={file?.departmentData.objectives.extraoral.lymphNodes} />
                    </div>

                    <div className="col-12 col-md-4">
                        <ReadOnlyTextField label={'Swollen'} value={file?.departmentData.objectives.extraoral.swollen} />
                    </div>
                </div>

                {/* Intraoral Examination */}
                <div className="row mt-4">
                    <div className="col-12">
                        <h4>Intraoral Examination</h4>
                    </div>

                    <div className="col-12 col-md-3">
                        <ReadOnlyTextField label={'Soft Tissues'} value={file?.departmentData.objectives.intraoral.softTissues} />
                    </div>

                    <div className="col-12 col-md-3">
                        <ReadOnlyTextField label={'Swelling'} value={file?.departmentData.objectives.intraoral.swelling} />
                    </div>

                    <div className="col-12 col-md-3">
                        <ReadOnlyTextField label={'Sinus Tract'} value={file?.departmentData.objectives.intraoral.sinusTract} />
                    </div>

                    <div className="col-12 col-md-3">
                        <label className="form-label mt-2">Clinical Crown</label>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Restoration'} checked={file?.departmentData.objectives.intraoral.clinicalCrown.restoration} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Caries'} checked={file?.departmentData.objectives.intraoral.clinicalCrown.caries} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Fracture'} checked={file?.departmentData.objectives.intraoral.clinicalCrown.fracture} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Exposure'} checked={file?.departmentData.objectives.intraoral.clinicalCrown.exposure} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Discoloration'} checked={file?.departmentData.objectives.intraoral.clinicalCrown.discoloration} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Radiographic Examination */}
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Radiographic Examination</h3>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Crown</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'WNL'} checked={file?.departmentData.radiographic.crown.wnl} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Caries'} checked={file?.departmentData.radiographic.crown.caries} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Restoration'} checked={file?.departmentData.radiographic.crown.restoration} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Crown'} checked={file?.departmentData.radiographic.crown.crown} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Dense In Dente'} checked={file?.departmentData.radiographic.crown.denseInDente} />
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Pulp Chamber</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'WNL'} checked={file?.departmentData.radiographic.pulpChamber.wnl} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Pulp Stone'} checked={file?.departmentData.radiographic.pulpChamber.pulpStone} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Exposure'} checked={file?.departmentData.radiographic.pulpChamber.exposure} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Resorption'} checked={file?.departmentData.radiographic.pulpChamber.resorption} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Perforation'} checked={file?.departmentData.radiographic.pulpChamber.perforation} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Roots</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'WNL'} checked={file?.departmentData.radiographic.roots.wnl} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Curvature'} checked={file?.departmentData.radiographic.roots.curvature} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Dilaceration'} checked={file?.departmentData.radiographic.roots.dilaceration} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Resorption'} checked={file?.departmentData.radiographic.roots.resorption} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Perforation'} checked={file?.departmentData.radiographic.roots.perforation} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Fracture'} checked={file?.departmentData.radiographic.roots.fracture} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Open Apex'} checked={file?.departmentData.radiographic.roots.openApex} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label={'Sinus/ IAC'} checked={file?.departmentData.radiographic.roots.sinus} />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Root Canal</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField label="WNL" checked={file?.departmentData.radiographic.rootCanal.wnl} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Calcification"
                                        checked={file?.departmentData.radiographic.rootCanal.calcification}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Bifurcated"
                                        checked={file?.departmentData.radiographic.rootCanal.bifurcated}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Resorption"
                                        checked={file?.departmentData.radiographic.rootCanal.resorption}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Perforation"
                                        checked={file?.departmentData.radiographic.rootCanal.perforation}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Furcation"
                                        checked={file?.departmentData.radiographic.rootCanal.furcation}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Prior RCT"
                                        checked={file?.departmentData.radiographic.rootCanal.priorRCT}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Lamina Dura</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="WNL"
                                        checked={file?.departmentData.radiographic?.laminaDura?.wnl}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Obscure"
                                        checked={file?.departmentData.radiographic?.laminaDura?.obscure}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Broken"
                                        checked={file?.departmentData.radiographic?.laminaDura?.broken}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Widened"
                                        checked={file?.departmentData.radiographic?.laminaDura?.widened}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Alveolar bone</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="WNL"
                                        checked={file?.departmentData.radiographic?.alveolarBone?.wnl}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Apical radiolucency"
                                        checked={file?.departmentData.radiographic?.alveolarBone?.apicalRadiolucency}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Lateral radiolucency"
                                        checked={file?.departmentData.radiographic?.alveolarBone?.lateralRadiolucency}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Ap/Lat opacity"
                                        checked={file?.departmentData.radiographic?.alveolarBone?.apLatOpacity}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Crestal bone loss"
                                        checked={file?.departmentData.radiographic?.alveolarBone?.crestalBoneLoss}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <ReadOnlyTextField label={'Traces to:'} value={file?.departmentData.radiographic.tracesTo} />
                    </div>

                </div>

                <hr />

                {/* Assessment */}
                <div className="row">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Assessment</h3>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Diagnosis</h4>

                        <ReadOnlyTextField label={'Pulpal:'} value={file?.departmentData.assessment.diagnosis.pulpal} />

                        <ReadOnlyTextField label={'Periapical:'} value={file?.departmentData.assessment.diagnosis.periapical} />
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mt-2">Etiology</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Caries"
                                        checked={file?.departmentData.assessment?.etiology?.caries}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Restoration"
                                        checked={file?.departmentData.assessment?.etiology?.restoration}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Prior RCT"
                                        checked={file?.departmentData.assessment?.etiology?.priorRCT}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Iatrogenic"
                                        checked={file?.departmentData.assessment?.etiology?.iatrogenic}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Coronal Leakage"
                                        checked={file?.departmentData.assessment?.etiology?.coronalLeakage}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Trauma"
                                        checked={file?.departmentData.assessment?.etiology?.trauma}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Perio"
                                        checked={file?.departmentData.assessment?.etiology?.perio}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Prognosis</h4>
                        <ReadOnlyTextField label={''} value={file?.departmentData.assessment.prognosis} />
                    </div>

                </div>

                <hr />

                {/* Treatment Plan */}
                <div className="row d-flex">
                    <div className="col-12">
                        <h3 className="fw-bold text-decoration-underline">Treatment Plan</h3>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4>Endodontic</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="RCT"
                                        checked={file?.departmentData.treatmentPlan?.endodontic?.rct}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Retreatment"
                                        checked={file?.departmentData.treatmentPlan?.endodontic?.retreatment}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Incision & Drainage"
                                        checked={file?.departmentData.treatmentPlan?.endodontic?.incisionDrainage}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Apexification / VPT"
                                        checked={file?.departmentData.treatmentPlan?.endodontic?.apexificationVPT}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Apicoectomy"
                                        checked={file?.departmentData.treatmentPlan?.endodontic?.apicoectomy}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Perforation / Resorption Repair"
                                        checked={file?.departmentData.treatmentPlan?.endodontic?.perforationResorptionRepair}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mt-2">Periodontal</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Scaling"
                                        checked={file?.departmentData.treatmentPlan?.periodontal?.scaling}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Curettage"
                                        checked={file?.departmentData.treatmentPlan?.periodontal?.curettage}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Crown Lengthening"
                                        checked={file?.departmentData.treatmentPlan?.periodontal?.crownLengthening}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Root Amputation"
                                        checked={file?.departmentData.treatmentPlan?.periodontal?.rootAmputation}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Hemisection"
                                        checked={file?.departmentData.treatmentPlan?.periodontal?.hemisection}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Extraction"
                                        checked={file?.departmentData.treatmentPlan?.periodontal?.extraction}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mt-2">Restorative</h4>
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Temporary"
                                        checked={file?.departmentData.treatmentPlan?.restorative?.temporary}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Post/Core"
                                        checked={file?.departmentData.treatmentPlan?.restorative?.postCore}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Composite"
                                        checked={file?.departmentData.treatmentPlan?.restorative?.composite}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Onlay / Crown"
                                        checked={file?.departmentData.treatmentPlan?.restorative?.onlayCrown}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyCheckboxField
                                        label="Bleaching"
                                        checked={file?.departmentData.treatmentPlan?.restorative?.bleaching}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row flex-column mt-4">
                    <h4>X-Ray:</h4>
                    <div className="d-flex justify-content-center">
                        <img src={file?.xRay} alt="X-Ray" className="img-fluid" />
                    </div>
                </div>

            </div >
    );
}