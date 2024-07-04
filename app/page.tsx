import Button from "@/components/Button";
import Input from "@/components/Input";

export const metadata = {
  title: "Log in"
};


export default function Home() {

  const handleForm = async (formData: FormData) => {
    "use server";
  };

  return (
    <main className="h-full flex flex-col w-80 m-auto justify-center *:font-medium">
        <Button text="Log in" loading={true} />
      <form className="flex flex-col w-full" action={handleForm}>
        <Input name="email" type="email" placeholder="Email" required errors={[]} />
        <Input name="username" type="text" placeholder="Username" required errors={[]} />
        <Input name="password" type="password" placeholder="Password" required errors={[]} />
      </form>
    </main>
  );
}
