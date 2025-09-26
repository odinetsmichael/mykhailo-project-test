export default defineEventHandler(() => {
  const products = [
    {
      id: 1,
      serialNumber: 1234,
      photo: 'monitor.webp',
      title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
      type: 'Monitor',
      specification: 'specification1',
      guarantee: { start: '2017-06-29 12:09:33', end: '2025-06-29 12:09:33' },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: 1,
      date: '2017-06-29 12:09:33',
      status: true, // free
      availability: false,
    },
    {
      id: 2,
      serialNumber: 5678,
      photo: 'monitor.webp',
      title: 'Dell Inspiron 15 5000',
      type: 'Laptop',
      specification: 'specification2',
      guarantee: { start: '2017-07-01 12:09:33', end: '2021-07-01 12:09:33' },
      price: [
        { value: 500, symbol: 'USD', isDefault: 1 },
        { value: 13000, symbol: 'UAH', isDefault: 0 },
      ],
      order: 2,
      date: '2017-07-01 12:09:33',
      status: false, // repair
      availability: true,
    },
    {
      id: 3,
      serialNumber: 9876,
      photo: 'monitor.webp',
      title: 'HP EliteBook 840 G3',
      type: 'Laptop',
      specification: 'specification1',
      guarantee: { start: '2018-01-10 12:09:33', end: '2023-01-10 12:09:33' },
      price: [
        { value: 900, symbol: 'USD', isDefault: 1 },
        { value: 23400, symbol: 'UAH', isDefault: 0 },
      ],
      order: 2,
      date: '2018-01-10 12:09:33',
      status: true, // free
      availability: false,
    },
    {
      id: 4,
      serialNumber: 5432,
      photo: 'monitor.webp',
      title: 'Samsung Odyssey G7',
      type: 'Monitor',
      specification: 'specification2',
      guarantee: { start: '2019-03-15 12:09:33', end: '2024-03-15 12:09:33' },
      price: [
        { value: 700, symbol: 'USD', isDefault: 1 },
        { value: 18200, symbol: 'UAH', isDefault: 0 },
      ],
      order: 3,
      date: '2019-03-15 12:09:33',
      status: true, // free
      availability: true,
    },
    {
      id: 5,
      serialNumber: 6543,
      photo: 'monitor.webp',
      title: 'Lenovo ThinkPad T14',
      specification: 'specification1',
      guarantee: { start: '2020-05-20 12:09:33', end: '2025-05-20 12:09:33' },
      price: [
        { value: 1200, symbol: 'USD', isDefault: 1 },
        { value: 31200, symbol: 'UAH', isDefault: 0 },
      ],
      order: 3,
      date: '2020-05-20 12:09:33',
      status: false, // repair
      availability: true,
    },
    {
      id: 6,
      serialNumber: 2468,
      photo: 'monitor.webp',
      title: 'Apple MacBook Pro 16"',
      type: 'Laptop',
      specification: 'specification2',
      guarantee: { start: '2021-11-01 12:09:33', end: '2026-11-01 12:09:33' },
      price: [
        { value: 2500, symbol: 'USD', isDefault: 1 },
        { value: 65000, symbol: 'UAH', isDefault: 0 },
      ],
      order: 4,
      date: '2021-11-01 12:09:33',
      status: true, // free
      availability: false,
    },
    {
      id: 7,
      serialNumber: 1357,
      photo: 'monitor.webp',
      title: 'LG UltraWide 34"',
      type: 'Monitor',
      specification: 'specification1',
      guarantee: { start: '2022-02-14 12:09:33', end: '2027-02-14 12:09:33' },
      price: [
        { value: 800, symbol: 'USD', isDefault: 1 },
        { value: 20800, symbol: 'UAH', isDefault: 0 },
      ],
      order: 4,
      date: '2022-02-14 12:09:33',
      status: true, // free
      availability: true,
    },
  ]

  return products
})
