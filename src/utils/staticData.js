import TranscriptTabContent from "@components/clients/ClientSessionsTabs/TranscriptTabContent";
import SummaryTabContent from "@components/clients/ClientSessionsTabs/SummaryTabContent";
import TemplateNotes from "@components/clients/ClientSessionsTabs/TemplateNotes";
import CustomNotesTabContent from "@components/clients/ClientSessionsTabs/CustomNotesTabContent";

export const clientSessionTabs = [
  {
    name: "Transcript",
    value: "transcript",
    component: TranscriptTabContent,
  },
  {
    name: "Summary",
    value: "summary",
    component: SummaryTabContent,
  },
  {
    name: "Template Notes",
    value: "template-notes",
    component: TemplateNotes,
  },
  {
    name: "Action Plan",
    value: "action-plan",
    component: CustomNotesTabContent,
  },
  {
    name: "Custom Notes",
    value: "custom-notes",
    component: CustomNotesTabContent,
  },
];

export const ethnicityOptions = [
  "Punjabi",
  "Pashtun",
  "Sindhi",
  "Saraiki",
  "Muhajirs",
  "Balochi",
];

export const locationOptions = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Peshawar",
  "Quetta",
];

export const educationOptions = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
  "Professional Degree",
];

export const employmentStatusOptions = [
  "Employed Full-time",
  "Employed Part-time",
  "Self-employed",
  "Unemployed",
  "Student",
  "Retired",
];

export const religiousBeliefOptions = [
  "Islam",
  "Christianity",
  "Hinduism",
  "Sikhism",
  "Buddhism",
  "Other",
];

export const maritalStatusOptions = [
  "Single",
  "Married",
  "Divorced",
  "Widowed",
  "Separated",
];

export const testimonialsData = [
  {
    text: "As a clinician, I am looking forward to seeing the development and our role of Cymbiose. I believe it will help many clinicians to prevent burnout and provide more effective therapy services!",
    user: "Kyle H., Marriage and Family Counselor",
  },
  {
    text: "As someone from a diverse background, it's important to me that my therapist understands my cultural values and experiences. I have had too many experiences where that hasn’t been the case. Knowing that my therapist could use Cymbiose AI to enhance their cultural understanding of my experience would make me feel more comfortable and confident in our relationship. It’s also very settling to know my therapist has everything they need all in one space. Seeing that there are clear action and treatment plan sections in Cymbiose AI is reassuring for me as a client to know I’d have a therapist that is holistically focused.",
    user: "Kelly G., Consenting Client",
  },
  {
    text: "As a practicing mental health counselor for over 10 years, a product like this can truly help me save time after sessions. I love the idea of having insights along with the generated notes and hope to see them one day tailored to specific insurance companies. I look forward to integrating this into my practice!",
    user: "Dr. Gabrielle C., Gabby Cares of South Florida",
  },
  {
    text: "After reviewing the demo for Cymbiose AI, I am very interested. I love the cultural consideration area. As a therapist, that is incredibly useful and a good reminder. I would love to try this product once it comes out. Also, the option of being able to choose which note type is amazing!!",
    user: "Alexis S., Licensed Mental Health Counselor",
  },
  {
    text: "Cymbiose AI was demoed to me and I found it extremely amazing! Cymbiose is an innovative app that streamlines note taking for therapists while integrating cultural competence into their documentation. As demand for mental health services continue to grow, I find this solution only boosts therapist efficiency but also improves care for diverse populations. I would be extremely interested in a platform like this for not only therapists but all health care professionals.",
    user: "Chelsea B., Licensed Mental Health Counselor",
  },
  {
    text: "Cymbiose AI is a groundbreaking tool that seamlessly merges innovation and clinical precision, revolutionizing the creation of SOAP notes for therapists. With an intuitive interface and thoughtful curation, it transforms documentation into a swift, effortless process while preserving the nuanced details vital to effective client care. This clinician-crafted software not only enhances efficiency, but also empowers clinicians to gain deeper insight of themselves and their clients, setting a new gold standard in therapeutic documentation practices.",
    user: "Amber J., Registered Mental Health Counselor In Training",
  },
  {
    text: "The aspects and features of Cymbiose Ai I find most helpful is transcribing the session and creating a detailed note for me. The cultural competency part is really important to me as well since most of my clients are Black women and couples. Cymbiose Ai would benefit my practice because it would lessen how much time I spend on writing notes, to allow me more time to do other aspects needed to run my business like making content or planning activities for sessions. I think this is a great idea and wishing you all the best of luck, opportunities and opened doors. I think grad school therapy training programs could really benefit from this as well. Or practices with a lot of therapists within.",
    user: "Jordan M., LCMFT",
  },
  {
    text: "I like that the platform offered many different types of notes as well as the option to record sessions. I think it’s a good platform that can help clinicians regain some of their time in order to be able to really focus on the client.",
    user: "Terese H., Licensed Mental Health Counselor",
  },
  {
    text: "I had the pleasure of receiving a demo and briefly utilizing Cymbiose AI Beta, and I’m genuinely impressed by its potential. This tool is designed to enhance clinical workflows, making documentation and decision-making more efficient while prioritizing ethics and privacy. For fellow clinicians interested in responsibly integrating AI into their practice, Cymbiose AI Beta is definitely worth exploring!",
    user: "Ashley B., MSW, LICSW, LCSW",
  },
  {
    text: "I think Cymbiose is what practioners and their clients need without even knowing it will allow a health culture where both sides can feel the affects of providers having more time back, reducing burnout rates from overwhelm of note taking and documentation etc and ultimately clients/patients will receive care from more grounded, present minded providers. It’s a win win on both sides!",
    user: "Morgan K., Integrative Mental Health Counselor",
  },
];

export const focusCardsData = [
  {
    title: "Save 16+ hours per month",
    description: `Instantly capture clinical notes using one of our SOAP, DAP, Treatment Plans or Intake templates. Quickly review, session summaries share with supervisors, or send homework directly to clients.`,
    img: "/images/focus-note.png",
  },
  {
    title: "Clinical and cultural insights",
    description:
      "Whether you're unpacking family dynamics or identity exploration, Cymbiose supports your work with real-time, culturally informed insights  with tailored clinical intervention suggestions gaining valuable insights through our flexible opt-in tools.",
    img: "/images/focus-insights.png",
  },
  // {
  //   title: "Professional growth",
  //   description:
  //     "Cymbiose recommends CEUs based on the real patterns in your sessions—because your development should be just as personalized as your care.",
  //   img: "/images/focus-growth.png",
  // },
  {
    title: "Team collaboration",
    description:
      "Instantly recap key session insights with AI-generated summaries. Quickly review highlights, share with supervisors, or send to clients for collaborative care.",
    img: "/images/focus-team.png",
  },
];
