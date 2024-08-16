import gif from './error.gif'

const ErrorMessage = () => {
  return (
    <img src={gif} style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto" }} alt="Error" />
  )
}

export default ErrorMessage