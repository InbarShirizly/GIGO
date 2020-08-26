import React from "react";

class ButtonDone extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>         
        </Modal>
        <div className="button-container">
          <button
            className="btn btn-outline-success waves-effect button-counter"
            onClick={this.showModal}
          >
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonDone;

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="relative">
          <button className="close" onClick={handleClose}></button>
          <div className="text-center modal-text ml-5">
            Please, upload image after cleaning
          </div>         
          <button
            className="btn btn-outline-success waves-effect w-30 absolute-button"
            onClick={handleClose}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};
