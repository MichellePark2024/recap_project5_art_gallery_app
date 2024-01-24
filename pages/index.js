import useSWR from "swr";
import ArtPieces from "@/component/ArtPieces";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data:artPieces, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

if (error) return <div>failed to load</div>;
if (isLoading) return <div>loading...</div>;  
console.log("hi", artPieces)

return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}

