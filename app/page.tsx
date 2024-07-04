import Button from "@/components/Button";
import Input from "@/components/Input";

export const metadata = {
  title: "Log in"
};


export default function Home() {
  return (
    <main className="h-full flex flex-col w-80 m-auto justify-center *:font-medium">
      <form className="flex flex-col w-full" action="">
        <Input type="email" placeholder="Email" required errors={[]} />
        <Input type="text" placeholder="Username" required errors={[]} />
        <Input type="password" placeholder="Password" required errors={[]} />
        <Button text="Log in" loading={true} />
      </form>
    </main>
  );
}
