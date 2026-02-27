"use client";

const SITES_BUCCAL = ["mb", "b", "db"];
const SITES_LINGUAL = ["ml", "l", "dl"];

export default function ViewPeriodontalChart({ file }) {
    const teeth = file?.departmentData?.periodontalChart ?? [];
    const upperTeeth = teeth.slice(0, 16);
    const lowerTeeth = teeth.slice(16, 32);

    if (!teeth.length) return <p>Loading periodontal chart...</p>;

    const renderSiteValues = (data, sites) => (
        <div className="d-flex gap-1 justify-content-center">
            {sites.map(site => (
                <div
                    key={site}
                    className="form-control form-control-sm text-center text-primary p-1"
                    style={{ width: "30px", backgroundColor: "#e9ecef" }}
                >
                    {data[site]}
                </div>
            ))}
        </div>
    );

    const renderTable = (label, archTeeth) => (
        <div className="w-100 mt-4">
            <h6 className="fw-bold">{label}</h6>
            <div style={{ overflowX: "auto" }}>
                <table className="table table-bordered text-center align-middle periodontal-table" style={{ minWidth: "1000px" }}>
                    <tbody>
                        <tr>
                            <th>Mobility</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    <div className="form-control form-control-sm text-center text-primary" style={{ backgroundColor: "#e9ecef" }}>
                                        {t.mobility}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <th>Furcation</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    <div className="form-control form-control-sm text-center text-primary" style={{ backgroundColor: "#e9ecef" }}>
                                        {t.furcation}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <th>Probing (Buccal)</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    {renderSiteValues(t.probing, SITES_BUCCAL)}
                                </td>
                            ))}
                        </tr>

                        <tr className="fw-bold">
                            <th></th>
                            {archTeeth.map(t => (
                                <td key={t.tooth}>{t.tooth}</td>
                            ))}
                        </tr>

                        <tr>
                            <th>Probing (Lingual)</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    {renderSiteValues(t.probing, SITES_LINGUAL)}
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <th>Recession</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    {renderSiteValues(t.recession, SITES_BUCCAL.concat(SITES_LINGUAL))}
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <th>BOP</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    {renderSiteValues(t.bop, SITES_BUCCAL.concat(SITES_LINGUAL))}
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <th>PI</th>
                            {archTeeth.map((t, i) => (
                                <td key={i}>
                                    {renderSiteValues(t.pi, SITES_BUCCAL.concat(SITES_LINGUAL))}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="w-100 mt-4">
            <h4 className="fw-bold mb-3">PERIODONTAL CHART</h4>
            {renderTable("UPPER ARCH", upperTeeth)}
            {renderTable("LOWER ARCH", lowerTeeth)}
        </div>
    );
}
