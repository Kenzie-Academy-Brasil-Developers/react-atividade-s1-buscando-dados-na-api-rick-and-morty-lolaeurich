import { CharCard } from './CharCard';

import "./Style/characters.css"

export const Characters = ({characterList}) => {
    console.log(characterList[0])
    return (
        <>
            <h1>Meus personagens</h1>
            <div className={'container'}>
            {Array.isArray(characterList) && characterList.map((character, index) =>
            <CharCard key={index} character={character}/>)}
</div>
        </>
    );
};