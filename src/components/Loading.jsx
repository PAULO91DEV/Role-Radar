import React from 'react'

class Loading extends React.Component {
  static defaultProps = {
    mensagem: 'Carregando...',
  }

  render() {
    return (
      <div className="flex flex-column align-items-center justify-content-center p-4">
        <i
          className="pi pi-spin pi-spinner text-primary mb-3"
          style={{ fontSize: '2rem' }}
        ></i>
        <p className="text-600 m-0">{this.props.mensagem}</p>
      </div>
    )
  }
}

export default Loading
