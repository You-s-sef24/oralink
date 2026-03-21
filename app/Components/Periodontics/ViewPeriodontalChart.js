"use client";

// ─── Tooth layout ─────────────────────────────────────────────────────────────
const UPPER_TEETH = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const LOWER_TEETH = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];
const BUCCAL_SITES = ["mb", "b", "db"];
const LINGUAL_SITES = ["ml", "l", "dl"];

// ─── Size constants (match editable chart exactly) ────────────────────────────
const CELL_W = 28;
const CELL_H = 28;
const WIDE_W = 84;
const TOOTH_H = 46;
const LABEL_W = 130;
const FONT_DATA = 12;
const FONT_LABEL = 11;
const FONT_TOOTH = 16;

// ─── Styles ───────────────────────────────────────────────────────────────────
const baseCell = {
    width: CELL_W, height: CELL_H, border: "1px solid #999",
    textAlign: "center", verticalAlign: "middle",
    fontSize: FONT_DATA, padding: 0, background: "#fff", boxSizing: "border-box",
};
const S = {
    cell: { ...baseCell },
    yellowCell: { ...baseCell, background: "#FFFF00" },
    wideCell: { ...baseCell, width: WIDE_W },
    value: {
        width: "100%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: FONT_DATA, fontWeight: 600, color: "#111",
        background: "transparent",
    },
    labelTd: {
        fontSize: FONT_LABEL, fontWeight: 700, whiteSpace: "nowrap",
        paddingRight: 8, paddingLeft: 4, textAlign: "right", verticalAlign: "middle",
        color: "#111", width: LABEL_W, height: CELL_H,
        background: "#f7f7f7", borderRight: "2px solid #bbb",
    },
    toothTd: {
        width: WIDE_W, height: TOOTH_H, textAlign: "center", verticalAlign: "middle",
        fontWeight: 900, fontSize: FONT_TOOTH, border: "2px solid #555",
        background: "linear-gradient(135deg, #e8e8e8, #f5f5f5)",
        color: "#222", letterSpacing: 1,
    },
    divTd: { width: 8, background: "#333", border: "none", padding: 0 },
    bannerTd: { textAlign: "center", fontWeight: 900, fontSize: 13, padding: "5px 0", letterSpacing: 4, color: "#fff" },
};

const BANNER_BUCCAL = { background: "#1a6fb5" };
const BANNER_LINGUAL = { background: "#2e7d32" };
const BUCCAL_HEADERS = ["MB", "B", "DB"];
const LINGUAL_HEADERS = ["ML", "L", "DL"];

