import PianoKey from "./PianoKey";
const Piano = () => {
  const notes = ["C4", "D4", "E4", "F4", "G4"];

  return (
    <div className="flex">
      <PianoKey note={notes[0]} />
    </div>
  );
};

export default Piano;
