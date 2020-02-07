import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Membros extends Component {
  state = {
    membros: [],
    detalhesMembro: {},
    page: 1
  };

  componentDidMount() {
    this.carregarMembrosGrupoTesseract();
  }

  carregarMembrosGrupoTesseract = async () => {
    const response = await api.get('orgs/grupotesseract/public_members');
    this.setState({ membros: response.data });
  };

  exibirDetalhesMembro = async (url = '') => {
    const response = await api.get(url);
    const membro = response.data;
    let dadosMembro = 'INFORMAÇÕES\n\n';
    dadosMembro += 'Nome: ' + membro.name;
    dadosMembro += '\n';
    dadosMembro += 'Quantidade de repositórios: ' + membro.public_repos;
    dadosMembro += '\n';
    dadosMembro += 'Quantidade de seguidores: ' + membro.followers;
    dadosMembro += '\n';
    var dataIngresso = new Date(membro.created_at).toLocaleDateString();
    dadosMembro += 'Data de ingresso: ' + dataIngresso;
    alert(dadosMembro);
  };

  render() {
    const { membros } = this.state;
    return (
      <div className="membros">
        {membros.map(membro => (
          <article key={membro.id} id={membro.login} className="membro">
            <strong>{membro.login}</strong>
            <figure>
              <img
                className="membro-avatar"
                src={membro.avatar_url}
                alt={membro.login}
              />
              <center>
                <a onClick={() => this.exibirDetalhesMembro(membro.url)}>
                  Detalhes
                </a>
              </center>
            </figure>
          </article>
        ))}
      </div>
    );
  }
}
