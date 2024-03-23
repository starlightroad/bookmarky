export const users = [
  {
    id: "6d64a8d9-c21a-49eb-97e5-3716ce8bf961",
    email: "user@bookmarky.com",
    image: "/avatars/cat.png",
  },
];

export const categories = [
  {
    id: "84b35b98-1cdd-4658-a65c-101f681f7324",
    user_id: users[0].id,
    name: "Finance",
  },
  {
    id: "8151dc3d-18ab-440c-a1c9-b84ffde190da",
    user_id: users[0].id,
    name: "Gaming",
  },
  {
    id: "f75a59e2-018c-4c94-aaec-17845890fdd6",
    user_id: users[0].id,
    name: "Entertainment",
  },
  {
    id: "4fc474a3-3c5a-4182-ab9a-33cfaee0a3d6",
    user_id: users[0].id,
    name: "Shopping",
  },
];

export const bookmarks = [
  {
    id: "a99d7112-1139-4184-8fe5-ebdcff1d23c8",
    user_id: users[0].id,
    category_id: categories[3].id,
    title: "Amazon",
    href: "https://amazon.com",
    image: "",
    created_at: "2023-05-25T13:05:41Z",
    updated_at: "2023-05-25T13:05:41Z",
  },
  {
    id: "1e339509-e44a-4048-ad35-6308431fcd2e",
    user_id: users[0].id,
    category_id: categories[1].id,
    title: "Pokemon Database",
    href: "https://pokemondb.net",
    image: "",
    created_at: "2023-11-03T14:57:02Z",
    updated_at: "2024-01-17T12:47:03Z",
  },
  {
    id: "aaac88d3-d1da-45e8-bb9d-1023482c101f",
    user_id: users[0].id,
    category_id: categories[0].id,
    title: "American Express",
    href: "https://americanexpress.com",
    image: "",
    created_at: "2023-10-18T11:04:58Z",
    updated_at: "2024-02-09T20:49:29Z",
  },
  {
    id: "68a251ec-f96e-45eb-aff4-14199ef0c545",
    user_id: users[0].id,
    category_id: categories[2].id,
    title: "Netflix",
    href: "https://netflix.com",
    image: "",
    created_at: "2023-01-12T21:55:18Z",
    updated_at: "2023-01-12T21:55:18Z",
  },
];
