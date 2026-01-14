import { useEffect, useRef } from "react";

export default function MountedComponent() {
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      console.log("Montato per la prima volta");
    }
  }, []);

  return (
    <div>
      <h2>Componente Montato per la prima volta</h2>
    </div>
  );
}
