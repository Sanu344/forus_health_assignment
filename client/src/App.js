import "./App.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
let model = ["A", "B", "C", "D", "E"];
let vehicles = ["a", "b", "c", "d", "e", "f", "g"];
function App() {
  const [form, setForm] = useState(true);
  const [wheels, setWheels] = useState(false);
  const [vehicleType, setVehicleType] = useState(false);
  const [models, setModels] = useState(false);
  const [w, setW] = useState();
  const [type, setType] = useState();
  const [vehicle, setVehicle] = useState();
  const [submit, setSubmit] = useState(false);
  const [submitWheel, setSubmitWheel] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [datePicker, setDatePicker] = useState(false);
  const [disableSubmitType, setDisableSubmitType] = useState(false);
  const [modelSubmitType, setModelSubmitType] = useState(false);
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    if (first) {
      if (last) setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [first]);
  useEffect(() => {
    if (last) {
      if (first) setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [last]);

  function onSubmitNameForm(data) {
    console.log(data.firstName);
    console.log(data.lastName);
    const name = data.firstName + " " + data.lastName;
    localStorage.setItem("name", JSON.stringify(name));
    setForm(false);
    setWheels(true);
  }

  function onWheelsRadio(data) {
    const wh = w;
    console.log(wh);
    localStorage.setItem("wheels", JSON.stringify(wh));
    setWheels(false);
    setVehicleType(true);
  }

  function onSelectType() {
    const t = type;
    console.log(t);
    localStorage.setItem("type", JSON.stringify(t));
    setVehicleType(false);
    setModels(true);
  }
  function onSelectVehicle() {
    const v = vehicle;
    console.log(v);
    localStorage.setItem("vehicle", JSON.stringify(v));
    setModels(false);
    setDatePicker(true);
  }

  return (
    <>
      <div className="container">
        {form && (
          <div className="name">
            <form
              onSubmit={handleSubmit(onSubmitNameForm)}
              className="nameForm"
            >
              <br />

              <p className="firstName">First Name</p>

              <input
                {...register("firstName")}
                onChange={(e) => setFirst(e.target.value)}
                type="text"
                className="inputFirst"
                placeholder="First Name"
              />
              <br />
              <br />
              <p className="lastName">Last Name</p>
              <input
                {...register("lastName")}
                onChange={(e) => setLast(e.target.value)}
                type="text"
                className="inputLast"
                placeholder="Last Name"
              />
              <br />
              <br />
              <br />
              <button type="submit" className="nameSubmit" disabled={!submit}>
                Next
              </button>
            </form>
          </div>
        )}
        {wheels && (
          <div className="wheels">
            <form onSubmit={handleSubmit(onWheelsRadio)} className="wheelForm">
              <br />
              <br />
              <label>Number of wheels:</label>
              <br />
              <br />
              <input
                type="radio"
                id="twoWheels"
                name="wheels"
                value="2"
                onChange={() => {
                  setSubmitWheel(true);
                  setW(2);
                }}
              />
              <label htmlFor="twoWheels">2</label>
              <br />
              <br />

              <input
                type="radio"
                id="fourWheels"
                name="wheels"
                value="4"
                onChange={() => {
                  setSubmitWheel(true);
                  setW(4);
                }}
              />
              <label htmlFor="fourWheels">4</label>
              <br />
              <br />

              <button
                type="submit"
                className="nameSubmit"
                disabled={!submitWheel}
              >
                Next
              </button>
            </form>
          </div>
        )}
        {vehicleType && (
          <div className="type">
            <form onSubmit={handleSubmit(onSelectType)} className="vehicleType">
              <br />
              <label>Vehicle Type</label>
              <br />
              <div className="insideType">
                {model.map((e) => {
                  return (
                    <div key={"div" + e}>
                      <br key={"linebreak1" + e} />
                      <input
                        type="radio"
                        id={e}
                        name={e}
                        value={e}
                        key={e}
                        onChange={() => {
                          setType(e);
                          setDisableSubmitType(true);
                        }}
                      />
                      <label key={"label" + e}>{e}</label>
                      <br key={"linebreak2" + e} />
                    </div>
                  );
                })}
              </div>
              <button disabled={!disableSubmitType} className="typeSubmit">
                Next
              </button>
            </form>
          </div>
        )}
        {models && (
          <div className="model">
            <form
              onSubmit={handleSubmit(onSelectVehicle)}
              className="vehicleType"
            >
              <br />
              <label>Vehicles Available</label>
              <br />
              <div className="insideType">
                {vehicles.map((e) => {
                  return (
                    <div key={"div" + e}>
                      <br key={"linebreak1" + e} />
                      <input
                        type="radio"
                        id={e}
                        name={e}
                        value={e}
                        key={e}
                        onChange={() => {
                          setVehicle(e);
                          setModelSubmitType(true);
                        }}
                      />
                      <label key={"label" + e}>{e}</label>
                      <br key={"linebreak2" + e} />
                    </div>
                  );
                })}
              </div>
              <button disabled={!modelSubmitType} className="typeSubmit">
                Next
              </button>
            </form>
          </div>
        )}
        {datePicker && <div className="date"></div>}
      </div>
    </>
  );
}

export default App;
