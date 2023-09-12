const Buttons = (props) => {
  const { single, gettingIdOfButtons } = props;
  const { id, context } = single;
  const passingId = () => {
    gettingIdOfButtons(id);
  };

  return (
    <button type="button" className="btn-for-navigation" onClick={passingId}>
      {context}
    </button>
  );
};

export default Buttons;
