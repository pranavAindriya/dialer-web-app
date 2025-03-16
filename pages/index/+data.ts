import { useConfig } from "vike-react/useConfig";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function onBeforeRender() {
  const config = useConfig();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await response.json()) as Post[];
  config({
    title: `${data?.length} Posts found`,
    description: "postsssssss",
  });
  return data;
}
