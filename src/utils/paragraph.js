import { paragraphData } from "../data/paragraphData";

const Paragraphs = ({ ids = [], className = "" }) => {
  const filteredParagraphs =
    ids.length > 0
      ? paragraphData.filter((p) => ids.includes(p.id))
      : paragraphData;

  return (
    <>
      {filteredParagraphs.map((p) => (
        <p key={p.id} className={`${className}__paragraph`}>
          {p.text}
        </p>
      ))}
    </>
  );
};

export default Paragraphs;
