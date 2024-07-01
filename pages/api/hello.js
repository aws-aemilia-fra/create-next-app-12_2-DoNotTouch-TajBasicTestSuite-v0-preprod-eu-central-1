// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  res.status(200).json(json);
}