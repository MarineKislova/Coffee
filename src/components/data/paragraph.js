import { paragraphData } from "./paragraphData";

const Paragraphs = ({ ids = [], className = "" }) => {
  const filteredParagraphs =
    ids.length > 0
      ? paragraphData.filter((p) => ids.includes(p.id))
      : paragraphData;

  return (
    <>
      {filteredParagraphs.map((p) => (
        <p key={p.id} className={className}>
          {p.text}
        </p>
      ))}
    </>
  );
};

export default Paragraphs;
