import "./EditButton.scss";

type EditButtonProps = {
  onClick: () => void;
};

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <button onClick={onClick} className="edit-button" aria-labelledby="Edit patient information">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    </button>
  );
};

export default EditButton;
