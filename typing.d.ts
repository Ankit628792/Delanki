interface Dev {
    _id: string,
    name: string,
    banner: string,
    image: string,
    designation: string,
    bio: string,
    linkedin: string,
    github: string,
    other: string
}

interface User {
    _id: string,
    name: string,
    email: string,
    designation: string,
    bio: string,
    mobile: number,
    image: string,
    banner: string,
    linkedin: string,
    github: string,
    other: string,
    resume: string,
    status: string,
    role: string,
    skills: Array<string>,
    verified: boolean,
    createdAt: Date,
    updatedAt: Date,
}

interface Project {
    _id: string,
    title: string,
    userId: string,
    description: string,
    portrait: string,
    landscape: string,
    link: string,
    techs: Array<string>,
    createdAt: Date,
    updatedAt: Date,
}

interface Devs {
    devs: Dev[]
}
interface Projects {
    projects: Project[]
}