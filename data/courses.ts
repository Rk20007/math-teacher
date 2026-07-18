export interface Course {
  id: string
  slug: string
  title: string
  description: string
  level: string
  /** Typical school grades covered, e.g. "Grades 11–12" */
  grades: string
  /** Examination board(s), e.g. "IB Diploma" */
  board: string
  /** Who the course suits */
  suitableFor: string
  features: string[]
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'ib-mathematics-aa',
    title: 'IB Mathematics AA & AI',
    description: 'Complete IB Mathematics coaching across Analysis & Approaches and Applications & Interpretation, at both Standard and Higher Level.',
    level: 'SL & HL',
    grades: 'Grades 11–12',
    board: 'IB Diploma Programme',
    suitableFor: 'IB Diploma students targeting a 6–7 and strong IA support',
    features: [
      'Comprehensive topic & IA coverage',
      'Past paper & mock assessments',
      'Personalized study plans',
      'Exam-technique coaching',
    ],
  },
  {
    id: '2',
    slug: 'igcse-mathematics',
    title: 'IGCSE Mathematics',
    description: 'Cambridge & Edexcel IGCSE Mathematics preparation for both Core and Extended tiers, built around exam technique and confidence.',
    level: 'Core & Extended',
    grades: 'Grades 9–10',
    board: 'Cambridge & Edexcel IGCSE',
    suitableFor: 'IGCSE students aiming to secure a grade A / A*',
    features: [
      'All Core & Extended topics',
      'Past paper practice',
      'Time-management strategies',
      'Regular progress checks',
    ],
  },
  {
    id: '3',
    slug: 'a-level-mathematics',
    title: 'A-Level Mathematics',
    description: 'Advanced A-Level Mathematics covering Pure, Mechanics and Statistics, with the depth needed for top universities.',
    level: 'AS & A2',
    grades: 'Grades 12–13',
    board: 'Edexcel, AQA & Cambridge',
    suitableFor: 'A-Level students and university-bound STEM applicants',
    features: [
      'Pure Mathematics mastery',
      'Mechanics & Statistics',
      'University preparation',
      'Challenging problem sets',
    ],
  },
  {
    id: '4',
    slug: 'cbse-mathematics',
    title: 'CBSE Mathematics',
    description: 'Comprehensive CBSE Mathematics with a proven track record of 90%+ board scores and a strong JEE foundation.',
    level: 'Grades 11–12',
    grades: 'Grades 9–12',
    board: 'CBSE',
    suitableFor: 'CBSE students targeting board excellence & JEE readiness',
    features: [
      'Full syllabus coverage',
      'Board exam preparation',
      'JEE foundation building',
      'Previous-year papers',
    ],
  },
  {
    id: '5',
    slug: 'foundation-mathematics',
    title: 'Foundation Mathematics (Grade 9–10)',
    description: 'Foundation building across boards to close gaps early and prepare students for IGCSE, CBSE and IB pathways.',
    level: 'Grades 9–10',
    grades: 'Grades 9–10',
    board: 'IGCSE, CBSE & Emirates',
    suitableFor: 'Students strengthening fundamentals before senior years',
    features: [
      'Concept clarity & fundamentals',
      'Cross-board readiness',
      'Confidence building',
      'Steady weekly practice',
    ],
  },
  {
    id: '6',
    slug: 'jee-preparation',
    title: 'JEE Preparation (Mathematics)',
    description: 'Intensive mathematics preparation for JEE Main & Advanced with competitive problem-solving and exam strategy.',
    level: 'Advanced',
    grades: 'Grades 11–12',
    board: 'JEE Main & Advanced',
    suitableFor: 'Engineering aspirants preparing for competitive entrance exams',
    features: [
      'Advanced problem-solving',
      'Competitive exam strategy',
      'Timed mock tests',
      'Doubt-clearing sessions',
    ],
  },
]
