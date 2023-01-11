import React from "react";
import Modal from "react-bootstrap/Modal";

// START : MODAL
class ModalCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      deskripsi: "",
      nominal: 1,
      tanggal: "",
      kategori: "",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  // Menutup Modal
  handleClose() {
    this.setState({
      show: false,
    });
  }

  // Membuka Modal
  handleShow() {
    this.setState({
      show: true,
      kategori: this.props.kategori,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  createItem() {
    const Data = {
      deskripsi: this.state.deskripsi,
      nominal: parseInt(this.state.nominal),
      tanggal: this.state.tanggal,
      kategori: this.state.kategori,
    };
    const fnTambahItem = this.props.action;
    fnTambahItem(Data);
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleShow} className={this.props.variant}>
          {this.props.text} <i className={this.props.icon}></i>
        </button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Deskripsi</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan deskripsi"
                name="deskripsi"
                value={this.state.deskripsi}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nominal</label>
              <input
                type="number"
                min={1}
                className="form-control"
                placeholder="Masukkan nominal"
                name="nominal"
                value={this.state.nominal}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tanggal</label>
              <input
                type="date"
                className="form-control"
                name="tanggal"
                value={this.state.tanggal}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                type="hidden"
                className="form-control"
                placeholder="masukan kategori"
                name="kategori"
                value={this.state.kategori}
                onChange={this.handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.createItem} className={this.props.variant}>
              Simpan
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalCreate;
