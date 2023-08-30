

const RandomcharBlock = ({id, name, description, thumbnail, homepage,wiki,comics}) => {

return (
    <div className='randomchar__block'>
        <img alt='FAIL' className='randomchar__img' src={thumbnail}/>
        <div className='randomchar__info'>
                <p className='randomchar__name'>{name}</p>
                <p className='randomchar__dscr'>{description}</p>
                <div className='randomchar__btns'>
                    <a className='button button__main' href={homepage}>
                    <div className='inner'>Homepage</div>
                    </a>
                    <a className='button button__secondary' href={wiki}>
                    <div className='inner'>WIKI</div>
                    </a>
                </div>
        </div>
    </div>
)
    
}

export default RandomcharBlock;