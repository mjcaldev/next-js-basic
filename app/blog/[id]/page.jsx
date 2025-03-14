export default async function Page({ params }) {
  const {id} = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await response.json();
  return (
    <main>
      <h1>Individual page: {id}</h1>
      <p>{data.title}</p>
    </main>
  );
}