import "./Container.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Container = () => {
  const [data, Setdata] = useState([]);
  const [listContainer, setListContainer] = useState("Skill");
  const lists = ["Skill", "Football", "Story", "Game"];

  useEffect(() => {
    async function Getdata() {
      const res = await axios.get(`/api/${listContainer}`);
      return res;
    }
    Getdata().then((res) => Setdata(res.data));
    Getdata().catch((err) => console.log("err"));
  }, [listContainer]);

  return (
    <div className="Container">
      <div className="Container-title">
        <h1>Some favorite models</h1>
      </div>
      <div className="List-favorite-link">
        {lists.map((item) => {
          return (
            <li
              className="Active"
              onClick={() => setListContainer(item)}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </div>
      <div className="List">
        {data.map((items) => {
          return (
            <div key={items.id} className="Active">
              <img src={items.img} alt="" />
              <span>{items.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
