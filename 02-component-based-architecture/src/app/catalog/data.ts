export interface ICourse {
  id: string;
  name: string;
  description: string;
}

export interface IClass {
  id: string;
  course: ICourse;
  professor: string;
  durationDays: number;
}

export const courses: ICourse[] = [
  {
    id: 'AB1',
    name: 'Angular for beginners',
    description: '...',
  },
  {
    id: 'CBA1',
    name: 'Component based architecture',
    description: '...',
  },
  {
    id: 'IR1',
    name: 'Intro to React',
    description: '...',
  },
  {
    id: 'CAF1',
    name: 'Creating Advanced Form',
    description: '...',
  },
  {
    id: 'IN1',
    name: 'Intro to Next.js',
    description: '...',
  },
  {
    id: 'AN1',
    name: 'Advanced Next.js',
    description: '...',
  },
];

export const classCatalog: IClass[] = [
  {
    id: '999ed147-669e-4759-8aeb-e5231d9ee0d4',
    course: courses[0],
    professor: 'Petar Malamov',
    durationDays: 20,
  },
  {
    id: '6c7c7c3f-cedb-41c9-8c9f-8e2f8f96ccbe',
    course: courses[0],
    professor: 'Hristo Lesev',
    durationDays: 18,
  },
  {
    id: '89713889-9000-4afb-989a-a882be9a5056',
    course: courses[1],
    professor: 'Petar Malamov',
    durationDays: 19,
  },
  {
    id: '73f61015-c282-4f05-848e-b26d6185a59f',
    course: courses[1],
    professor: 'Hristo Lesev',
    durationDays: 18,
  },
  {
    id: '6425dd83-3826-4c1d-b1b9-34d5f23e745f',
    course: courses[2],
    professor: 'Petar Malamov',
    durationDays: 19,
  },
  {
    id: 'b1240e28-d734-46e4-97c3-35ddc447a576',
    course: courses[3],
    professor: 'Hristo Lesev',
    durationDays: 25,
  },
  {
    id: '3a201079-2924-4904-a395-af1b556c8f7b',
    course: courses[3],
    professor: 'Petar Malamov',
    durationDays: 22,
  },
  {
    id: 'baa8252c-dcfe-49a7-adea-ce39e816cf84',
    course: courses[4],
    professor: 'Hristo Lesev',
    durationDays: 23,
  },
  {
    id: '4897d7a4-2f09-404d-8765-57be0eeb88c2',
    course: courses[5],
    professor: 'Petar Malamov',
    durationDays: 21,
  },
  {
    id: '509a5fb0-06ad-4433-89d5-03a6e2e24373',
    course: courses[4],
    professor: 'Hristo Lesev',
    durationDays: 23,
  },
];
