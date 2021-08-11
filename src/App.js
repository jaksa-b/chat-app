import { Chat } from "./components";

function App() {
  return (
    <div>
      <Chat
        position="left"
        buttonColor="pink"
        user={{
          name: "Kubota",
          src: "/kubota.jpeg",
        }}
      />
      <Chat
        position="right"
        username="Viktor"
        user={{
          name: "Viktor",
          src: "/viktor.jpeg",
        }}
      />
    </div>
  );
}

export default App;
