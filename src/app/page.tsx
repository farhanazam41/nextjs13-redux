import styles from './page.module.css'
import PokemonTable from './components/PokemonTable';

export default async function Home() {

  const req = await fetch("http://localhost:3000/api/search", { cache: 'no-store'});
  const data = await req.json();
  
  return (
    <main className={styles.main}>
        <PokemonTable pokemons={data}/>
    </main>
  )
}
