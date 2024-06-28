import Image from "next/image";

interface WorkerDetailProps {
  params: { name: string; };
}

const URL = "https://billions-api.nomadcoders.workers.dev/person";

async function getWorkerDetail(name: string) {
  const response = await fetch(`${URL}/${name}`);
  const json = await response.json();
  return json;
}

export default async function WorkerDetail({ params: { name } }: WorkerDetailProps) {
  const detail = await getWorkerDetail(name);

  return (
    <section className="w-[1280px]">
      <Image width="400" height="400" src={detail.squareImage} alt={detail.id} />
      <div className="py-2">NetWorth: {detail.netWorth}</div>
      <div className="py-2">Country: {detail.country}</div>
      <div className="py-2">Industry: {detail.industries[0]}</div>
      <div className="py-2">{detail.bio.join(" ")}</div>
    </section>
  );
}
