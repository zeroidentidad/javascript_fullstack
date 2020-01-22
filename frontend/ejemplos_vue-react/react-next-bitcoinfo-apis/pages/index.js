import App from '../components/App';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <App>
        <div className="row">
            <div className="col-12">
                <h2>Precio Bitcoin</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2 className="my-4">Bitcoins, noticias actuales</h2>
                <Noticias
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Eventos importantes</h2>
                <Eventos
                    eventos={props.eventos}
                />
            </div>
        </div>
    </App>
);

Index.getInitialProps = async () => {

    let tokenEvent = '10753854e1msh98b7f15b5e76585p12456fjsne2e5df4b6035';
    let tokenNews = '77656f922f504d988922b003a2731683';

    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');

    const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${tokenNews}&language=es`);

    const eventos = await fetch(`https://coingecko.p.rapidapi.com/events`,{"headers":{
        "method": "GET",
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": `${tokenEvent}`        
    }
    });

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticias.articles,
        eventos: resEventos.data
    }
}

export default Index;