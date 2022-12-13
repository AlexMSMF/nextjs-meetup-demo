import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const router = useRouter();

  const addMeetupHandler = async (newMeetUpData) => {
    const response = await fetch("/api/new-meetup", {
      //api ---Nome da folder---new-meetup---nome do ficheiro
      //Ao chamar este path, o NEXTJS faz trigger da função de post no MongDB
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeetUpData),
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
