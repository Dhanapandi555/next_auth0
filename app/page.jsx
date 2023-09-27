'use client';

import React,{useEffect} from 'react';
import { useRouter } from 'next/router';
import Hero from '../components/Hero';
import Content from '../components/Content';
function removeWwwFromString(inputString) {
  return inputString?.replace('www.', '');
}
export default function Index() {
  useEffect(() => {
    const { hostname } = window.location;
    console.log("=-=-=",hostname)
    console.log(window.location.href)
    if (hostname?.includes('www.') ) {
      // Redirect to localhost
      window.location.href = removeWwwFromString(window.location.href);
    }
  }, []);
  return (
    <>
      <Hero />
      <hr />
      <Content />
    </>
  );
}
