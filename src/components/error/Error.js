import error404 from '../../assets/img/404.jpg'

const Error = () => {

    return (
    <>
    <img src={error404} alt='404' style={{
        width: '300px' ,
         height: '250px', 
         display: 'flex',
         marginLeft: '150px',
         padding: '25px'
         }}/>
    </>
    )
}

export default Error