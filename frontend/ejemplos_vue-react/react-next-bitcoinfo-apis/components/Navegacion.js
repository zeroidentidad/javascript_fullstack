import Link from 'next/link';

const Navegacion = () => (
        <ul>
            <li><Link href="/"><a>Index</a></Link></li>
            <li><Link href="nosotros"><a>Nosotros</a></Link></li>
        </ul>
)

export default Navegacion;