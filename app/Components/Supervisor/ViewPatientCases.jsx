"use client";

import Link from "next/link";
import { useState } from "react";

export default function ViewPatientCases() {
  const [search, setSearch] = useState("");

  return (
    <div className="border rounded p-3 mt-3">
      <div className="input-group my-3">
        <div className="input-group-prepend">
          <label
            className="input-group-text text-secondary bg-white border-end-0 p-3"
            htmlFor="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
          </label>
        </div>
        <input
          type="search"
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="border-start-0 form-control p-3"
          placeholder="Search by patient name or student name"
          aria-label="Search"
          aria-describedby="Search"
        />
      </div>

      <div className="card border shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle rounded">
              <thead className="table-light text-center rounded">
                <tr>
                  <th>Patient Name</th>
                  <th>Student Name</th>
                  <th>Procedure</th>
                  <th>Step Number</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="text-center">
                <tr>
                  <td class="fw-semibold">Sarah Johnson</td>
                  <td class="text-muted">Mohammed Ali</td>
                  <td class="text-muted">Root Canal Treatment</td>
                  <td class="text-muted">Step 2</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      Review Step
                    </button>
                  </td>
                </tr>

                <tr>
                  <td class="fw-semibold">Ahmed Hassan</td>
                  <td class="text-muted">Fatima Zahra</td>
                  <td class="text-muted">Crown Preparation</td>
                  <td class="text-muted">Step 1</td>
                  <td>
                    <button class="btn btn-primary btn-sm">Review Step</button>
                  </td>
                </tr>

                <tr>
                  <td class="fw-semibold">Emily Chen</td>
                  <td class="text-muted">Omar Khalid</td>
                  <td class="text-muted">Tooth Extraction</td>
                  <td class="text-muted">Step 3</td>
                  <td>
                    <button class="btn btn-primary btn-sm">Review Step</button>
                  </td>
                </tr>

                <tr>
                  <td class="fw-semibold">Michael Brown</td>
                  <td class="text-muted">Layla Mansour</td>
                  <td class="text-muted">Cavity Filling</td>
                  <td class="text-muted">Step 2</td>
                  <td>
                    <Link href={""} class="btn btn-primary btn-sm">
                      Review Case
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
