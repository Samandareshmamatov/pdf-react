import React from "react";
import Logoheader from "../assets/img/tourism_logo.png";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import InnerInputs from "./InnerInputs";

const Home = () => {
  const [data, setData] = React.useState({
    name: "Abdujabbor",
    lastName: "To'rayev",
    givenName: "Bahodirovich",
    numberRoom: 28,
    birth: "1981-03-25",
    nationality: "Uzbekistan",
    passport: "AA2584561, Berilgan: Sardoba Tumani IIV",
    visa: "",
    come: "Kazakhstan",
    kpp: "",
    leaveTime: "25-02-2023 14:50",
    comeTime: "18-02-2023 23:12",
    admission: "Shahloxon To'rayeva",
    childData: []
  });
  const [save, setSave] = React.useState(false);
    const [childData, setChildData] = React.useState([]);
  const handleChanger = (e) => {
    setData((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  React.useEffect(() => {
    setData((p) => {return {...p, childData}})
  }, [childData])

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    setSave(true);
    console.log(data);
  };

  const newUser = () => {
    setSave(false);
    setData({
      name: "",
      lastName: "",
      givenName: "",
      numberRoom: 0,
      birth: "",
      nationality: "",
      passport: "",
      visa: "",
      come: "",
      kpp: "",
      leaveTime: "",
      comeTime: "",
      admission: "",
      childData: [],
    });
  }

  return (
    <div className="home">
      <div className="container home__container">
        <div className="home__header">
          <div className="home__logo-block">
            <a className="home__logo" href="https://emehmon.uz/">
              eMehmon
            </a>
          </div>
          <div className="home__logo-block">
            <img src={Logoheader} alt="logo" />
          </div>
        </div>
        {save ? (
          ""
        ) : (
          <form onSubmit={submitData} className="inputs__box">
            <div className="input__block">
              <input
                className="swing"
                type="text"
                autoComplete="off"
                required
                value={data.name}
                name="name"
                onChange={handleChanger}
                placeholder="Mijozning ismini kiriting..."
              />
              <div>Name</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                type="text"
                autoComplete="off"
                required
                value={data.lastName}
                onChange={handleChanger}
                name="lastName"
                placeholder="Boltavoyev"
              />
              <div>Surname</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                type="text"
                onChange={handleChanger}
                autoComplete="off"
                name="givenName"
                value={data.givenName}
                placeholder="Tashaevich"
              />
              <div>Middle name</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                autoComplete="off"
                required
                onChange={handleChanger}
                type="date"
                name="birth"
                defaultValue={data.birth}
                placeholder="19.11.1991"
              />
              <div>Birth</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                onChange={handleChanger}
                type="text"
                autoComplete="off"
                value={data.nationality}
                required
                name="nationality"
                placeholder="Uzbekistan"
              />
              <div>Nationality</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                type="text"
                autoComplete="off"
                required
                value={data.passport}
                onChange={handleChanger}
                name="passport"
                placeholder="Passport:AA0000000, Berilgan: Toshkent Shahar IIB"
              />
              <div>Document</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                autoComplete="off"
                onChange={handleChanger}
                type="text"
                name="visa"
                value={data.visa}
                placeholder="Visa... 🤔"
              />
              <div>Visa</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                onChange={handleChanger}
                autoComplete="off"
                type="text"
                name="come"
                value={data.come}
                placeholder="Qayerdan kelyapti..."
              />
              <div>Come</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                onChange={handleChanger}
                autoComplete="off"
                type="text"
                name="kpp"
                value={data.kpp}
                placeholder="KPP..."
              />
              <div>KPP</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                onChange={handleChanger}
                type="text"
                name="comeTime"
                value={data.comeTime}
                placeholder="Kelgan vaqti..."
              />
              <div>Coming Time</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                autoComplete="off"
                required
                value={data.leaveTime}
                onChange={handleChanger}
                type="text"
                name="leaveTime"
                placeholder="Ketgan vaqti..."
              />
              <div>Leave</div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                autoComplete="off"
                required
                onChange={handleChanger}
                type="number"
                min={1}
                value={data.numberRoom}
                name="numberRoom"
                placeholder="Xona raqamini kiriting..."
              />
              <div>Room</div>
            </div>
            <div className="input__block has-child-block">
              <div className="has-child-div">Has Children</div>
              <div className="has-child">
                <InnerInputs
                  childData={childData}
                  setChildData={setChildData}
                />
              </div>
            </div>
            <div className="input__block">
              <input
                className="swing"
                autoComplete="off"
                required
                onChange={handleChanger}
                type="text"
                name="admission"
                value={data.admission}
                placeholder="🙃 Gulchapchap Yusupova ..."
              />
              <div>Admin</div>
            </div>

            <div className="btns-block">
              <button
                type="submit"
                onClick={() => setSave(true)}
                className="save-btn"
              >
                {save ? "Saved ✔️" : "Save"}
              </button>
            </div>
          </form>
        )}
        <>
          {save ? (
            <div className="saved-btns">
              <button className="new-user-btn" onClick={() => newUser()}>
                New User
              </button>
              <button className="edit-btn" onClick={() => setSave(false)}>
                Edit User Data
              </button>
              <PDFDownloadLink
                document={<PDFFile data={data} />}
                fileName="eMehmon_client"
              >
                <button className="download-btn">📩 Download PDF</button>
              </PDFDownloadLink>
            </div>
          ) : (
            ""
          )}
        </>
      </div>
    </div>
  );
};

export default Home;
