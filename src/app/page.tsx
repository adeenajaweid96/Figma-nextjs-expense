// import Image from "next/image";
import Hero from './components/hero';
import Product from './components/product';
import Element from './components/element';
import Section from './components/section1';
import Section2 from './components/section2';
// import Section3 from './components/section3';
import Images from './components/imagesection';

export default function Home() {
  return (
    <div>
<Hero/>
<Product/>
<Element/>
<Section/>
<Section2/>
{/* <Section3/> */}
<Images/>
</div>
  )
}
