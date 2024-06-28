import Link from "next/link";
import Worker from "./(component)/Worker";

interface Worker {
  id: string;
  name: string;
  squareImage: string;
  industries: string[];
  netWorth: number;
}

const URL = "https://billions-api.nomadcoders.workers.dev/";

export const metadata = {
  title: "Home"
};

async function getWorkerList() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const workerList: Worker[] = await getWorkerList();

  return (
    <main className="w-[1280px] min-h-full flex flex-wrap">
      {workerList.slice(0, 50).map(worker => {
        const name = worker.name.toLowerCase().replace(" ", "-");
        return (<Link key={worker.id} href={`person/${name}`}>
          <Worker worker={worker} />
        </Link>);
      }
      )}
    </main>
  );
}
