import CoursePage from "@/components/courses/coursePage";

type PageProps = {
  params: {
    id: string;
  };
  searchParams: {
    topic?: string;
  };
};

function Page({ params, searchParams }: PageProps) {
  return (
    <>
      <CoursePage
      
      />
    </>
  );
}

export default Page;
