import React from "react";
import "../Informacion/Info.css";
import axios from "axios";

class Info extends React.Component {
  state = {
    ubicaciones: [],
  };

  componentDidMount() {
    // axios.get(`http://localhost:3000/Coches`)
    axios.get(`http://172.30.15.5:3015/api/distanciadb`).then((res) => {
      const ubicaciones = res.data;
      this.setState({ ubicaciones });
    });
  }

  render() {
    // console.log(this.state.ubicaciones.Distancias)
    return (
      <div className="tabla-container">
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">KM/Empresa TOTAL: {} </th>
              <th scope="col">Coches fijos TOTAL: {}</th>
              <th scope="col">HORARIO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Casimiro:{}</td>
              <td>Casimiro: 20</td>
              <td>Casimiro: Atrasado</td>
            </tr>

            <tr>
              <td>Tipoka: 30.000km</td>
              <td>Tipoka: 2</td>
              <td>Tipoka: Atrasado </td>
            </tr>

            <tr>
              <td>NSR: 20.000km</td>
              <td>NSR: 30</td>
              <td>NSR: Atrasado</td>
            </tr>

            {/*   <tr>
                            <td>Total Km : </td>
                            <td>Total Coches: </td>
                            <td></td>
                        </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Info;
