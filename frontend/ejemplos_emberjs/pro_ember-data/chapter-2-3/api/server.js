const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());

app.get('/api/v1/cats', (request, response) => {
    response.json({
        data: [
            {
                type: 'cats',
                id: 1,
                attributes: {
                    name: 'Frisky',
                    age: 10,
                    adopted: true,
                    birthday: '2005-11-05T13:15:30Z'
                },
                relationships: {
                    home: {
                        data: { type: 'homes', id: 1 }
                    }
                }
            }
        ]
    });
});

app.get('/api/v1/homes/:id', (request, response) => {
    response.json({
        data: {
            type: 'homes',
            id: request.params.id,
            attributes: {
                street: '123 Purrfect Avenue'
            }
        }
    });
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});