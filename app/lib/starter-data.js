const users = [
  {
    id: "a9615ec3-e6ca-40d5-a6a6-bcee1492c1bf",
    name: null,
    email: "georgeh2@bookmarky.com",
    image: "/users/avatar.png",
  },
  {
    id: "407e7e0c-a8a3-480e-b5c6-c97846f074ec",
    name: null,
    email: "adamp00@bookmarky.com",
    image: "/users/avatar.png",
  },
];

const categories = [
  {
    id: "cd974ba5-eb76-4d2a-97a1-5815bf128f16",
    name: "Entertainment",
  },
  {
    id: "6f52d78f-eb74-4a2a-b890-738b84fbf7a4",
    name: "Tools",
  },
  {
    id: "ae1f6044-494e-4588-b116-ca2429568316",
    name: "Cisco",
  },
  {
    id: "9a908c22-dc84-4425-8b27-3c31c524b901",
    name: "Social Media",
  },
];

const bookmarks = [
  {
    id: "98e87f6a-5acb-4cf7-a5a1-b4b332ba7495",
    user_id: users[0].id,
    category_id: categories[0],
    title: "YouTube",
    href: "https://youtube.com",
    image_url: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
    created_at: "2023-11-19T11:05:19Z",
    updated_at: "2024-01-30T23:06:06Z",
  },
  {
    id: "66e3f5e6-2fe7-48c5-803b-5407efa37647",
    user_id: users[1].id,
    category_id: categories[2],
    title: "Cisco DevNet",
    href: "https://developer.cisco.com",
    image_url:
      "https://www.google.com/s2/favicons?domain=developer.cisco.com&sz=128",
    created_at: "2023-01-06T21:18:15Z",
    updated_at: "2023-02-15T07:48:54Z",
  },
  {
    id: "8538caed-feb9-4ceb-bbba-6ffb690bafdf",
    user_id: users[1].id,
    category_id: categories[1],
    title: "Docker",
    href: "https://docker.com",
    image_url: "https://www.google.com/s2/favicons?domain=docker.com&sz=128",
    created_at: "2023-11-21T23:25:15Z",
    updated_at: "2024-02-11T09:42:24Z",
  },
  {
    id: "f1d76d77-49c6-4af1-a54e-b380ca30f059",
    user_id: users[0].id,
    category_id: categories[3],
    title: "LinkedIn",
    href: "https://linkedin.com",
    image_url: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
    created_at: "2023-02-03T17:17:23Z",
    updated_at: "2023-12-16T09:08:10Z",
  },
];

export { users, categories, bookmarks };
