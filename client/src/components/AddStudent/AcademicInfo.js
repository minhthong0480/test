import React from 'react'

const AcademicInfo = () => {
  return (
    <>
          <h2 className="form-title" id="academic">Academic Details</h2>
        <table className="table text-left table-border">
            <thead>
                <tr className='table-keys'>
                    <th scope="col">Subjects</th>
                    <th scope="col">1st Unit Test</th>
                    <th scope="col">2nd Unit Test</th>
                    <th scope="col">Annual test</th>
                </tr>
                <tr>
                    <th scope="row">English</th>
                    <td><input typee='text' name="eng-1st" placeholder='English mark of 1st UT'></input></td>
                    <td><input typee='text' name="eng-2nd" placeholder='English mark of 2nd UT'></input></td>
                    <td><input typee='text' name="eng-annual" placeholder='English mark of Final'></input></td>
                </tr>
                <tr>
                    <th scope="row">Math</th>
                    <td><input typee='text' name="math-1st" placeholder='Math mark of 1st UT'></input></td>
                    <td><input typee='text' name="math-2nd" placeholder='Math mark of 2nd UT'></input></td>
                    <td><input typee='text' name="math-annual" placeholder='Math mark of Final'></input></td>
                </tr>
                <tr>
                    <th scope="row">History</th>
                    <td><input typee='text' name="his-1st" placeholder='History mark of 1st UT'></input></td>
                    <td><input typee='text' name='his-2nd' placeholder='History mark of 2nd UT'></input></td>
                    <td><input typee='text' name='his-annual' placeholder='History mark of Final'></input></td>
                </tr>
                <tr>
                    <th scope="row">Geography</th>
                    <td><input typee='text' name='geo-1st' placeholder='Geograpy mark of 1st UT'></input></td>
                    <td><input typee='text' name='geo-2nd' placeholder='Geography mark of 2nd UT'></input></td>
                    <td><input typee='text' name='geo-annual' placeholder='Geograply mark of Final'></input></td>
                </tr>
                <tr>
                    <th scope="row">Science</th>
                    <td><input typee='text' name='sci-1st' placeholder="Science mark of 1st UT"></input></td>
                    <td><input typee='text' name='sci-2nd' placeholder="Science mark of 2nd UT"></input></td>
                    <td><input typee='text' name='sci-annual' placeholder='Science mark of Finals'></input></td>
                </tr>
                <tr>
                    <th scope="row">Biology</th>
                    <td><input typee='text' name='bio-1st' placeholder='Biology mark of 1st UT'></input></td>
                    <td><input typee='text' name='bio-2nd' placeholder='Biology mark of 2nd UT'></input></td>
                    <td><input typee='text' name='bio-annual' placeholder='Biology mark of Final'></input></td>
                </tr>
            </thead>
        </table>
    </>
  )
}

export default AcademicInfo