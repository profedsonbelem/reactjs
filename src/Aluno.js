import React from 'react';

class Aluno extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			nome: undefined,
			disciplina: undefined,
			nota1: 0,
			nota2: 0,
			media: 0
		}
		this.handleNome = this.handleNome.bind(this);
		this.handleDisciplina = this.handleDisciplina.bind(this);
		this.handleNota1 = this.handleNota1.bind(this);
		this.handleNota2 = this.handleNota2.bind(this);
		this.calculaMedia = this.calculaMedia.bind(this);
	}

	handleNome(e) {
		this.setState({ nome: e.target.value });
	}
	handleDisciplina(e) {
		this.setState({ disciplina: e.target.value });
	}

	handleNota1(e) {
		this.setState({ nota1: e.target.value });
	}

	handleNota2(e) {
		this.setState({ nota2: e.target.value });
	}

	calculaMedia() {
		this.setState(state => ({
			media: (+state.nota1 + +state.nota2) / 2
		}))

	}


	render() {
		return (
			<form>
				<h2>Formulario Aluno</h2>
				<hr />
				Nome<br />
				<input type="text" name="nome" onChange={this.handleNome}
					value={this.state.nome} />
				<br />Disciplina<br />
				<input type="text" name="disciplina" onChange={this.handleDisciplina}
					value={this.state.disciplina} />
				<br />Nota1<br />
				<input type="number" name="nota1" onChange={this.handleNota1}
					value={this.state.nota1} />
				<br />Nota2<br />
				<input type="number" name="nota2" onChange={this.handleNota2}
					value={this.state.nota2} />
				<br />
				<button onClick={this.calculaMedia} type="button">Media</button>
				<br />
				Saída<br />
				<div>
					Nome : {this.state.nome} <br />
					Disciplina : {this.state.disciplina} <br />
					Media : {this.state.media} <br />
				</div>
			</form>
		)
	}

}
export default Aluno
