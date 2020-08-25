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
          {/* <p>Please, upload image after cleaning</p> */}
          {/* <p></p>
          <p></p>
          <p></p> */}
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
        <section className="modal-main d-flex flex-column justify-content-center align-items-center"> 
        <p className = "text-center">Please, upload image after cleaning</p>   
        {children}
        <button className = "btn btn-outline-success waves-effect w-30 text-center" onClick={handleClose}>Upload</button>
      </section>
    </div>
  );
};
