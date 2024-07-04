interface ButtonProps {
  loading: boolean,
  text: string;
}

export default function Button({ loading, text }: ButtonProps) {
  return (
    <button
      disabled={loading}
      className="text-white bg-indigo-400 hover:bg-indigo-300 transition-colors p-3 rounded-full hover:cursor-pointer disabled:bg-neutral-500 disabled:cursor-not-allowed">
      {loading ? "Loading..." : text}
    </button>
  );
}