// ─── Build lookup: toothNumber → tooth object ─────────────────────────────────
function buildToothMap(chart) {
    const map = {};
    for (const t of chart) map[t.tooth] = t;
    return map;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ViewPeriodontalChart({ file }) {
    const chart = file?.departmentData?.periodontalChart ?? [];

    if (!chart.length) return <p className="text-muted">No periodontal chart data available.</p>;

    const toothMap = buildToothMap(chart);

    // ── Cell renderers ────────────────────────────────────────────────────────

    const ValueCell = ({ value, yellow }) => (
        <td style={yellow ? S.yellowCell : S.cell}>
            <div style={{ ...S.value, background: yellow ? "#FFFF00" : "transparent" }}>
                {value ?? ""}
            </div>
        </td>
    );

    // 3 site cells per tooth
    const renderSiteRow = (label, teeth, field, sites, yellow = false, key) => (
        <tr key={key}>
            <td style={S.labelTd}>{label}</td>
            {teeth.map((tn, i) => {
                const t = toothMap[tn] ?? {};
                return [
                    i === 8 ? <td key={`div-${i}-${key}`} style={S.divTd} /> : null,
                    ...sites.map((s) => (
                        <ValueCell key={`${tn}-${s}`} value={t[field]?.[s]} yellow={yellow} />
                    )),
                ];
            })}
        </tr>
    );

    // Single value spanning 3 cols per tooth
    const renderScalarRow = (label, teeth, field, key) => (
        <tr key={key}>
            <td style={S.labelTd}>{label}</td>
            {teeth.map((tn, i) => {
                const t = toothMap[tn] ?? {};
                return [
                    i === 8 ? <td key={`div-${i}-${key}`} style={S.divTd} /> : null,
                    <td key={tn} style={S.wideCell} colSpan={3}>
                        <div style={S.value}>{t[field] ?? ""}</div>
                    </td>,
                ];
            })}
        </tr>
    );

    const renderToothRow = (teeth) => (
        <tr key="tooth-row">
            <td style={{ ...S.labelTd, background: "#eee" }} />
            {teeth.map((tn, i) => [
                i === 8 ? <td key={`div-tooth-${i}`} style={S.divTd} /> : null,
                <td key={tn} style={S.toothTd} colSpan={3}>{tn}</td>,
            ])}
        </tr>
    );

    const renderSiteHeader = (teeth, headers, bgColor, key) => (
        <tr key={key}>
            <td style={{ ...S.labelTd, fontSize: 9, color: "#666", background: bgColor }} />
            {teeth.map((tn, i) => [
                i === 8 ? <td key={`div-sh-${i}`} style={S.divTd} /> : null,
                ...headers.map((h, hi) => (
                    <td key={`${tn}-h-${hi}`} style={{
                        width: CELL_W, height: 18, textAlign: "center",
                        fontSize: 9, fontWeight: 700, color: "#555",
                        background: bgColor, border: "1px solid #ddd", padding: 0,
                    }}>{h}</td>
                )),
            ])}
        </tr>
    );

    const renderBanner = (label, bannerStyle, key) => (
        <tr key={key}>
            <td style={{ ...S.labelTd, background: bannerStyle.background, borderRight: "none" }} />
            <td colSpan={24} style={{ ...S.bannerTd, ...bannerStyle }}>{label}</td>
            <td style={S.divTd} />
            <td colSpan={24} style={{ ...S.bannerTd, ...bannerStyle }}>{label}</td>
        </tr>
    );

    // ── Layout ────────────────────────────────────────────────────────────────
    const tbl = {
        borderCollapse: "collapse",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        fontSize: FONT_DATA,
        width: "max-content",
    };

    const SideLabel = ({ children, color }) => (
        <div style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontWeight: 900, fontSize: 13, letterSpacing: 5,
            background: color, color: "#fff", padding: "8px 4px",
            textAlign: "center", userSelect: "none", minWidth: 26,
            alignSelf: "stretch", display: "flex",
            alignItems: "center", justifyContent: "center",
            borderRadius: "4px 0 0 4px",
        }}>{children}</div>
    );

    const ArchSection = ({ label, color, children }) => (
        <div style={{ display: "flex", alignItems: "stretch", marginBottom: 16 }}>
            <SideLabel color={color}>{label}</SideLabel>
            <div style={{
                border: `2px solid ${color}`, borderLeft: "none",
                borderRadius: "0 6px 6px 0", overflow: "hidden",
                boxShadow: "2px 4px 12px rgba(0,0,0,0.10)",
            }}>{children}</div>
        </div>
    );

    return (
        <div style={{ overflowX: "auto", padding: 16, fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f4f6f9", borderRadius: 8 }}>
            <div style={{ display: "inline-block" }}>

                {/* UPPER ARCH */}
                <ArchSection label="BUCCAL" color={BANNER_BUCCAL.background}>
                    <table style={tbl}>
                        <tbody>
                            {renderSiteHeader(UPPER_TEETH, BUCCAL_HEADERS, "#dbeafe", "uh-buccal")}
                            {renderScalarRow("Mobility", UPPER_TEETH, "mobility", "u-mob")}
                            {renderScalarRow("Furcation", UPPER_TEETH, "furcation", "u-fur-b")}
                            {renderSiteRow("Gingival Recession", UPPER_TEETH, "recession", BUCCAL_SITES, false, "u-rec-b")}
                            {renderSiteRow("Probing Depth", UPPER_TEETH, "probing", BUCCAL_SITES, false, "u-prob-b")}
                            {renderBanner("BUCCAL", BANNER_BUCCAL, "u-buccal-banner")}
                            {renderSiteRow("BOP", UPPER_TEETH, "bop", BUCCAL_SITES, true, "u-bop-b")}
                            {renderSiteRow("PI", UPPER_TEETH, "pi", BUCCAL_SITES, true, "u-pi-b")}
                            {renderToothRow(UPPER_TEETH)}
                            {renderScalarRow("Furcation", UPPER_TEETH, "furcation", "u-fur-l")}
                            {renderSiteRow("Gingival Recession", UPPER_TEETH, "recession", LINGUAL_SITES, false, "u-rec-l")}
                            {renderSiteRow("Probing Depth", UPPER_TEETH, "probing", LINGUAL_SITES, false, "u-prob-l")}
                            {renderBanner("LINGUAL", BANNER_LINGUAL, "u-lingual-banner")}
                            {renderSiteRow("PI", UPPER_TEETH, "pi", LINGUAL_SITES, true, "u-pi-l")}
                            {renderSiteRow("PBI", UPPER_TEETH, "bop", LINGUAL_SITES, true, "u-pbi-l")}
                            {renderSiteHeader(UPPER_TEETH, LINGUAL_HEADERS, "#d1fae5", "uh-lingual")}
                        </tbody>
                    </table>
                </ArchSection>

                {/* LOWER ARCH */}
                <ArchSection label="LINGUAL" color={BANNER_LINGUAL.background}>
                    <table style={tbl}>
                        <tbody>
                            {renderSiteHeader(LOWER_TEETH, LINGUAL_HEADERS, "#d1fae5", "lh-lingual")}
                            {renderSiteRow("BOP", LOWER_TEETH, "bop", LINGUAL_SITES, true, "l-bop-l")}
                            {renderSiteRow("PI", LOWER_TEETH, "pi", LINGUAL_SITES, true, "l-pi-l")}
                            {renderBanner("LINGUAL", BANNER_LINGUAL, "l-lingual-banner")}
                            {renderScalarRow("Furcation", LOWER_TEETH, "furcation", "l-fur-l")}
                            {renderSiteRow("Gingival Recession", LOWER_TEETH, "recession", LINGUAL_SITES, false, "l-rec-l")}
                            {renderSiteRow("Probing Depth", LOWER_TEETH, "probing", LINGUAL_SITES, false, "l-prob-l")}
                            {renderToothRow(LOWER_TEETH)}
                            {renderSiteRow("PI", LOWER_TEETH, "pi", BUCCAL_SITES, true, "l-pi-b")}
                            {renderSiteRow("PBI", LOWER_TEETH, "bop", BUCCAL_SITES, true, "l-pbi-b")}
                            {renderBanner("BUCCAL", BANNER_BUCCAL, "l-buccal-banner")}
                            {renderSiteRow("Gingival Recession", LOWER_TEETH, "recession", BUCCAL_SITES, false, "l-rec-b")}
                            {renderSiteRow("Probing Depth", LOWER_TEETH, "probing", BUCCAL_SITES, false, "l-prob-b")}
                            {renderScalarRow("Furcation", LOWER_TEETH, "furcation", "l-fur-b")}
                            {renderScalarRow("Mobility", LOWER_TEETH, "mobility", "l-mob")}
                            {renderSiteHeader(LOWER_TEETH, BUCCAL_HEADERS, "#dbeafe", "lh-buccal")}
                        </tbody>
                    </table>
                </ArchSection>
            </div>

            {/* Legend */}
            <div style={{
                marginTop: 12, fontSize: 11, color: "#555", padding: "8px 12px",
                background: "#fff", borderRadius: 6, display: "inline-flex",
                gap: 20, border: "1px solid #ddd",
            }}>
                <span><strong>PBI:</strong> Bleeding On Probing</span>
                <span><strong>PI:</strong> Plaque Index</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 16, height: 16, background: "#FFFF00", border: "1px solid #bbb", display: "inline-block", borderRadius: 2 }} />
                    Yellow = BOP / PI cells
                </span>
            </div>
        </div>
    );
}