const ChatContainer = ({ children }) => (
  <div className="container h-100 my-4 overflow-hidden rounded shadow">
    <div className="row h-100 bg-white flex-md-row">
      {children}
    </div>
  </div>
);

export default ChatContainer;
