import { Chat } from "./components";

function App() {
  return (
    <div>
      <Chat
        position="left"
        buttonColor="pink"
        user={{
          name: "Kubota",
          country: "est",
          src: "/kubota.jpeg",
        }}
      />
      <Chat
        position="right"
        username="Viktor"
        user={{
          name: "Viktor",
          country: "uk",
          src: "/viktor.jpeg",
        }}
      />
    </div>
  );
}

export default App;
