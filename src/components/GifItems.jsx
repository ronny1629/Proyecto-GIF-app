
export const GifItems = ({title, url, id})=> {

  return (
    <div className='card'>
        <img key={id} src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
