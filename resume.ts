/**
 * SINGLE SOURCE OF TRUTH.
 * Everything the website shows comes from this file, and this file must contain ONLY what is in your real resume.
 * Leave a field out (or an array empty) and that part of the site is automatically hidden - nothing is invented.
 * Put your photo at public/photo.jpg and your original resume PDF at public/resume.pdf.
 */
export interface Experience { company: string; role: string; duration: string; responsibilities?: string[]; achievements?: string[]; tech?: string[]; }
export interface Project { name: string; description: string; tech?: string[]; contribution?: string; results?: string; github?: string; demo?: string; image?: string; }
export interface Education { degree: string; institution: string; duration: string; details?: string; }
export interface Achievement { title: string; type?: string; detail?: string; }
export interface SkillGroup { category: string; items: string[]; }
export interface Resume {
  name: string; title: string; intro: string; photo: string; photoAlt: string; resumeFile: string;
  about?: { background?: string; interests?: string[]; focus?: string; direction?: string; strengths?: string[] };
  experience: Experience[]; projects: Project[]; skills: SkillGroup[]; education: Education[]; achievements: Achievement[];
  contact: { email?: string; linkedin?: string; github?: string; portfolio?: string; other?: { label: string; url: string }[] };
}

const resume: Resume = {
  // ---- REPLACE the values below with text copied from your resume ----
  name: 'Your Name',
  title: 'Your Professional Title',
  intro: 'Write a short introduction using only facts from your resume.',
  photo: '/photo.jpg',
  photoAlt: 'Portrait photo of Your Name',
  resumeFile: '/resume.pdf',

  about: {
    // background: '...', interests: ['...'], focus: '...', direction: '...', strengths: ['...']
  },
  experience: [
    // { company: '...', role: '...', duration: '...', responsibilities: ['...'], achievements: ['...'], tech: ['...'] }
  ],
  projects: [
    // { name: '...', description: '...', tech: ['...'], contribution: '...', results: '...', github: 'https://...', demo: 'https://...', image: '/project1.png' }
  ],
  skills: [
    // { category: 'Programming Languages', items: ['...'] }, { category: 'Frameworks', items: ['...'] }
  ],
  education: [
    // { degree: '...', institution: '...', duration: '...', details: '...' }
  ],
  achievements: [
    // { title: '...', type: 'Certification', detail: '...' }
  ],
  contact: {
    // email: 'name@example.com', linkedin: 'https://linkedin.com/in/...', github: 'https://github.com/...', portfolio: 'https://...'
  }
};
export default resume;
