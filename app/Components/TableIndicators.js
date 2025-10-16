export default function TableIndicators() {
    return (
        <div className="table-responsive mt-4">
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th scope="col">SCORE</th>
                        <th scope="col">BLEEDING ON GENTLE PROBING</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td scope="row">0</td>
                        <td>No bleeding</td>
                    </tr>
                    <tr class="">
                        <td scope="row">1</td>
                        <td>Only one bleeding point appearing</td>
                    </tr>
                    <tr class="">
                        <td scope="row">2</td>
                        <td>Several isolated bleeding points or a small blood area appearing</td>
                    </tr>
                    <tr class="">
                        <td scope="row">3</td>
                        <td>Interdental triangle filled with blood soon after probing</td>
                    </tr>
                    <tr class="">
                        <td scope="row">4</td>
                        <td>Profuse bleeding when probing blood spreads towards the marginal gingiva</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}