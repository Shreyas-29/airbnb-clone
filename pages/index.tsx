import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner, Card, Footer, Header, LargeCard, MediumCard } from '../components'
import { getCards, getMediumCards } from '../graphql';

export default function Home({ cards, mediumCards }: any) {

  console.log(cards);

  return (
    <div className="">
      {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"> */}
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.png" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-16'>
        <section className='py-10 lg:py-12'>
          <h2 className='text-2xl md:text-4xl font-semibold'>
            Explore Nearby
          </h2>

          {/* Getting data from a server - API endpoints*/}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4 md:pt-6'>
            {cards.map((card: any) => (
              <Card
                key={card.id}
                card={card.node}
              />
            ))}
          </div>

        </section>

        <section className='py-10 lg:py-12'>
          <h2 className='text-2xl md:text-4xl font-semibold'>
            Live Anywhere
          </h2>

          <div className='flex space-x-8 px-4 w-full hide overflow-x-scroll scrollbar-hide whitespace-nowrap py-8 -ml-3'>
            {mediumCards.map((card: any) => (
              <MediumCard
                key={card.id}
                mediumCards={card.node}
              />
            ))}
          </div>

        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          desc='Wishlists created by Airbnb.'
          button='Get Started'
        />

        <Footer />

      </main>

    </div>
  )
}


export async function getStaticProps() {
  const cards = (await getCards()) || [];
  const mediumCards = (await getMediumCards()) || [];


  return {
    props: {
      cards,
      mediumCards
    }
  }
}