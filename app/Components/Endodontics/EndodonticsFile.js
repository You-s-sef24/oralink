"use client";

import { useContext, useState } from "react";
import { StatesContext } from "../../Contexts/StatesContext";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import ImageUploadBox from "../ImageUploadBox";

export default function EndodonticsFile() {
    const { endodonticsData, setEndodonticsData, handleSave, file, setFile } = useContext(PatientInfoContext);
    const [step, setStep] = useState(1);
    const { state, setState } = useContext(StatesContext);

    function handleBack() {
        if (step === 1) {
            setState(state - 1);
            return;
        }
        if (step >= 2) {
            setStep(step - 1);
            return;
        }
    }

    return (
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
                        setEndodonticsData({ ...endodonticsData, subjectives: { ...endodonticsData.subjectives, natureOfPain: e.target.value } });
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
                        setEndodonticsData({ ...endodonticsData, subjectives: { ...endodonticsData.subjectives, onset: e.target.value } });
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
                        setEndodonticsData({ ...endodonticsData, subjectives: { ...endodonticsData.subjectives, location: e.target.value } });
                    }}>
                        <option value={'Localized'}>Localized</option>
                        <option value={'Diffuse'}>Diffuse</option>
                        <option value={'Referred'}>Referred</option>
                    </select>
                </div>
                <div className="col-12 col-md-4">
                    <label className="form-label mt-2">Radiating to:</label>
                    <input type="text" className="form-control" value={endodonticsData.subjectives.radiatingTo} onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, subjectives: { ...endodonticsData.subjectives, radiatingTo: e.target.value } });
                    }} />
                </div>
                <div className="col-12 col-md-4">
                    <label className="form-label mt-2">Duration</label>
                    <select className="form-select" onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, subjectives: { ...endodonticsData.subjectives, duration: e.target.value } });
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
                                checked={endodonticsData.subjectives.intiatedByCold}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedByCold: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="intiatedCold">Cold</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="intiatedHeat"
                                checked={endodonticsData.subjectives.intiatedByHeat}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedByHeat: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="intiatedHeat">Heat</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="intiatedSweets"
                                checked={endodonticsData.subjectives.intiatedBySweets}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedBySweets: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="intiatedSweets">Sweets</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="spontaneousPain"
                                checked={endodonticsData.subjectives.intiatedBySpontaneousPain}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedBySpontaneousPain: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="spontaneousPain">Spontaneous</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="palpation"
                                checked={endodonticsData.subjectives.intiatedByPalpation}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedByPalpation: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="palpation">Palpation</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="mastication"
                                checked={endodonticsData.subjectives.intiatedByMastication}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedByMastication: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="mastication">Mastication</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="supination"
                                checked={endodonticsData.subjectives.intiatedBySupination}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, intiatedBySupination: e.target.checked
                                        }
                                    })
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
                                checked={endodonticsData.subjectives.relievedByCold}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, relievedByCold: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="cold">Cold</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="heat"
                                checked={endodonticsData.subjectives.relievedByHeat}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, relievedByHeat: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="heat">Heat</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="otcMeds"
                                checked={endodonticsData.subjectives.relievedByOTCMeds}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, relievedByOTCMeds: e.target.checked
                                        }
                                    })
                                } />
                            <label htmlFor="otcMeds">OTC-Meds</label>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="nareMeds"
                                checked={endodonticsData.subjectives.relievedByNareMeds}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        subjectives: {
                                            ...endodonticsData.subjectives, relievedByNareMeds: e.target.checked
                                        }
                                    })
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
                        setEndodonticsData({ ...endodonticsData, objectives: { ...endodonticsData.objectives, extraoral: { ...endodonticsData.objectives.extraoral, facialSwelling: e.target.value } } });
                    }}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <div className="col-12 col-md-4">
                    <label className="form-label mt-2">Lymph nodes</label>
                    <select className="form-select" onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, objectives: { ...endodonticsData.objectives, extraoral: { ...endodonticsData.objectives.extraoral, lymphNodes: e.target.value } } });
                    }}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <div className="col-12 col-md-4">
                    <label className="form-label mt-2">Swollen</label>
                    <select className="form-select" onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, objectives: { ...endodonticsData.objectives, extraoral: { ...endodonticsData.objectives.extraoral, swollen: e.target.value } } });
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
                        setEndodonticsData({ ...endodonticsData, objectives: { ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, softTissues: e.target.value } } });
                    }}>
                        <option value={true}>Yes (WNL)</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <div className="col-12 col-md-3">
                    <label className="form-label mt-2">Swelling</label>
                    <select className="form-select" onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, objectives: { ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, swelling: e.target.value } } });
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
                        setEndodonticsData({ ...endodonticsData, objectives: { ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, sinusTract: e.target.value } } });
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
                                checked={endodonticsData.objectives.intraoral.clinicalCrown.restoration}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        objectives: {
                                            ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, clinicalCrown: { ...endodonticsData.objectives.intraoral.clinicalCrown, restoration: e.target.checked } }
                                        }
                                    })} />
                            <label htmlFor="clinicalCrownRestoration">Restoration</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="clinicalCrownCaries"
                                checked={endodonticsData.objectives.intraoral.clinicalCrown.caries}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        objectives: {
                                            ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, clinicalCrown: { ...endodonticsData.objectives.intraoral.clinicalCrown, caries: e.target.checked } }
                                        }
                                    })} />
                            <label htmlFor="clinicalCrownCaries">Caries</label>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="clinicalCrownFracture"
                                checked={endodonticsData.objectives.intraoral.clinicalCrown.fracture}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        objectives: {
                                            ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, clinicalCrown: { ...endodonticsData.objectives.intraoral.clinicalCrown, fracture: e.target.checked } }
                                        }
                                    })} />
                            <label htmlFor="clinicalCrownFracture">Fracture</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="clinicalCrownExposure"
                                checked={endodonticsData.objectives.intraoral.clinicalCrown.exposure}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        objectives: {
                                            ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, clinicalCrown: { ...endodonticsData.objectives.intraoral.clinicalCrown, exposure: e.target.checked } }
                                        }
                                    })} />
                            <label htmlFor="clinicalCrownExposure">Exposure</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="clinicalCrownDiscoloration"
                                checked={endodonticsData.objectives.intraoral.clinicalCrown.discoloration}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        objectives: {
                                            ...endodonticsData.objectives, intraoral: { ...endodonticsData.objectives.intraoral, clinicalCrown: { ...endodonticsData.objectives.intraoral.clinicalCrown, discoloration: e.target.checked } }
                                        }
                                    })} />
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
                                checked={endodonticsData.radiographic.crown.wnl}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, crown: { ...endodonticsData.radiographic.crown, wnl: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="crownWNL">WNL</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="crownCaries"
                                checked={endodonticsData.radiographic.crown.caries}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, crown: { ...endodonticsData.radiographic.crown, caries: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="crownCaries">Caries</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="crownRestoration"
                                checked={endodonticsData.radiographic.crown.restoration}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, crown: { ...endodonticsData.radiographic.crown, restoration: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="crownRestoration">Restoration</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="crownCrown"
                                checked={endodonticsData.radiographic.crown.crown}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, crown: { ...endodonticsData.radiographic.crown, crown: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="crownCrown">Crown</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="denseInDente"
                                checked={endodonticsData.radiographic.crown.denseInDente}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, crown: { ...endodonticsData.radiographic.crown, denseInDente: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="denseInDente">Dense In Dente</label>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4>Pulp Chamber</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="pulpChamberWNL"
                                checked={endodonticsData.radiographic.pulpChamber.wnl}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, pulpChamber: { ...endodonticsData.radiographic.pulpChamber, wnl: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="pulpChamberWNL">WNL</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="pulpChamberPulpStone"
                                checked={endodonticsData.radiographic.pulpChamber.pulpStone}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, pulpChamber: { ...endodonticsData.radiographic.pulpChamber, pulpStone: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="pulpChamberPulpStone">Pulp Stone</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="pulpChamberExposure"
                                checked={endodonticsData.radiographic.pulpChamber.exposure}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, pulpChamber: { ...endodonticsData.radiographic.pulpChamber, exposure: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="pulpChamberExposure">Exposure</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="pulpChamberResorption"
                                checked={endodonticsData.radiographic.pulpChamber.resorption}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, pulpChamber: { ...endodonticsData.radiographic.pulpChamber, resorption: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="pulpChamberResorption">Resorption</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="pulpChamberPerforation"
                                checked={endodonticsData.radiographic.pulpChamber.perforation}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, pulpChamber: { ...endodonticsData.radiographic.pulpChamber, perforation: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="pulpChamberPerforation">Perforation</label>
                        </div>

                    </div>


                </div>

                <div className="col-12 col-md-4">
                    <h4>Roots</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsWNL"
                                checked={endodonticsData.radiographic.roots.wnl}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, wnl: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsWNL">WNL</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsCurvature"
                                checked={endodonticsData.radiographic.roots.curvature}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, curvature: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsCurvature">Curvature</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsDilaceration"
                                checked={endodonticsData.radiographic.roots.dilaceration}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, dilaceration: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsDilaceration">Dilaceration</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsResorption"
                                checked={endodonticsData.radiographic.roots.resorption}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, resorption: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsResorption">Resorption</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsPerforation"
                                checked={endodonticsData.radiographic.roots.perforation}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, perforation: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsPerforation">Perforation</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsFracture"
                                checked={endodonticsData.radiographic.roots.fracture}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, fracture: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsFracture">Fracture</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsOpenApex"
                                checked={endodonticsData.radiographic.roots.openApex}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, openApex: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsOpenApex">Open Apex</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsSinus"
                                checked={endodonticsData.radiographic.roots.sinus}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, roots: { ...endodonticsData.radiographic.roots, sinus: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsSinus">Sinus/ IAC</label>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-4">
                    <h4>Root Canal</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootCanalWNL"
                                checked={endodonticsData.radiographic.rootCanal.wnl}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, wnl: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootCanalWNL">WNL</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsCalcification"
                                checked={endodonticsData.radiographic.rootCanal.calcification}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, calcification: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsCalcification">Calcification</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootCanalBifurcated"
                                checked={endodonticsData.radiographic.rootCanal.bifurcated}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, bifurcated: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootCanalBifurcated">Bifurcated</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootCanalResorption"
                                checked={endodonticsData.radiographic.rootCanal.resorption}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, resorption: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootCanalResorption">Resorption</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootCanalPerforation"
                                checked={endodonticsData.radiographic.rootCanal.perforation}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, perforation: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootCanalPerforation">Perforation</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootsFurcation"
                                checked={endodonticsData.radiographic.rootCanal.furcation}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, furcation: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootsFurcation">Furcation</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="rootCanalPriorRCT"
                                checked={endodonticsData.radiographic.rootCanal.priorRCT}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, rootCanal: { ...endodonticsData.radiographic.rootCanal, priorRCT: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="rootCanalPriorRCT">Prior RCT</label>
                        </div>

                    </div>

                </div>

                <div className="col-12 col-md-4">
                    <h4>Lamina Dura</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="laminaDuraWNL"
                                checked={endodonticsData.radiographic.laminaDura.wnl}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, laminaDura: { ...endodonticsData.radiographic.laminaDura, wnl: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="laminaDuraWNL">WNL</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="laminaDuraObscure"
                                checked={endodonticsData.radiographic.laminaDura.obscure}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, laminaDura: { ...endodonticsData.radiographic.laminaDura, obscure: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="laminaDuraObscure">Obscure</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="laminaDuraBroken"
                                checked={endodonticsData.radiographic.laminaDura.broken}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, laminaDura: { ...endodonticsData.radiographic.laminaDura, broken: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="laminaDuraBroken">Broken</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="laminaDuraWidened"
                                checked={endodonticsData.radiographic.laminaDura.widened}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, laminaDura: { ...endodonticsData.radiographic.laminaDura, widened: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="laminaDuraWidened">Widened</label>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-4">
                    <h4>Alveolar bone</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="alveolarBoneWNL"
                                checked={endodonticsData.radiographic.alveolarBone.wnl}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, alveolarBone: { ...endodonticsData.radiographic.alveolarBone, wnl: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="alveolarBoneWNL">WNL</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="alveolarBoneApicalRadiolucency"
                                checked={endodonticsData.radiographic.alveolarBone.apicalRadiolucency}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, alveolarBone: { ...endodonticsData.radiographic.alveolarBone, apicalRadiolucency: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="alveolarBoneApicalRadiolucency">Apical radiolucency</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="alveolarBoneLateralRadiolucency"
                                checked={endodonticsData.radiographic.alveolarBone.lateralRadiolucency}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, alveolarBone: { ...endodonticsData.radiographic.alveolarBone, lateralRadiolucency: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="alveolarBoneLateralRadiolucency">Lateral radiolucency</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="alveolarBoneapLatOpacity"
                                checked={endodonticsData.radiographic.alveolarBone.apLatOpacity}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, alveolarBone: { ...endodonticsData.radiographic.alveolarBone, apLatOpacity: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="alveolarBoneapLatOpacity">Ap/Lat opacity</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="alveolarBoneCrestalBoneLoss"
                                checked={endodonticsData.radiographic.alveolarBone.crestalBoneLoss}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        radiographic: {
                                            ...endodonticsData.radiographic, alveolarBone: { ...endodonticsData.radiographic.alveolarBone, crestalBoneLoss: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="alveolarBoneCrestalBoneLoss">Crestal bone loss</label>
                        </div>
                    </div>

                </div>

                <div className="col-12">
                    <label className="form-label mt-2">Traces to:</label>
                    <input type="text" className="form-control" onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, radiographic: { ...endodonticsData.radiographic, tracesTo: e.target.value } });
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
                        setEndodonticsData({ ...endodonticsData, assessment: { ...endodonticsData.assessment, diagnosis: { ...endodonticsData.assessment.diagnosis, pulpal: e.target.value } } });
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
                        setEndodonticsData({ ...endodonticsData, assessment: { ...endodonticsData.assessment, diagnosis: { ...endodonticsData.assessment.diagnosis, periapical: e.target.value } } });
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
                                checked={endodonticsData.assessment.etiology.caries}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, caries: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyCaries">Caries</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="etiologyRestoration"
                                checked={endodonticsData.assessment.etiology.restoration}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, restoration: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyRestoration">Restoration</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="etiologyPriorRCT"
                                checked={endodonticsData.assessment.etiology.priorRCT}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, priorRCT: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyPriorRCT">Prior RCT</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="etiologyIatrogenic"
                                checked={endodonticsData.assessment.etiology.iatrogenic}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, iatrogenic: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyIatrogenic">Iatrogenic</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="etiologyCoronalLeakage"
                                checked={endodonticsData.assessment.etiology.coronalLeakage}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, coronalLeakage: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyCoronalLeakage">Coronal Leakage</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="etiologyTrauma"
                                checked={endodonticsData.assessment.etiology.trauma}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, trauma: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyTrauma">Trauma</label>
                        </div>

                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <input type="checkbox" className="ms-3" id="etiologyPerio"
                                checked={endodonticsData.assessment.etiology.perio}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        assessment: {
                                            ...endodonticsData.assessment, etiology: { ...endodonticsData.assessment.etiology, perio: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="etiologyPerio">Perio</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4>Prognosis</h4>
                    <select className="form-select" onChange={(e) => {
                        setEndodonticsData({ ...endodonticsData, assessment: { ...endodonticsData.assessment, prognosis: e.target.value } });
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
                                checked={endodonticsData.treatmentPlan.endodontic.rct}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, endodontic: { ...endodonticsData.treatmentPlan.endodontic, rct: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="endodonticRCT">RCT</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="endodonticRetreatment"
                                checked={endodonticsData.treatmentPlan.endodontic.retreatment}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, endodontic: { ...endodonticsData.treatmentPlan.endodontic, retreatment: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="endodonticRetreatment">Retreatment</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="endodonticIncisionDrainage"
                                checked={endodonticsData.treatmentPlan.endodontic.incisionDrainage}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, endodontic: { ...endodonticsData.treatmentPlan.endodontic, incisionDrainage: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="endodonticIncisionDrainage">Incision & Drainage</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="endodonticApexificationVPT"
                                checked={endodonticsData.treatmentPlan.endodontic.apexificationVPT}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, endodontic: { ...endodonticsData.treatmentPlan.endodontic, apexificationVPT: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="endodonticApexificationVPT">Apexification/VPT</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="endodonticApicoectomy"
                                checked={endodonticsData.treatmentPlan.endodontic.apicoectomy}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, endodontic: { ...endodonticsData.treatmentPlan.endodontic, apicoectomy: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="endodonticApicoectomy">Apicoectomy</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="endodonticPerforationResorptionRepair"
                                checked={endodonticsData.treatmentPlan.endodontic.perforationResorptionRepair}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, endodontic: { ...endodonticsData.treatmentPlan.endodontic, perforationResorptionRepair: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="endodonticPerforationResorptionRepair">Perforation/Resorption Repair</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4 className="mt-2">Periodontal</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="periodontalScaling"
                                checked={endodonticsData.treatmentPlan.periodontal.scaling}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, periodontal: { ...endodonticsData.treatmentPlan.periodontal, scaling: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="periodontalScaling">Scaling</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="periodontalCurettage"
                                checked={endodonticsData.treatmentPlan.periodontal.curettage}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, periodontal: { ...endodonticsData.treatmentPlan.periodontal, curettage: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="periodontalCurettage">Curettage</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="periodontalCrownLengthening"
                                checked={endodonticsData.treatmentPlan.periodontal.crownLengthening}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, periodontal: { ...endodonticsData.treatmentPlan.periodontal, crownLengthening: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="periodontalCrownLengthening">Crown Lengthening</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="periodontalRootAmputation"
                                checked={endodonticsData.treatmentPlan.periodontal.rootAmputation}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, periodontal: { ...endodonticsData.treatmentPlan.periodontal, rootAmputation: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="periodontalRootAmputation">Root Amputation</label>
                        </div>

                        <div>
                            <input type="checkbox" className="ms-3" id="hemisection"
                                checked={endodonticsData.treatmentPlan.periodontal.hemisection}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, periodontal: { ...endodonticsData.treatmentPlan.periodontal, hemisection: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="hemisection">Hemisection</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="extraction"
                                checked={endodonticsData.treatmentPlan.periodontal.extraction}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, periodontal: { ...endodonticsData.treatmentPlan.periodontal, extraction: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="extraction">Extraction</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <h4 className="mt-2">Restorative</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="restorativeTemporary"
                                checked={endodonticsData.treatmentPlan.restorative.temporary}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, restorative: { ...endodonticsData.treatmentPlan.restorative, temporary: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="restorativeTemporary">Temporary</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="restorativePostCore"
                                checked={endodonticsData.treatmentPlan.restorative.postCore}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, restorative: { ...endodonticsData.treatmentPlan.restorative, postCore: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="restorativePostCore">Post/Core</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="restorativeComposite"
                                checked={endodonticsData.treatmentPlan.restorative.composite}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, restorative: { ...endodonticsData.treatmentPlan.restorative, composite: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="restorativeComposite">Composite</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="restorativeOnlayCrown"
                                checked={endodonticsData.treatmentPlan.restorative.onlayCrown}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, restorative: { ...endodonticsData.treatmentPlan.restorative, onlayCrown: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="restorativeOnlayCrown">Onlay/Crown</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input type="checkbox" className="ms-3" id="restorativeBleaching"
                                checked={endodonticsData.treatmentPlan.restorative.bleaching}
                                onChange={(e) =>
                                    setEndodonticsData({
                                        ...endodonticsData,
                                        treatmentPlan: {
                                            ...endodonticsData.treatmentPlan, restorative: { ...endodonticsData.treatmentPlan.restorative, bleaching: e.target.checked }
                                        }
                                    })} />
                            <label htmlFor="restorativeBleaching">Bleaching</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <ImageUploadBox type={'xray'} />
            </div>

            <div className="d-flex justify-content-between gap-2">
                <button className="d-flex align-items-center gap-1 btn btn-secondary my-3" onClick={handleBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    Back
                </button>
                <button className="btn btn-primary my-3" onClick={() => { handleSave('endodontics') }}>
                    Save Full Patient File
                </button>
            </div>
        </div >
    );
}