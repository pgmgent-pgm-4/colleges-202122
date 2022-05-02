import { useState } from 'react';

const Alert = ({title = 'A simple info alert. Check it out!', message, type = 'info'}) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = (ev) => {
    ev.preventDefault();
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className={`alert alert--${type}`}>
      <div className="alert__title">{title}</div>
      <div className="alert__message">{message}</div>
      <div className="alert__buttons">
        <button className="alert_btn-close" onClick={handleClose}>Close</button>
      </div>
    </div>
  )
};

export default Alert;

const AlertSuccess = ({title, message}) => {
  return <Alert title={title} message={message} type="success"/>
}

const AlertDanger = ({title, message}) => {
  return <Alert title={title} message={message} type="danger"/>
}

export {
  AlertDanger,
  AlertSuccess,
}