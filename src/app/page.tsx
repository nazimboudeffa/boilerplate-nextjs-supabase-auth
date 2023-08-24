import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

async function Home () {
  
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
    <div className="min-h-screen flex flex-col justify-between">
    <Header session = { session } />
    { session ? (
      <Welcome />
    ) : (
      <Hero />
    )}
    <Footer />
    </div>
    </>
  )
}

export default Home