import Container from "../components/Container";
import "../app/globals.css";

export const metadata = {
  title: "About",
  description: "About the app",
};

export default function Home() {
  return (
    <main className="flex p-24 justify-center">
      <Container
        as="article"
        className="flex-col items-center w-12/12 md:w-10/12 lg:w-8/12 2xl:w-6/12"
      >
        <h1>About this App</h1>
        <p>Welcome to this simple application.</p>
        <p>
          The idea originated from a group planning situation where I was
          getting alot of nogo dates from a small group of people and needed to
          find all the left days efficiently to propose potential options.
        </p>
        <p>
          This way I could make sure that nobody stays left behind and the clear
          gap structure made it easy to screenshot the lucky dates at one
          glance.
        </p>
        <a
          rel="author"
          href="https://github.com/HippiHo"
          target="_blank"
          className="mt-3 self-end text-reddish hover:text-secondary"
        >
          The Author
        </a>
      </Container>
    </main>
  );
}
