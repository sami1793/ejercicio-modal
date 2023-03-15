export const Modal = ({children, hiddenModal, showModal, title='Escribe titulo',showButton=true}) => {
    return (
      showModal && <div style={ {background:'gray', position:'relative'}}>
          <h2>{title}</h2>
          {showButton&&<button style={{position:'absolute', top: '10px', right:'5px'}}onClick={hiddenModal}>X</button>} 
          {children}       
      </div>
    )
  }