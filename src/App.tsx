import InteractiveWelcome from "./FormControllati/InteractiveWelcome";
import UncontrolledLogin from "./FormIncontrollati/UncontrolledLogin";
import MultiButton from "./GestioneEventi/MultiButton";
import Colors from "./Liste/Colors";
import FocusableInput from "./useRef/FocusableInput";

const colors = [
  { id: 1, name: "blu" },
  { id: 2, name: "nero" },
  { id: 3, name: "rosso" },
  { id: 4, name: "giallo" },
  { id: 5, name: "viola" },
];

export function App() {
  return (
    <div>
      <Colors items={colors} />
    </div>
  );
}
