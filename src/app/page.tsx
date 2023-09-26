import { ProductFilters } from '@/components/product-filters';
import ProductList from '@/components/product-list';
import { Metadata } from 'next';
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, SectionContainer } from 'tp-kit/components';
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
const categories = PRODUCTS_CATEGORY_DATA;



export const metadata: Metadata = {
  title: "Page d'accueil - Starbucks",
  description: "Commandez de délicieuses boissons préparées avec soin par nos baristas"
}

export default function Home() {
  return ( 
    <main>
      <SectionContainer>
        <BreadCrumbs
          items={[
            {
              label: 'Accueil',
              url: '#'
            },
          ]}
        />
      </SectionContainer>
      <ProductList showFilters={true} categories={categories}/>
    </main>
  )
}
