import Image from "next/image";

interface Worker {
  worker: {
    id: string;
    name: string;
    squareImage: string;
    industries: string[];
    netWorth: number;
  };
}

export default function Worker({ worker }: Worker) {
  const { id, name, squareImage, industries, netWorth } = worker;
  return (
    <figure className="py-4 px-1 w-[300px] cursor-pointer">
      <Image priority={true} className="hover:scale-[1.02] transition-all" width="300" height="300" src={squareImage} alt={name} />
      <div className="font-bold p-2">
        <div className="font-bold text-lg">{name}</div>
        <div className="font-bold">{netWorth} / {industries[0]}</div>
      </div>
    </figure>
  );
}
