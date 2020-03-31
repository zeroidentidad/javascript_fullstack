import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ButtonAsLink from './ButtonAsLink';


// query para refetch y mutation
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';

const FavoriteNote = props => {

    // guardar favorito nota como count state
    const [count, setCount] = useState(props.favoriteCount);

    // guardar si el usuario tiene favorito en el state de nota
    const [favorited, setFavorited] = useState(
        // verificar si la nota existe en la lista de favoritos del usuario
        props.me.favorites.filter(note => note.id === props.noteId).length > 0
    );

    // toggleFavorite mutation hook
    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: {
            id: props.noteId
        },
        // refetch GET_MY_FAVORITES query para update cache
        refetchQueries: [{ query: GET_MY_FAVORITES }]
    });    

    // si usuario ha marcado nota como favorita, mostrar opción eliminar favorito
    // sino, mostrar la opción para agregar como favorito
    return (
        <React.Fragment>
            {favorited ? (
                <ButtonAsLink
                    onClick={() => {
                        toggleFavorite();
                        setFavorited(false);
                        setCount(count - 1);
                    }}
                >
                Quitar favorito
                </ButtonAsLink>
            ) : (
                <ButtonAsLink
                    onClick={() => {
                        toggleFavorite();
                        setFavorited(true);
                        setCount(count + 1);
                    }}
                >
                Agregar favorito
                </ButtonAsLink>
                )
            }
            : { count }
        </React.Fragment >
    );
};

export default FavoriteNote;