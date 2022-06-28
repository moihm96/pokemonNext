import { useState, useEffect } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { Layout } from '../../components/layouts'
import Nofavorites from '../../components/ui/Nofavorites'
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<Number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, [])


    return (
        <Layout title='Pokemon Favoritos'>
            {
                favoritePokemons.length === 0
                    ? (<Nofavorites />)
                    : (<FavoritePokemons favoritePokemons={favoritePokemons} />)
            }
        </Layout>
    )
}

export default FavoritesPage
