const carData = [
  {
    id: "1",
    image: "/maruti.png",
    title: "Maruti Suzuki Dzire",
    description:
      "The Maruti Suzuki Dzire is a stylish and fuel-efficient sedan known for its comfort and advanced features. It offers a smooth driving experience with excellent mileage.",
    overview: [
      " Top speed: 180 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 22 km/l.",
    ],
    rentPrice: "$199 per day",
    category: "Sedan",
  },
  {
    id: "2",
    image: "/NicePng_corolla-png_4050279.png",
    title: "Corolla",
    description:
      "The Toyota Corolla is a reliable and well-rounded compact car with a reputation for durability. It features a comfortable ride, modern technology, and a spacious interior.",
    overview: [
      " Top speed: 190 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 16 km/l.",
    ],
    rentPrice: "$249 per day",
    category: "Compact",
  },
  {
    id: "3",
    image: "/cultus.png",
    title: "Cultus",
    description:
      "The Suzuki Cultus is a compact hatchback that offers great fuel efficiency and a practical design. It's perfect for urban driving and provides a comfortable ride.",
    overview: [
      " Top speed: 160 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 20 km/l.",
    ],
    rentPrice: "$189 per day",
    category: "Hatchback",
  },
  {
    id: "4",
    image: "/NicePng_honda-city-car-png_7910297.png",
    title: "Honda Civic",
    description:
      "The Honda Civic is a versatile and sporty compact car with a strong performance and a refined interior. It combines efficiency with a fun driving experience.",
    overview: [
      " Top speed: 220 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 15 km/l.",
    ],
    rentPrice: "$299 per day",
    category: "Sedan",
  },
  {
    id: "5",
    image: "/NicePng_future-car-png_5450702.png",
    title: "White Audi",
    description:
      "The White Audi is a luxury vehicle known for its high performance, stylish design, and premium features. It offers an exceptional driving experience with top-notch comfort.",
    overview: [
      " Top speed: 250 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 12 km/l.",
    ],
    rentPrice: "$349 per day",
    category: "Luxury",
  },
  {
    id: "6",
    image: "/NicePng_audi-png_1392855.png",
    title: "Orange Audi",
    description:
      "The Orange Audi combines sporty aesthetics with powerful performance. It's a high-end vehicle designed for those who appreciate both style and substance.",
    overview: [
      " Top speed: 280 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 10 km/l.",
    ],
    rentPrice: "$379 per day",
    category: "Luxury",
  },
  {
    id: "7",
    image: "/wagon r.png",
    title: "Wagon R",
    description:
      "The Suzuki Wagon R is a compact and practical car known for its spacious interior and fuel efficiency. It's an ideal choice for city driving and daily commutes.",
    overview: [
      " Top speed: 150 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 22 km/l.",
    ],
    rentPrice: "$159 per day",
    category: "Compact",
  },

  {
    id: "8",
    image: "/luxury-1 (4).png",
    title: "BMW 7 Series",
    description:
      "The BMW 7 Series is a luxurious full-size sedan known for its advanced technology, plush interior, and superior performance.",
    overview: [
      " Top speed: 250 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 10 km/l.",
    ],
    rentPrice: "$499 per day",
    category: "Luxury",
  },
  {
    id: "9",
    image: "/luxury-1 (3).png",
    title: "Mercedes-Benz S-Class",
    description:
      "The Mercedes-Benz S-Class is renowned for its opulence, cutting-edge features, and exceptional driving dynamics.",
    overview: [
      " Top speed: 240 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 11 km/l.",
    ],
    rentPrice: "$459 per day",
    category: "Luxury",
  },
  {
    id: "10",
    image: "/luxury-1 (2).png",
    title: "Porsche Panamera",
    description:
      "The Porsche Panamera is a high-performance luxury sedan with a sleek design and an exhilarating driving experience.",
    overview: [
      " Top speed: 270 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 9 km/l.",
    ],
    rentPrice: "$529 per day",
    category: "Luxury",
  },
  {
    id: "11",
    image: "/luxury-1 (1).png",
    title: "Jaguar XJ",
    description:
      "The Jaguar XJ combines luxury with performance, offering a sophisticated design and a refined driving experience.",
    overview: [
      " Top speed: 260 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 10 km/l.",
    ],
    rentPrice: "$499 per day",
    category: "Luxury",
  },
  {
    id: "12",
    image: "/sedan-1.png",
    title: "Toyota Camry",
    description:
      "The Toyota Camry is a midsize sedan with a reputation for reliability, comfort, and a smooth ride.",
    overview: [
      " Top speed: 200 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 14 km/l.",
    ],
    rentPrice: "$249 per day",
    category: "Sedan",
  },
  {
    id: "13",
    image: "/sedan-2.png",
    title: "Hyundai Sonata",
    description:
      "The Hyundai Sonata offers a spacious interior, modern technology, and a smooth driving experience.",
    overview: [
      " Top speed: 210 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 13 km/l.",
    ],
    rentPrice: "$239 per day",
    category: "Sedan",
  },
  {
    id: "14",
    image: "/sedan-3.png",
    title: "Ford Fusion",
    description:
      "The Ford Fusion is a well-rounded sedan with a comfortable interior and a choice of powerful engines.",
    overview: [
      " Top speed: 220 km/h.",
      " Capacity: 5 seats.",
      " Fuel efficiency: 12 km/l.",
    ],
    rentPrice: "$259 per day",
    category: "Sedan",
  },
  {
    id: "15",
    image: "/compact.png",
    title: "Toyota Aurion",
    description:
      "The Toyota Aurion a well-rounded sedan with a comfortable interior and a choice of powerful engines.",
    overview: [
      " Top speed: 130 km/h.",
      " Capacity: 4 seats.",
      " Fuel efficiency: 10 km/l.",
    ],
    rentPrice: "$159 per day",
    category: "Compact",
  },
];

export default carData;
