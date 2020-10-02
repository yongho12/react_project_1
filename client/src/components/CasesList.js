import React, { useEffect } from "react";
import { fetchCases, fetchTotal, createNewCase } from "../actions/caseActions";
import { useDispatch, useSelector } from "react-redux";

function CasesList(props) {
  const dispatch = useDispatch();
  const cases = useSelector(state => state.cases);
  const total = useSelector(state => state.total);
  const newCase = useSelector(state => state.newCase);



// let newcase = {
//   patientName: "haha",
//   providerId: 1,
//   submitDate: new Date(),
//   createdAt:new Date(),
//   updatedAt:new Date(),
// };


  useEffect(() => {
   dispatch(fetchCases());
   dispatch(fetchTotal());
  //  dispatch(createNewCase(newcase));

  }, []);
 
  console.log("CREATE NEW::::", newCase);

  return (
    <>
      <div>
        <h1>Total Count: {cases.length} </h1>
      </div>
      <div>
        <table className="table-cases">
          <thead>
            <tr>
              <th></th>
              <th>Case #</th>
              <th>Provider</th>
              <th>Patient</th>
              <th>Technician</th>
              <th>Clinician</th>
              <th>Submit Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((ca) => (
              <tr key={ca.id}>
                <td>{ca.id}</td>
                <td>{ca.User.username}</td>
                <td>{ca.patientName}</td>
                <td>{ca.technicianId}</td>
                <td>{ca.submitDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CasesList;
