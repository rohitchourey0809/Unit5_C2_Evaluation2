import { useState, useEffect } from "react"
export const ShowStudents = () => {
  const [inputdata, setinput] = useState([])
  const [sort, setsort] = useState()

  const getdata = async () => {
    const res = await fetch("http://localhost:8080/students")
      .then((d) => d.json())


    setinput(res)

  }

  useEffect(() => {
    getdata()
  }, [])

  const handlesort = () => {
    const data = inputdata
    if (sort) {
      let sorted = data.sort((a, b) => a[1] - b[1])
      setinput(sorted)
      setsort(!sort)
    }
    else {
      let sorted = data.sort((a, b) => b[1] - a[1])
      setinput(sorted)
      setsort(!sort)
    }
  }

  const filter = (e) => {
    console.log("filter", e.target.value)
    // const { name, value } = e.target
    // setinput({ ...inputdata, [name]: value })

    setinput(e.target.value)

  }
  console.log(filter)

  const order = (e) => {
    // const { name, value } = e.target
    // setinput({ ...inputdata, [name]: value })
    // console.log(e.target.value)
    setinput(e.target.value)

  }
  console.log(order)


  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            onChange={filter}
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            onChange={order}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button onClick={handlesort} className="sort">sort</button>
      </div>
      {inputdata.map((e) => {
        return <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
              <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{e.age}</td>
              <td className="tenth_score">{e.tenth_score}</td>
              <td className="twelth_score">{e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
          </tbody>
        </table>
      })}
    </div>
  );
};
