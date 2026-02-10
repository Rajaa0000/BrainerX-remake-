'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./CourseTopic.module.css";

// Define types
type CourseItem = {
  id: string;
  name: string;
  goal: string;
  organizer: string;
  reviews?: string[]; // optional array of strings
};

type TopicCourses = {
  topic: string;
  courses: CourseItem[];
};

function CourseTopic() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic")|| "";;

  const [topicCourses, setTopicCourses] = useState<TopicCourses[] | null>(null);
  

  // === Fetch courses ===
  useEffect(() => {
    if (!topic) return;
    async function fetchTopicCourses() {
      try {
        const res = await fetch(`/api/courseTopic?topic=${encodeURIComponent(topic)}`);
        const data: TopicCourses[] = await res.json();
        setTopicCourses(data);
      } catch (error) {
        console.error("Error fetching topic courses:", error);
      }
    }
    fetchTopicCourses();
  }, [topic]);



  // === Render courses ===
  const oneTopicCourses = topicCourses?.[0]?.courses?.map((item: CourseItem) => (
    <article key={item.id} className={styles.oneDiv}>
      <Link
        href={`/courses/${item.id}?topic=${topicCourses[0].topic}`}
        
        className="block"
      >
        <div className="text-[#213e69] font-[500]">
          {topicCourses[0].topic}
        </div>

        <h3 className="text-[#213e69] font-semibold">{item.name}</h3>
        <p>{item.goal}</p>

        <div className="flex gap-4 items-center mt-2">
          <div className="flex items-center gap-2 text-black">
            <Image
              src="/images/organizer.jpg"
              width={32}
              height={32}
              alt="Organizer logo"
              className="rounded-full object-cover w-8 h-8"
            />
            <p className="text-black">{item.organizer}</p>
          </div>

          <div className={styles.miniDiv}>
            <FontAwesomeIcon icon={faMessage} className="text-[#3763a5]" />
            <p>{item.reviews?.length ?? 0}</p>
          </div>
        </div>
      </Link>
    </article>
  ));

  return (
    <div className="flex flex-col gap-[1rem] py-[2rem] md:grid md:grid-cols-2 md:gap-x-[3rem] md:px-[3rem]">
      {!topicCourses ? "Loading..." : oneTopicCourses}
    </div>
  );
}

export default CourseTopic;
