const SplitPane = ({children, left, right}) => {
  return (
    <div className="splitpane">
      <div className="splitpane__introduction">{children}</div>
      <div className="splitpane__left">{left}</div>
      <div className="splitpane__right">{right}</div>
    </div>
  )
};

export default SplitPane;