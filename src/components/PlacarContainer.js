import React from "react";
import PropTypes from "prop-types";
import Time from "./Time";
import Partida from "./Partida";

export default class PlacarContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			gols_casa: 0,
			gols_visitante: 0,
		};
	}
	marcarGolCasa = () => {
		this.setState({
			gols_casa: this.state.gols_casa + 1,
		});
	};
	marcarGolVisitante = () => {
		this.setState({
			gols_visitante: this.state.gols_visitante + 1,
		});
	};
	render() {
		const { partida, casa, visitante } = this.props;
		const estilo = { float: "left", marginRight: "20px" };
		return (
			<div>
				<div style={estilo}>
					<h3>Casa</h3>
					<Time
						// nome={this.props.casa.nome}
						nome={casa.nome}
						gols={this.state.gols_casa}
						marcarGol={this.marcarGolCasa}
					/>
				</div>
				<div style={estilo}>
					<Partida
						{...partida}
						//  estadio={this.props.partida.estadio}
						//  data={this.props.partida.data}
						//  horario={this.props.partida.horario}
					/>
				</div>
				<div style={estilo}>
					<h3>Visitante</h3>
					<Time
						// nome={this.props.visitante.nome}
						nome={visitante.nome}
						gols={this.state.gols_visitante}
						marcarGol={this.marcarGolVisitante}
					/>
				</div>
				<div style={{ clear: "both" }}></div>
				<br />
				<div>
					<b>Clima: {this.props.clima}</b>
				</div>
			</div>
		);
	}
}
PlacarContainer.protoTypes = {
	clima: PropTypes.string,
	tempo: PropTypes.number.isRequired,
};
PlacarContainer.defaultProps = {
	clima: "Chuvoso",
};
// Informa coleções de dados esperado
dados: PropTypes.shape({
	optionalProperty: PropTypes.string,
	requiredProperty: PropTypes.number.isRequired,
});
