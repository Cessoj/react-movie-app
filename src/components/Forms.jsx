import React, { Component } from 'react';
import axios from 'axios';

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            poster: "",
            comment: ""
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
  
    handleSubmit(e) {
        e.preventDefault();
        axios.post('https://post-a-form.herokuapp.com/api/movies', {
            title: this.state.title,
            poster: this.state.poster,
            comment: this.state.comment
          })
          .then(res => res.data)
            .then(res => {
                alert('Merci, ' + this.state.title + ' a été ajouté');
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout d'un film`);
            });
            
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom du film :
                        <input required type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </label>
                    <label>
                        URL de l'affiche du film : 
                        <input required type="text" name="poster" value={this.state.poster} onChange={this.onChange}/>
                    </label>
                    <label>
                        Commentaire :
                        <input required type="textarea" name="comment" value={this.state.comment} onChange={this.onChange}/>
                    </label>
                    <input type="submit" value="Envoyer"/>
                </form> 
            </div>
        )
    }
}

export default Forms;