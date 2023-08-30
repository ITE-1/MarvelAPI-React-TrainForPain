

const CharInfoItem = ({name, thumbnail, description, wiki, home, comics}) => {


    return (
        <div className="char__info">
                <div className="char__basics">
                    <img src={thumbnail} alt='FAIL'/>
                    <div className="char__info-name">{name}
                    <div className="char__btns">
                        <a href={home} className="button button__main">
                        <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                        </a>
                    </div>
                    </div>
                    
                </div>
                <div className='char__descr'>{description}</div>
       
      
            <div className='char__comics'>Comics:</div>
            <ul className='char__comics-list'>
                {comics && comics.items.map((comic, index) => (
                    <li key={index} className='char__comics-item'>{comic.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CharInfoItem;