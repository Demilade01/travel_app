import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface CampProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subTitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
              src="/folded-map.svg"
              alt='map'
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-16 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subTitle}</p>
          </div>
        </div>

        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
                className='inline-block h-10 w-10 rounded-full'
              />
            ))}
          </span>
          <p className='bold-16t md:bold-20 text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Patuk Truno Camp"
          subTitle="Prigen, Pasuran"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Moutain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
           When you find yourself grappling with feelings of being lost and uncertain of the path ahead, it can be a bewildering experience. In these moments, it's important to remember that it's okay to feel this way. Many of us encounter periods of confusion or doubt in our lives. It's often during these times that we have the opportunity to reflect, explore new possibilities, and eventually find our way forward. Embracing this uncertainty as part of the journey can lead to personal growth and discovery
          </p>
        </div>
          <Image
            src="/quote.svg"
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
      </div>
    </section>
  )
}

export default Camp