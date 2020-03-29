import React, { useEffect } from 'react';

const MyNotes = () => {
    
    useEffect(() => {
        document.title = 'Mis Notas — Notasocial';
    });

    return (
        <div>
            <h1>Notasocial</h1>
            <p>Aqui mis notas prro</p>
        </div>
    );
};

export default MyNotes;    