import React from 'react';
import Ping from './Ping';
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';

const View = async ({id}: {id:string}) => {
  const {views: totalViews} = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id});
  
  //TODO: Update the number of views
  
  const parseNumbers = (num: number) => {
    if (num === 1) {
      return 'Views: 1';
    } else {
      return `Views: ${num}`
    }
  }
  return <div className='view-container'>
    <div className='absolute -top-2 -right-2'>
      <Ping/>
    </div>

    <p className="view-text">
      <span className='font-black'>{parseNumbers(totalViews)}</span>
    </p>
  </div>;
};

export default View;