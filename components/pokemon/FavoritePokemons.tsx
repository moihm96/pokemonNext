import React, { FC } from 'react'
import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from './'

interface Props {
    favoritePokemons: Number[]
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                favoritePokemons.map(id => (
                    <FavoriteCardPokemon key={JSON.stringify(id)} id={id} />
                ))
            }
        </Grid.Container>
    )
}
