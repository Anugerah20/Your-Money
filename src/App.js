/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import ModalCreate from "./component/ModalCreate";
import Message from "./component/Message";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jumlahUang: 0,
      sisaUang: 0,
      uangPemasukan: 0,
      uangPengeluaran: 0,
      transaksiUangMasuk: 0,
      transaksiUangKeluar: 0,
      peringatan: [
        // {
        //   deskripsi: "Dapat Bonus",
        //   tanggal: "1 July 2023",
        //   nominal: 2000000,
        //   kategori: "IN",
        // },
        // {
        //   deskripsi: "Makan Sayur Asem",
        //   tanggal: "9 July 2023",
        //   nominal: 15000,
        //   kategori: "OUT",
        // },
      ],
    };

    this.createItem = this.createItem.bind(this);
    this.fnHitung = this.fnHitung.bind(this);
  }

  createItem(object) {
    let newData = [...this.state.peringatan, object];
    let dataUangIN = newData.filter((item) => item.kategori === "IN");
    let nominalUang = dataUangIN.map((item) => item.nominal);
    let jumlahUangIN = nominalUang.reduce((total, num) => total + num, 0);

    let dataUangOUT = newData.filter((item) => item.kategori === "OUT");
    let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
    let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num, 0);
    console.log(jumlahUangOUT);

    this.setState({
      uangPemasukan: jumlahUangIN,
      transaksiUangMasuk: nominalUang.length,
      uangPengeluaran: jumlahUangOUT,
      transaksiUangKeluar: nominalUangOUT.length,
      jumlahUang: jumlahUangIN - jumlahUangOUT,
      sisaUang: ((jumlahUangIN - jumlahUangOUT) / jumlahUangIN) * 100,
      peringatan: newData,
    });
  }

  // Menghitung pemasukan uang & Berapa kali transaksi
  // Menghitung sisa uang

  fnHitung() {
    let dataUangIN = this.state.peringatan.filter(
      (item) => item.kategori === "IN"
    );
    let nominalUang = dataUangIN.map((item) => item.nominal);
    let jumlahUangIN = nominalUang.reduce((total, num) => total + num);

    let dataUangOUT = this.state.peringatan.filter(
      (item) => item.kategori === "OUT"
    );
    let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
    let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num);
    console.log(jumlahUangOUT);

    this.setState({
      uangPemasukan: jumlahUangIN,
      transaksiUangMasuk: nominalUang.length,
      uangPengeluaran: jumlahUangOUT,
      transaksiUangKeluar: nominalUangOUT.length,
      jumlahUang: jumlahUangIN - jumlahUangOUT,
      sisaUang: ((jumlahUangIN - jumlahUangOUT) / jumlahUangIN) * 100,
    });
  }

  componentDidMount() {
    if (this.state.peringatan.length < 1) {

    } else {
      this.fnHitung();
    }
  }

  render() {
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center p-2" style={{background: '#f9f9f9'}}>
              <h1 className="fw-bold">NOTE MONEY</h1>
              <h2 className="fw-bold">Rp {this.state.jumlahUang},-</h2>
              <span className="title-sm">
                Your money is left {this.state.sisaUang}% again
              </span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 col-sm-12 d-flex flex-column">
              <div className="card-wrapper p-4">
                <div className="icon-app mb-1">
                  <i className="bi bi-wallet2"></i>
                </div>
                <span className="title-md">Income</span>
                <h3>Rp {this.state.uangPemasukan},-</h3>
                <div>
                  <span className="title text-purple">
                    {this.state.transaksiUangMasuk}
                  </span>
                  <span className="title"> Transaction</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 d-flex flex-column mt-lg-0 mt-sm-3">
              <div className="card-wrapper p-4">
                <div className="icon-app mb-1">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <span className="title-md">Expenses</span>
                <h3>Rp {this.state.uangPengeluaran},-</h3>
                <div>
                  <span className="title text-purple">
                    {this.state.transaksiUangKeluar}
                  </span>
                  <span className="title"> Transaction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12 col-sm-6 d-flex justify-content-between align-items-center">
              <h4>List Transaction</h4>
            </div>
            <div className="wrap-btn d-block">
              <ModalCreate
                action={this.createItem}
                kategori="IN"
                variant="button btn-purple me-2 px-3 py-2"
                text="Income"
                icon="bi bi-plus-circle-fill"
                modalHeading="Add Income"
              />
              <ModalCreate
                action={this.createItem}
                kategori="OUT"
                variant="button btn-pink me-2 px-3 py-2"
                text="Expenses"
                icon="bi bi-dash-circle-fill"
                modalHeading="Add Expenses"
              />
            </div>
          </div>

          <div className="row mt-4">
            {/* Kondisi jika data kosong akan muncul pesan peringatan */}
            {this.state.peringatan.length < 1 && <Message />}
            {/* Memanggil transaksi masuk dan keluar */}
            {this.state.peringatan.map((per, index) => {
              return (
                <div
                  key={index}
                  className="col-12 d-flex justify-content-between mb-4"
                >
                  <div className="d-flex align-items-center">
                    <div
                      className={
                        per.kategori === "IN" ? "icon-app-in" : "icon-app-out"
                      }
                    >
                      <i
                        className={
                          per.kategori === "IN"
                            ? "bi bi-wallet2"
                            : "bi bi-bag-dash"
                        }
                      ></i>
                    </div>

                    <div className="transaction ms-3 d-flex flex-column">
                      <h6>{per.deskripsi}</h6>
                      <span className="title-sm">{per.tanggal}</span>
                    </div>
                  </div>

                  <h5
                    className={
                      per.kategori === "IN" ? "text-money-in" : "text-money-out"
                    }
                  >
                    Rp {per.nominal}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
