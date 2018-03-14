var React = require('react');
var ReactDom = require('react-dom');

class Name extends React.Component{
	constructor(props){
		super(props);
		this.state = {jai: '', value: 0};
		this.loadInfo = this.loadInfo.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.blur = this.blur.bind(this);
	}
	loadInfo(){
		$.ajax({
			data:"action=buscar",
			url:"../php_components/despacho/despachoUsuario.php",
			type:"POST",
			dataType:'json',
			success:function(data){
				$.each(data, function(i, item){
					this.setState({jai: item.Nombre});
					console.log(this.state.jai);
				}.bind(this));
				// this.setState({data: data});
			}.bind(this),
			error:function(){
				console.log('h');
			}/*.bind(this),
			error. function(xhr, status, err)
			{
				console.log(status, error.toString());
			}.bind(this)*/
		});
	}
	componentDidMount(){
		this.timerId = setInterval(
		() => this.loadInfo()
		, 3000);
	}
	handleChange(event){
		if(event.target.value == ''){
			this.setState({value: 0});
		}else{
			this.setState({value: event.target.value});
		}
		/*if(elementos.value == '' || isNaN(elementos.value) ){
			elementos.value = 0;
		}else{
			if(elementos.id.match(/input-nota-examen) || elementos.id.match(/input-porcentaje-examen)){
				obtenerPromedioExamen();
			}else{
				obtenerPromedio();
				obtenerPromedioExamen();
			 	console.log('adios');
			}
		}*/
	}
	blur(event){
		if(event.target.value == ''){
			event.target.value = this.state.value;
		}
			console.log(this.state.value);
	}
	render(){
	
		return(
			<div onLoad={this.loadInfo}>
				<button>Cargar</button>
				<div>{this.state.jai}</div>
				<label>{this.state.value}</label>
				<input type="text" onBlur={this.blur} onChange={this.handleChange} defaultValue={this.state.value} placeholder="Nota" />
			</div>
			);
	}
}
	ReactDom.render(<Name />, document.getElementById('container'));