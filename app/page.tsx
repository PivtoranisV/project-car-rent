import Filter from '@/components/Filter';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import { fetchCars } from '@/utils';

export default async function Home() {
  const cars = await fetchCars();

  console.log(cars);

  return (
    <main>
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-4" id="catalogue">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <Search />
        </div>
        <div className="flex justify-start flex-wrap items-center gap-2">
          <Filter />
          <Filter />
        </div>
      </div>
    </main>
  );
}
