import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First İstanbul MeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/DolmabahceMainGate.JPG",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second İstanbul MeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sultanahmet_Camii%2C_%C4%B0stanbul.jpg/2560px-Sultanahmet_Camii%2C_%C4%B0stanbul.jpg",
    address: "Some address 1101, 12345 Some City",
    description: "This is a first meetup!",
  },
];

function HomePage(props) {
  const [loadedMeetups, setloadedMeetups] = useState();

  return <MeetupList meetups={props.meetups} />;
}
/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate:10
  };
}

export default HomePage;
