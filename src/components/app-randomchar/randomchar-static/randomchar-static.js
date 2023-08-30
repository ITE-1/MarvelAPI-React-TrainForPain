import mjolnir from '../../../assets/img/mjolnir.png';

const RandomCharStatic = ({getID}) => {


    const handleClickButton = () => {
        const random = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getID(random)
       
    }

    return (

        <div className='randomchar__static'>
            <p className='randomchar__title'>
                Random character for today!
                <br />
                Do you want to get to know him better?
            </p>
            <p className='randomchar__title'>Or choose another one</p>
            <button type='submit' onClick={handleClickButton} className='button button__main'>TRY IT</button>
            <img
                src={mjolnir}
                className='randomchar__decoration'
                alt='mjolnir'
                style={{ opacity: '0.6' }}
            />
    </div>

    )
}

export default RandomCharStatic;