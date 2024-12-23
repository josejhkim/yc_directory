import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams } : {
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;
  const posts = [
    { 
      _createdAt: new Date(),
      views: 55,
      author: {_id: 1, name: "Jose"},
      _id: 1,
      description: 'This is a description',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxP1El8tPGucQpDM8Akw8i5c-bq2MYEaKpPQ&s',
      category: 'Robots',
      title: "We Robots",
    }

  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br />Connect with Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'All startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post, index) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
