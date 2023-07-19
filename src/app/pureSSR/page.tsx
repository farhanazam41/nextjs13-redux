import SSRPokemonTable from '@/app/components/SSRPokemonTable';
import { store } from '@/redux';
import { setStartUpPokemon } from '@/redux/features/searchSlice';

export default async function Home() {

  const req = await fetch("http://localhost:3000/api/search", { cache: 'no-cache'});
  const data = await req.json();
  store.dispatch(setStartUpPokemon(data))
  
  return (
    <main>
        <SSRPokemonTable/>
    </main>
  )
}
