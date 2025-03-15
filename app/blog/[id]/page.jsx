import { notFound } from "next/navigation";

async function fetchPosts(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 30,
      },
    });
    const data = await response.json(); 
    return data;
  } catch (err) {
    notFound(); 
  }
  
}

export default async function Page({ params }) {
  const {id} = params;

  const data = await fetchPosts(id);

  return (
    <main>
      <h1>Individual page: {id}</h1>
      <p>{data.title}</p>
    </main>
  );
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.map((post) => ({
    id: String(post.id),
  }))
};

export const dynamicParams = false;