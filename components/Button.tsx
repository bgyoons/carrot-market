"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="text-white bg-indigo-400 hover:bg-indigo-300 transition-colors p-3 rounded-full hover:cursor-pointer disabled:bg-neutral-500 disabled:cursor-not-allowed">
      {pending ? "Loading..." : text}
    </button>
  );
}
