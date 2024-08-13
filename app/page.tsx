"use client";
import DetailModal from "@/components/detailModal";
import { useState } from "react";
import type { Data } from "@/types/data";

export default function Home() {


  const data:Data[] = [
    {
      userName: "aaa",
      userId: "aaa"
    },
    {
      userName: "bbb",
      userId: "bbb"
    },
    {
      userName: "ccc",
      userId: "ccc"
    }

  ]
  const [ modalIsOpen, setIsOpen ] = useState(false);
  const [ selectedData, setSelectedData ] = useState({} as Data);

  const handleSetModal = (data:Data) => {
    setSelectedData(data);
    setIsOpen(true);
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-10">
    <table className="border-collapse">
      <thead>
        <tr>
          <th>userName</th>
          <th>userId</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} onClick={() => handleSetModal(item)}>
            <td>{item.userName}</td>
            <td>{item.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <DetailModal isOpen={modalIsOpen} setIsOpen={setIsOpen} selectedData={selectedData} />
    </div>
  );
}
