import React from 'react';

import './styles.css';

class Pesquisa extends React.Component {
  pesquisar = event => {
    let termoPesquisado = event.target.value;
    let membrosGrupoTesseract = Array.from(
      document.querySelectorAll('.membro')
    );
    if (termoPesquisado) {
      membrosGrupoTesseract.forEach(membro => {
        var regex = new RegExp('^.*' + termoPesquisado + '.*$', 'gmi');
        if (regex.test(membro.id)) {
          membro.style.display = 'block';
        } else {
          membro.style.display = 'none';
        }
      });
    } else {
      membrosGrupoTesseract.forEach(membro => {
        membro.style.display = 'block';
      });
    }
  };

  render() {
    return (
      <input
        type="text"
        id="pesquisa"
        placeholder="Digite algo para pesquisar..."
        onKeyUp={this.pesquisar}
      />
    );
  }
}

export default Pesquisa;
