import { Product } from '@/contexts/CartContext';
import dogFood from '@/assets/products/dog-food.jpg';
import dogToy from '@/assets/products/dog-toy.jpg';
import dogLeash from '@/assets/products/dog-leash.jpg';
import catFood from '@/assets/products/cat-food.jpg';
import catToy from '@/assets/products/cat-toy.jpg';
import litterBox from '@/assets/products/litter-box.jpg';
import groomingBrush from '@/assets/products/grooming-brush.jpg';
import petCollar from '@/assets/products/pet-collar.jpg';
import waterBowl from '@/assets/products/water-bowl.jpg';
import petBed from '@/assets/products/pet-bed.jpg';
import nailClippers from '@/assets/products/nail-clippers.jpg';
import petShampoo from '@/assets/products/pet-shampoo.jpg';
import chewToy from '@/assets/products/chew-toy.jpg';
import petCarrier from '@/assets/products/pet-carrier.jpg';
import petTreats from '@/assets/products/pet-treats.jpg';
import scratchingPost from '@/assets/products/scratching-post.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Dry Dog Food',
    price: 2500,
    image: dogFood,
    category: 'Food',
  },
  {
    id: '2',
    name: 'Colorful Rope Dog Toy',
    price: 450,
    image: dogToy,
    category: 'Toys',
  },
  {
    id: '3',
    name: 'Durable Nylon Dog Leash',
    price: 850,
    image: dogLeash,
    category: 'Accessories',
  },
  {
    id: '4',
    name: 'Premium Cat Food Can',
    price: 320,
    image: catFood,
    category: 'Food',
  },
  {
    id: '5',
    name: 'Feather Cat Toy with Bell',
    price: 280,
    image: catToy,
    category: 'Toys',
  },
  {
    id: '6',
    name: 'Modern Cat Litter Box',
    price: 1800,
    image: litterBox,
    category: 'Hygiene',
  },
  {
    id: '7',
    name: 'Professional Grooming Brush',
    price: 650,
    image: groomingBrush,
    category: 'Grooming',
  },
  {
    id: '8',
    name: 'Adjustable Pet Collar',
    price: 550,
    image: petCollar,
    category: 'Accessories',
  },
  {
    id: '9',
    name: 'Stainless Steel Water Bowl',
    price: 720,
    image: waterBowl,
    category: 'Feeding',
  },
  {
    id: '10',
    name: 'Cozy Pet Bed - Large',
    price: 3200,
    image: petBed,
    category: 'Comfort',
  },
  {
    id: '11',
    name: 'Professional Nail Clippers',
    price: 480,
    image: nailClippers,
    category: 'Grooming',
  },
  {
    id: '12',
    name: 'Natural Pet Shampoo',
    price: 890,
    image: petShampoo,
    category: 'Grooming',
  },
  {
    id: '13',
    name: 'Rubber Chew Toy',
    price: 380,
    image: chewToy,
    category: 'Toys',
  },
  {
    id: '14',
    name: 'Travel Pet Carrier',
    price: 2800,
    image: petCarrier,
    category: 'Travel',
  },
  {
    id: '15',
    name: 'Healthy Pet Treats',
    price: 520,
    image: petTreats,
    category: 'Food',
  },
  {
    id: '16',
    name: 'Cat Scratching Post',
    price: 1650,
    image: scratchingPost,
    category: 'Toys',
  },
];
