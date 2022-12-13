import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// O NEXT JS UTILIZA ISTO PARA ESPERAR PELA DATA OU POR QUALQUER FUNÇÃO QUE PRECISE
// ANTES DE FAZER LOAD DA PAGINA
// PRE-RENDERING!!!!!!!!!
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://meetupguy:3yoql2uvSpYblk1M@cluster0.6qbca.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //Regenerar o request, para renovar a data no server e renovar as pages - 10 são os segundos!!!
  };
};

//UTILIZAR getServerSideProps ---caso necessitemos de DATA e do Request object
//e caso haja data que muda multiple times a cada segundo
//DATA CHANGING E REQUEST
// export const getServerSideProps = async (context) => {
//   //fetch data from API
//   const req = context.req;
//   const response = context.res;
//   console.log(context);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
