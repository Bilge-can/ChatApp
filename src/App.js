import "./App.css";

import { ChatProvider } from "./context/ChatContexts";
import Container from "./companent/Container";

function App() {
    return (
        <ChatProvider>
            <Container />
        </ChatProvider>
    );
}

export default App;
