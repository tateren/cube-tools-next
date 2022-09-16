import cornerThreeStyles from "../../data/three-style/corner.json";
import corners from "../../data/corners.json";
import { useState } from "react";

const Corner = () => {
  const [buffer, setBuffer] = useState("UFR");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [search, setSearch] = useState("");
  const getLabel = (parts: string) =>
    corners.find((edge) => edge.parts === parts)?.label;
  const swap = () => {
    setThird(second);
    setSecond(third);
  };
  const isSameParts = (a: string, b: string): boolean => {
    return a.split("").sort().join() === b.split("").sort().join();
  };
  return (
    <>
      <h1>Corner 3-Style</h1>
      <span className="label-text">Buffer</span>
      <select
        className="select select-bordered"
        value={buffer}
        onChange={(event) => {
          setBuffer(event.target.value);
        }}
      >
        <option value="">--</option>
        {corners
          .filter((edge) => {
            return (
              !isSameParts(edge.parts, second) &&
              !isSameParts(edge.parts, third)
            );
          })
          .map((edge, index) => (
            <option value={edge.parts} key={index}>
              {edge.parts} ({edge.label})
            </option>
          ))}
      </select>
      <span className="label-text">2nd</span>
      <select
        className="select select-bordered"
        value={second}
        onChange={(event) => {
          setSecond(event.target.value);
        }}
      >
        <option value="">--</option>
        {corners
          .filter((edge) => {
            return (
              !isSameParts(edge.parts, buffer) &&
              !isSameParts(edge.parts, third)
            );
          })
          .map((edge, index) => (
            <option value={edge.parts} key={index}>
              {edge.parts} ({edge.label})
            </option>
          ))}
      </select>
      <span className="label-text">3rd</span>
      <select
        className="select select-bordered"
        value={third}
        onChange={(event) => {
          setThird(event.target.value);
        }}
      >
        <option value="">--</option>
        {corners
          .filter((edge) => {
            return (
              !isSameParts(edge.parts, buffer) &&
              !isSameParts(edge.parts, second)
            );
          })
          .map((edge, index) => (
            <option value={edge.parts} key={index}>
              {edge.parts} ({edge.label})
            </option>
          ))}
      </select>
      <span className="label-text">Search</span>
      <input
        type="text"
        name="search"
        placeholder="Algorithm"
        className="input input-bordered"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="btn btn-outline" onClick={swap}>
        swap
      </button>
      <table
        className="table w-full table-compact my-4 shadow-xl rounded"
        data-theme="halloween"
      >
        <thead>
          <tr>
            <th>Buffer</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>Algorithm</th>
          </tr>
        </thead>
        <tbody>
          {cornerThreeStyles
            .filter((cornerThreeStyle) => {
              return (
                (buffer ? cornerThreeStyle.buffer === buffer : true) &&
                (second ? cornerThreeStyle.second === second : true) &&
                (third ? cornerThreeStyle.third === third : true) &&
                (search ? cornerThreeStyle.algorithm.includes(search) : true)
              );
            })
            .map((cornerThreeStyle) => (
              <tr className="hover" key={cornerThreeStyle.id}>
                <td>
                  {cornerThreeStyle.buffer} ({getLabel(cornerThreeStyle.buffer)}
                  )
                </td>
                <td>
                  {cornerThreeStyle.second} ({getLabel(cornerThreeStyle.second)}
                  )
                </td>
                <td>
                  {cornerThreeStyle.third} ({getLabel(cornerThreeStyle.third)})
                </td>
                <td>{cornerThreeStyle.algorithm}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Corner;
