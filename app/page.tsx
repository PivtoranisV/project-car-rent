import Filter from '@/components/Filter';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import CarCard from '@/components/CarCard';
import { fetchCars } from '@/utils';

export default async function Home() {
  const cars = await fetchCars();

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

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
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Opps, no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
