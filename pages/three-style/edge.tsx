import edgeThreeStyles from "../../data/three-style/edge.json";
import edges from "../../data/edges.json";
import { useState } from "react";
import Title from "../../components/title";

const Edge = () => {
  const [buffer, setBuffer] = useState("UF");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [search, setSearch] = useState("");
  const getLabel = (parts: string) =>
    edges.find((edge) => edge.parts === parts)?.label;
  const swap = () => {
    setThird(second);
    setSecond(third);
  };
  const isSameParts = (a: string, b: string): boolean => {
    return a.split("").sort().join() === b.split("").sort().join();
  };
  return (
    <>
      <Title title="Edge 3-Style" />
      <h1>Edge 3-Style</h1>
      <span className="label-text">Buffer</span>
      <select
        className="select select-bordered"
        value={buffer}
        onChange={(event) => {
          setBuffer(event.target.value);
        }}
      >
        <option value="">--</option>
        {edges
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
        {edges
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
        {edges
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
          {edgeThreeStyles
            .filter((edgeThreeStyle) => {
              return (
                (buffer ? edgeThreeStyle.buffer === buffer : true) &&
                (second ? edgeThreeStyle.second === second : true) &&
                (third ? edgeThreeStyle.third === third : true) &&
                (search ? edgeThreeStyle.algorithm.includes(search) : true)
              );
            })
            .map((edgeThreeStyle) => (
              <tr className="hover" key={edgeThreeStyle.id}>
                <td>
                  {edgeThreeStyle.buffer} ({getLabel(edgeThreeStyle.buffer)})
                </td>
                <td>
                  {edgeThreeStyle.second} ({getLabel(edgeThreeStyle.second)})
                </td>
                <td>
                  {edgeThreeStyle.third} ({getLabel(edgeThreeStyle.third)})
                </td>
                <td>{edgeThreeStyle.algorithm}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Edge;
