import characterData from '../data/characterData.json';
import Character from './Character';

const CharacterGallery = () => {
    const characterList = characterData.map(character =>
        <Character { ...character } key={ character.id } />
    );

    return (
        <div
            className='gallery-container'>
            { characterList }
        </div>
    );
};

export default CharacterGallery;