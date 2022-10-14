import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MComponents } from "./../MUIExporter";
const StatusBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const state = useSelector((state) => state.statusReducer);
  useEffect(() => {
    setIsOpen(true);
  }, [state]);
  return (
    <>
      {state.status && (
        <MComponents.Snackbar
          open={isOpen}
          autoHideDuration={2000}
          onClose={() => setIsOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MComponents.Alert
            severity={state.status.type ||"error"}
            variant="filled"
            sx={{ p: 2, textTransform: "capitalize" }}
          >
            {state.status.message || "Failed to fetch"}
          </MComponents.Alert>
        </MComponents.Snackbar>
      )}
    </>
  );
};
export default StatusBar;
