import Head from 'next/head';
import Navegacion from './Navegacion';

const App = (props) => (
    <div>
        <Head>
            <title>Bitcoinfo Apis</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
        </Head>

        <Navegacion />
        <div className="container mt-4">
            {props.children}
        </div>
    </div>
);

export default App;