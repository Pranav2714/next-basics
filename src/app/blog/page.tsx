export default async function Page() {
  return (
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("intentional delay");
      }, 2000)
    ),
    (
      <div>
        <h1>This is blog</h1>
      </div>
    )
  );
}
