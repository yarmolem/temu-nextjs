import { faker } from '@faker-js/faker'
import slugify from 'slugify'
import { IProduct } from '@/interface/product.types'

export const products = [
  {
    id: '67f03ea1-36c4-45e9-97aa-b9570147325f',
    title: 'Luxurious Granite Hat',
    price: 998.82,
    cover: 'https://picsum.photos/seed/aKEUsrLs/640/480',
    slug: 'Luxurious-Granite-Hat',
    sales: 633,
    rating: 3.2498787832446396,
    images: [
      'https://picsum.photos/seed/xWxsVPt9D/640/480',
      'https://picsum.photos/seed/Bazj4B/640/480',
      'https://picsum.photos/seed/E9pVj9H/640/480'
    ]
  },
  {
    id: 'f5ba0495-44f4-4f21-93af-16d1758111a9',
    title: 'Oriental Plastic Salad',
    price: 4.1,
    cover: 'https://picsum.photos/seed/1be7v6k7cL/640/480',
    slug: 'Oriental-Plastic-Salad',
    sales: 2978,
    rating: 2.5217814254574478,
    images: [
      'https://picsum.photos/seed/EmLMT/640/480',
      'https://picsum.photos/seed/AhMQ9B/640/480',
      'https://picsum.photos/seed/9hO5PgJ1/640/480'
    ]
  },
  {
    id: '2691410c-89d7-419f-81e4-12aa234bc66a',
    title: 'Unbranded Fresh Soap',
    price: 502.49,
    cover: 'https://picsum.photos/seed/PPnnF/640/480',
    slug: 'Unbranded-Fresh-Soap',
    sales: 3954,
    rating: 4.656783016398549,
    images: [
      'https://picsum.photos/seed/sUO3Ve/640/480',
      'https://picsum.photos/seed/7PfofGJkVS/640/480',
      'https://picsum.photos/seed/RGGmEj/640/480'
    ]
  },
  {
    id: 'd3af4234-4a3a-49d2-9cb1-4e70ada97911',
    title: 'Oriental Bronze Chicken',
    price: 225.19,
    cover: 'https://picsum.photos/seed/RZ8Ql5/640/480',
    slug: 'Oriental-Bronze-Chicken',
    sales: 213,
    rating: 2.45517905568704,
    images: [
      'https://picsum.photos/seed/8OxoiCUc8G/640/480',
      'https://picsum.photos/seed/ph6fKEl5/640/480',
      'https://picsum.photos/seed/yYltXmP/640/480'
    ]
  },
  {
    id: 'e6fff85c-8530-4aaf-998e-eed1bb426d8b',
    title: 'Incredible Frozen Table',
    price: 659.54,
    cover: 'https://picsum.photos/seed/7e1ReUkIu/640/480',
    slug: 'Incredible-Frozen-Table',
    sales: 9316,
    rating: 3.044930623145774,
    images: [
      'https://picsum.photos/seed/AVGfgdHJ/640/480',
      'https://picsum.photos/seed/hg2rWj/640/480',
      'https://picsum.photos/seed/A15kd/640/480'
    ]
  },
  {
    id: 'f6d7c65b-15b4-4055-b363-e0ab20759841',
    title: 'Gorgeous Wooden Cheese',
    price: 471.28,
    cover: 'https://picsum.photos/seed/zDsZVpo2GL/640/480',
    slug: 'Gorgeous-Wooden-Cheese',
    sales: 3037,
    rating: 2.8347824001684785,
    images: [
      'https://picsum.photos/seed/7WMJbPt1/640/480',
      'https://picsum.photos/seed/Ap40JrXnT/640/480',
      'https://picsum.photos/seed/aWg83KBMUq/640/480'
    ]
  },
  {
    id: '568c3683-fa41-4605-b27c-34bd538c42bd',
    title: 'Fantastic Rubber Towels',
    price: 47.91,
    cover: 'https://picsum.photos/seed/wNLFZ/640/480',
    slug: 'Fantastic-Rubber-Towels',
    sales: 7693,
    rating: 1.5668524045031518,
    images: [
      'https://picsum.photos/seed/SCWQfl6z/640/480',
      'https://picsum.photos/seed/LCY3Xs/640/480',
      'https://picsum.photos/seed/v6rlOK/640/480'
    ]
  },
  {
    id: '23b73141-e9e5-4cbf-b6eb-0e49892f6665',
    title: 'Licensed Concrete Tuna',
    price: 530.82,
    cover: 'https://picsum.photos/seed/8w4Y1/640/480',
    slug: 'Licensed-Concrete-Tuna',
    sales: 7904,
    rating: 2.881526768906042,
    images: [
      'https://picsum.photos/seed/Qcf8AEP/640/480',
      'https://picsum.photos/seed/xlVLx5g1/640/480',
      'https://picsum.photos/seed/lg0BHeU5M/640/480'
    ]
  },
  {
    id: '9aadad50-51f7-47d7-8aa7-6f1ee3e8322f',
    title: 'Luxurious Frozen Chicken',
    price: 690.87,
    cover: 'https://picsum.photos/seed/Txwgec/640/480',
    slug: 'Luxurious-Frozen-Chicken',
    sales: 1506,
    rating: 1.488712199497968,
    images: [
      'https://picsum.photos/seed/mMk19t5J/640/480',
      'https://picsum.photos/seed/KDhSz8C/640/480',
      'https://picsum.photos/seed/25T8DrouGH/640/480'
    ]
  },
  {
    id: '3362451d-ad5f-4ca7-be65-1bb1b54d1751',
    title: 'Electronic Metal Keyboard',
    price: 711.51,
    cover: 'https://picsum.photos/seed/0nb7ppDb/640/480',
    slug: 'Electronic-Metal-Keyboard',
    sales: 5714,
    rating: 3.3873921493068337,
    images: [
      'https://picsum.photos/seed/ONjQ5GSV/640/480',
      'https://picsum.photos/seed/hAOrf/640/480',
      'https://picsum.photos/seed/SUU7SyKY/640/480'
    ]
  },
  {
    id: '8d9471a7-eaa4-43fe-8ef5-89c41763686f',
    title: 'Refined Steel Mouse',
    price: 982.71,
    cover: 'https://picsum.photos/seed/Tw9xs/640/480',
    slug: 'Refined-Steel-Mouse',
    sales: 5688,
    rating: 4.625034844502807,
    images: [
      'https://picsum.photos/seed/IbHPz/640/480',
      'https://picsum.photos/seed/NVWJyn/640/480',
      'https://picsum.photos/seed/psdf2g4Gk/640/480'
    ]
  },
  {
    id: '9f427eaa-d95b-4ffb-9c67-5769ffb0cd27',
    title: 'Recycled Cotton Chips',
    price: 746.47,
    cover: 'https://picsum.photos/seed/pheYqrc/640/480',
    slug: 'Recycled-Cotton-Chips',
    sales: 339,
    rating: 0.26497734477743506,
    images: [
      'https://picsum.photos/seed/Nd85xva/640/480',
      'https://picsum.photos/seed/u5yl6A/640/480',
      'https://picsum.photos/seed/nGOrY/640/480'
    ]
  },
  {
    id: 'e047f49c-997c-4a1c-804f-24b8b1ac33cc',
    title: 'Fantastic Plastic Chair',
    price: 960.73,
    cover: 'https://picsum.photos/seed/Lf9Ohyv/640/480',
    slug: 'Fantastic-Plastic-Chair',
    sales: 8471,
    rating: 3.4205220628064126,
    images: [
      'https://picsum.photos/seed/1YTxef/640/480',
      'https://picsum.photos/seed/nNKEs/640/480',
      'https://picsum.photos/seed/BD6IIU8N/640/480'
    ]
  },
  {
    id: 'ef01a4d7-aac8-488d-a067-749c7d1fa034',
    title: 'Gorgeous Soft Salad',
    price: 776.74,
    cover: 'https://picsum.photos/seed/G0L7LhSxIK/640/480',
    slug: 'Gorgeous-Soft-Salad',
    sales: 7356,
    rating: 4.913331806892529,
    images: [
      'https://picsum.photos/seed/ZptsPP0HM/640/480',
      'https://picsum.photos/seed/qdvRK7/640/480',
      'https://picsum.photos/seed/Q6s18/640/480'
    ]
  },
  {
    id: '22e352a4-2249-4d53-9c60-d4fc444b6fd8',
    title: 'Luxurious Plastic Computer',
    price: 228.06,
    cover: 'https://picsum.photos/seed/5i5Tdo13Jd/640/480',
    slug: 'Luxurious-Plastic-Computer',
    sales: 7400,
    rating: 3.307127009611577,
    images: [
      'https://picsum.photos/seed/XdOKkc/640/480',
      'https://picsum.photos/seed/9EOoQ/640/480',
      'https://picsum.photos/seed/DVWC8sJnG/640/480'
    ]
  },
  {
    id: 'd9a3aceb-f60d-4e04-9c56-5bd36b80bf9f',
    title: 'Oriental Bronze Mouse',
    price: 12.09,
    cover: 'https://picsum.photos/seed/t9m4RXBy/640/480',
    slug: 'Oriental-Bronze-Mouse',
    sales: 1121,
    rating: 4.302179536316544,
    images: [
      'https://picsum.photos/seed/fT7AkPw11Q/640/480',
      'https://picsum.photos/seed/byx8oj/640/480',
      'https://picsum.photos/seed/ZNZcHrr/640/480'
    ]
  },
  {
    id: '733c1be1-7c97-40a7-a895-a58b2b9d1e89',
    title: 'Rustic Bronze Shoes',
    price: 56.23,
    cover: 'https://picsum.photos/seed/B2zysmFJ/640/480',
    slug: 'Rustic-Bronze-Shoes',
    sales: 3075,
    rating: 3.150277058593929,
    images: [
      'https://picsum.photos/seed/qs3eU3vfbG/640/480',
      'https://picsum.photos/seed/UNvck/640/480',
      'https://picsum.photos/seed/xBKxRB/640/480'
    ]
  },
  {
    id: 'a97365e5-c5b5-4c70-8347-3f0437f3fd90',
    title: 'Tasty Fresh Shirt',
    price: 751.54,
    cover: 'https://picsum.photos/seed/bb3tY5Xih/640/480',
    slug: 'Tasty-Fresh-Shirt',
    sales: 5801,
    rating: 1.2115228292532265,
    images: [
      'https://picsum.photos/seed/AuaS3he/640/480',
      'https://picsum.photos/seed/ev5Yh/640/480',
      'https://picsum.photos/seed/5w5P92mZ9I/640/480'
    ]
  },
  {
    id: '526469ee-0a50-4af2-b19c-fa474431be14',
    title: 'Fantastic Metal Towels',
    price: 318.92,
    cover: 'https://picsum.photos/seed/RdRRvwD9UN/640/480',
    slug: 'Fantastic-Metal-Towels',
    sales: 4709,
    rating: 3.107757359975949,
    images: [
      'https://picsum.photos/seed/mOHkfjE8/640/480',
      'https://picsum.photos/seed/Cy3Dy25/640/480',
      'https://picsum.photos/seed/YFqyzX9HhZ/640/480'
    ]
  },
  {
    id: '0a89a80e-5b03-4611-bc1d-87685b1bcfe8',
    title: 'Sleek Concrete Soap',
    price: 564.08,
    cover: 'https://picsum.photos/seed/Qy2k5bIaR/640/480',
    slug: 'Sleek-Concrete-Soap',
    sales: 5005,
    rating: 0.565623021684587,
    images: [
      'https://picsum.photos/seed/f3GD0qBj7D/640/480',
      'https://picsum.photos/seed/fhtpNVjT/640/480',
      'https://picsum.photos/seed/RvShSBlgK/640/480'
    ]
  }
]

function createRandomProduct(): IProduct {
  const title = faker.commerce.productName()
  const cover = faker.image.urlPicsumPhotos()
  const price = faker.number.float({ min: 0, max: 1000, multipleOf: 0.01 })

  return {
    id: faker.string.uuid(),
    title,
    price,
    cover: faker.image.urlPicsumPhotos(),
    slug: slugify(title),
    sales: faker.number.int({ min: 0, max: 10_000 }),
    rating: faker.number.float({ min: 0, max: 5 }),
    images: [
      cover,
      faker.image.urlPicsumPhotos(),
      faker.image.urlPicsumPhotos()
    ]
  }
}

export function generateProducts(count: number): IProduct[] {
  const products = []

  for (let i = 0; i < count; i++) {
    products.push(createRandomProduct())
  }

  return products
}

/* console.log(generateProducts(20)) */
