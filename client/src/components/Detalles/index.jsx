import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./detalles.css";
import * as actions from "../../Redux/Actions";
import { bindActionCreators } from "redux";

export class Detalles extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props);
    this.props.solicitarDetalles(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.vaciarDetalles();
  }
  

  render() {
    return (
      <div className="divDetalle">
        {this.props.info.name ? (
          <div className="detalleCard">
            <img src={this.props.info.image} alt="imagen de receta" />
            <section>
              <h1>{this.props.info.name}</h1>
              <h3>DishTypes</h3>
              <p> {this.props.info.dishtypes}</p>
              <h3>Diets</h3>
              <p> {this.props.info.diets}</p>
              <h3>Health Score</h3>
              <p>{this.props.info.health_score} </p>
              <h3>Summary</h3>
              <p>{this.props.info.summary} </p>
              <h3>Steps</h3>
              <p>{this.props.info.steps} </p>
            </section>
            <div className="divBtn">
              <Link to={"/home"}>
                <button className="volver">↖</button>
              </Link>
            </div>
          </div>
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.detalleReceta,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Detalles);

