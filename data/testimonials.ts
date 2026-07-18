export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  /** Specific course / curriculum & level, e.g. "IB HL Mathematics" */
  course: string
  /** Grade journey, e.g. "Grade 4 → Grade 6" */
  improvement: string
  /** School, shown where the family has given permission */
  school?: string
}

export interface GoogleReview {
  id: string
  author: string
  content: string
  rating: number
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima Al Mansouri',
    role: 'Parent',
    content:
      'My son improved from a C to an A* in just 6 months. Anil breaks down complex concepts into easy-to-understand parts, and the personalized attention made all the difference.',
    rating: 5,
    course: 'IGCSE Mathematics (Extended)',
    improvement: 'Grade C → Grade A*',
    school: 'GEMS Wellington',
  },
  {
    id: '2',
    name: 'Ahmed Al Maktoum',
    role: 'Parent',
    content:
      'Our daughter was struggling with IB HL Mathematics. Now she is confident and scoring consistently. Anil’s patience and expertise are unmatched — highly recommended!',
    rating: 5,
    course: 'IB HL Mathematics AA',
    improvement: 'Grade 4 → Grade 6',
    school: 'Dubai International Academy',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Parent',
    content:
      'Excellent tutor! My son went from failing to passing with distinction. The personalized approach and steady practice completely changed his confidence in maths.',
    rating: 5,
    course: 'CBSE Mathematics (Grade 11)',
    improvement: '58% → 92%',
    school: 'Delhi Private School, Sharjah',
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    role: 'Student',
    content:
      'Anil sir is the best mathematics teacher I have ever had. He explains everything so clearly and is always patient. I went from dreading maths to actually enjoying it.',
    rating: 5,
    course: 'IGCSE Mathematics',
    improvement: 'Grade B → Grade A',
  },
  {
    id: '5',
    name: 'Mohammed Hassan',
    role: 'Parent',
    content:
      'My daughter’s grades improved dramatically within a couple of months. His teaching style is engaging and results-oriented — worth every dirham spent.',
    rating: 5,
    course: 'IB SL Mathematics AI',
    improvement: 'Grade 3 → Grade 6',
    school: 'GEMS Modern Academy',
  },
  {
    id: '6',
    name: 'Neha Verma',
    role: 'Parent',
    content:
      'Anil helped my son build a rock-solid foundation for competitive exams. The strategic approach and regular mock tests made a real, measurable difference.',
    rating: 5,
    course: 'A-Level Mathematics',
    improvement: 'Grade C → Grade A',
    school: 'The Indian High School, Dubai',
  },
]

export const googleReviews: GoogleReview[] = [
  {
    id: '1',
    author: 'Rashid Al Mansouri',
    content:
      'Outstanding tutor with deep knowledge of IB mathematics. My son’s grades improved significantly. Highly recommended!',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    id: '2',
    author: 'Layla Ahmed',
    content:
      'Best mathematics tutor in Dubai. Patient, professional, and delivers results. My daughter is now confident about her exams.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '3',
    author: 'Vikram Kapoor',
    content:
      'Excellent teaching methodology. Anil sir breaks down complex topics into simple, understandable concepts. Very satisfied with the progress.',
    rating: 5,
    date: '6 days ago',
  },
]
