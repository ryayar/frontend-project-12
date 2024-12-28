const Tooltip = (props) => {
  const {
    touched,
    validError,
    authError,
    last,
  } = props;

  if (touched && validError) {
    return (
      <div className="invalid-tooltip">{validError}</div>
    );
  }

  if (authError && last) {
    return (
      <div className="invalid-tooltip">{authError}</div>
    );
  }

  if (authError && !last) {
    return (
      <div className="invalid-tooltip" />
    );
  }

  return (null);
};

export default Tooltip;
