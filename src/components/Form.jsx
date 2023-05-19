export const InputBox = ({ title, type }) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="uppercase text-sm py-2">{title}</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-200"
          type={type}
        />
      </div>
    </div>
  );
};

export const TextArea = ({ title }) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="uppercase text-sm py-2">{title}</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};
