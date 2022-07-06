import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";


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

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </Layout>
  );
}

export default HomePage;
