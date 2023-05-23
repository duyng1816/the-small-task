import Button from "./components/Button/Button";
import RegisterModal from "./components/Modal/RegisterModal";
import useRegisterModal from "./hooks/useRegisterModal";

function App() {
  const registerModal = useRegisterModal();
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="bg-gray-200 p-6 rounded-lg">
          <Button
            outline
            label="Open Modal Example"
            onClick={registerModal.onOpen}
          />
        </div>
      </div>
      <RegisterModal />
    </div>
  );
}

export default App;
