"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

export default function TopicList() {
  // const { topics } = await getTopics();
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/topics")
      .then((res) => setTopics(res.data.topics));
  }, []);
  // console.log("topics, topics", topics);
  return (
    <>
      {topics.map((t) => (
          <div
            className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'
            key={t._id}>
            <div>
              <h2 className='font-bold text-2xl'>{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div>
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
